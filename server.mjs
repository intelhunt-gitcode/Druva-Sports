/**
 * Production static server for the Druva Badminton Academy SPA.
 *
 * Zero runtime dependencies (Node core only). Serves the built `dist/` folder
 * with correct content types, long-cache for hashed assets, and SPA fallback
 * to index.html. Works whether the reverse proxy strips the base path or not.
 *
 * Env:
 *   PORT       (default 3919)         — port to listen on
 *   BASE_PATH  (default /druva-sports) — sub-path the app is mounted at
 */
import { createServer } from 'node:http'
import { stat, readFile } from 'node:fs/promises'
import { join, normalize, extname } from 'node:path'
import { fileURLToPath } from 'node:url'

const PORT = Number(process.env.PORT) || 3919
const BASE = (process.env.BASE_PATH || '/druva-sports').replace(/\/+$/, '')
const ROOT = fileURLToPath(new URL('./dist', import.meta.url))

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.webmanifest': 'application/manifest+json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml',
  '.map': 'application/json',
}

async function sendFile(res, file, status = 200) {
  const data = await readFile(file)
  const ext = extname(file).toLowerCase()
  const isHtml = ext === '.html'
  const isHashed = file.includes(`${join(ROOT, 'assets')}`) // vite hashed assets
  res.writeHead(status, {
    'Content-Type': TYPES[ext] || 'application/octet-stream',
    'Cache-Control': isHtml
      ? 'no-cache'
      : isHashed
        ? 'public, max-age=31536000, immutable'
        : 'public, max-age=3600',
    'X-Content-Type-Options': 'nosniff',
  })
  res.end(data)
}

const server = createServer(async (req, res) => {
  try {
    let path = decodeURIComponent((req.url || '/').split('?')[0])

    // Health check (both mounted and root).
    if (path === '/healthz' || path === `${BASE}/healthz`) {
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      return res.end('ok')
    }

    // Normalise: strip the base prefix if the proxy forwards it.
    if (BASE && (path === BASE || path.startsWith(`${BASE}/`))) {
      path = path.slice(BASE.length) || '/'
    }

    // Prevent path traversal.
    const rel = normalize(path).replace(/^(\.\.[/\\])+/, '')
    let file = join(ROOT, rel)
    if (!file.startsWith(ROOT)) {
      res.writeHead(403, { 'Content-Type': 'text/plain' })
      return res.end('Forbidden')
    }

    try {
      const s = await stat(file)
      if (s.isDirectory()) file = join(file, 'index.html')
      await sendFile(res, file)
    } catch {
      // SPA fallback — let the client router handle unknown paths.
      await sendFile(res, join(ROOT, 'index.html'), 200)
    }
  } catch {
    res.writeHead(500, { 'Content-Type': 'text/plain' })
    res.end('Internal Server Error')
  }
})

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Druva Badminton Academy serving on :${PORT} at base "${BASE}"`)
})
