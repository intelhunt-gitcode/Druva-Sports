# Deployment — demos.intelhunt.com/druva-sports

This repo ships a **GitHub Actions CI/CD pipeline** that builds the site and
deploys it to the CloudPanel server on every push to `main`.

- **Live URL:** https://demos.intelhunt.com/druva-sports
- **App server:** `server.mjs` (zero-dependency Node static server) kept alive by **PM2**
- **App port:** `3919` · **Base path:** `/druva-sports`
- **Node:** 22 LTS

Flow: `push to main` → GitHub Actions builds `dist/` (with base `/druva-sports/`)
→ SCP the bundle to the server → PM2 reload → health check.

---

## 1. Put the code in the new repo

From your local folder `D:\github\iht\Druva-Sports` (the **contents of this
`Druva` project** become the repo root — `package.json`, `server.mjs`,
`.github/` etc. at the top level):

```bash
cd D:\github\iht\Druva-Sports
git init
git add .
git commit -m "Druva Badminton Academy website + CI/CD"
git branch -M main
git remote add origin https://github.com/intelhunt-gitcode/Druva-Sports.git
git push -u origin main
```

> The `.github/workflows/deploy.yml` pipeline runs on that first push. It will
> fail at the "Upload to server" step until you add the secrets in step 2 —
> that's expected. Add the secrets, then re-run the workflow.

---

## 2. Add GitHub repository secrets

Repo → **Settings → Secrets and variables → Actions → New repository secret**.
Create these (do **not** put them anywhere in the code):

| Secret name    | Value                                                                 |
| -------------- | --------------------------------------------------------------------- |
| `SSH_HOST`     | `103.192.198.87`                                                      |
| `SSH_PORT`     | `22`                                                                  |
| `SSH_USER`     | `intelhunt-demos`  *(the CloudPanel site user — owns the app dir)*     |
| `SSH_PASSWORD` | *the **Site User Pwd** for `intelhunt-demos`*                          |
| `APP_DIR`      | `/home/intelhunt-demos/htdocs/demos.intelhunt.com/Druva-Sports`        |

Notes:
- We deploy as the **site user** `intelhunt-demos` because the app directory
  lives under its home and PM2 should run as that user. (The general
  `intelhunt_ssh` account also works if it can write there, but the site user
  is cleaner.)
- Password auth is used because that's what was provided. **More secure
  option:** create an SSH key pair, add the public key to the server's
  `~/.ssh/authorized_keys`, and swap `password:` for `key: ${{ secrets.SSH_KEY }}`
  in `.github/workflows/deploy.yml`.

---

## 3. One-time server setup (CloudPanel)

Do this once so the app can run and the domain routes to it.

**a) Make sure Node 22 + PM2 exist for the site user.** SSH in as
`intelhunt-demos` (or via CloudPanel terminal):

```bash
node -v          # should be v22.x — install/select via CloudPanel Node.js or nvm
npm install -g pm2
pm2 startup      # follow the printed instruction so PM2 survives reboots
```

**b) Create the app directory:**

```bash
mkdir -p /home/intelhunt-demos/htdocs/demos.intelhunt.com/Druva-Sports
```

**c) Add the reverse-proxy route.** In CloudPanel → Sites →
`demos.intelhunt.com` → **Vhost**, paste the blocks from
[`nginx-druva-sports.conf`](./nginx-druva-sports.conf) inside the `server { }`
block, then save (CloudPanel reloads Nginx). This forwards
`/druva-sports/` → `http://127.0.0.1:3919` without stripping the path.

---

## 4. Deploy

Push to `main` (or Actions tab → **Run workflow**). The pipeline will:

1. `npm ci` and build with `BASE_PATH=/druva-sports/`
2. SCP `dist/ + server.mjs + ecosystem.config.cjs + package.json` to `APP_DIR`
3. `pm2 startOrReload ecosystem.config.cjs` and `pm2 save`
4. Smoke-test `http://127.0.0.1:3919/druva-sports/healthz`

Then open **https://demos.intelhunt.com/druva-sports**.

---

## 5. Add the real logo

Drop the official logo at `public/logo.png` (and optionally a white version at
`public/logo-white.png` for the dark footer), commit, and push — it appears
everywhere automatically. Until then a text wordmark shows as a fallback.

---

## Quickest path — deploy from your machine (no GitHub needed)

Your machine can reach the server directly, so you can deploy in one command
without setting up GitHub Actions/secrets at all.

**Git Bash / WSL / macOS / Linux:**
```bash
cp .deploy.env.example .deploy.env      # fill in SSH_PASSWORD (gitignored)
set -a; source .deploy.env; set +a
./deploy.sh
```
(needs `sshpass` for password auth: `apt install sshpass` / `brew install sshpass`; or use an SSH key and leave the password blank)

**Windows PowerShell:**
```powershell
./deploy.ps1        # prompts for the server password when connecting
```

Both scripts build with the correct base path, upload the bundle, and
start/reload the app with PM2. First time only, do the one-time server setup
(§3) so Node/PM2 exist and the Nginx route is in place.

---

## Manual deploy (fallback, no CI)

From the server, in `APP_DIR`, if you ever need to run it by hand:

```bash
# after copying dist/ + server.mjs + ecosystem.config.cjs here:
pm2 start ecosystem.config.cjs   # first time
pm2 reload druva-sports          # subsequent updates
pm2 logs druva-sports            # view logs
```

## Troubleshooting

- **502 / Bad Gateway:** the app isn't running or is on the wrong port.
  `pm2 list`, `pm2 logs druva-sports`, confirm it's listening on `3919`.
- **Assets 404 / blank page:** the base path is wrong. The build must run with
  `BASE_PATH=/druva-sports/` (the workflow sets this) and Nginx must pass the
  `/druva-sports/` prefix through (see the conf file).
- **`pm2: command not found` in CI:** the site user's PATH lacks pm2/node. The
  workflow sources `~/.nvm/nvm.sh` and installs pm2 if missing; if you use a
  non-nvm Node, adjust the PATH lines in `deploy.yml`.
- **`curl healthz` fails but page loads:** harmless if the reverse proxy is
  fine; the smoke test hits the app directly on `127.0.0.1:3919`.
