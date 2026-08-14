# ===========================================================================
#  Druva Badminton Academy — one-command deploy (Windows PowerShell)
# ===========================================================================
#  Run from PowerShell in this folder:   ./deploy.ps1
#  Uses Windows' built-in OpenSSH (ssh/scp). You'll be prompted for the
#  server password a few times (or set up an SSH key to avoid prompts).
#  No password is stored in this script.
# ===========================================================================
$ErrorActionPreference = "Stop"

$SSH_HOST = if ($env:SSH_HOST) { $env:SSH_HOST } else { "103.192.198.87" }
$SSH_PORT = if ($env:SSH_PORT) { $env:SSH_PORT } else { "22" }
$SSH_USER = if ($env:SSH_USER) { $env:SSH_USER } else { "intelhunt-demos" }
$APP_DIR  = if ($env:APP_DIR)  { $env:APP_DIR }  else { "/home/intelhunt-demos/htdocs/demos.intelhunt.com/Druva-Sports" }
$BASE_PATH = if ($env:BASE_PATH) { $env:BASE_PATH } else { "/druva-sports/" }
$SITE_URL  = if ($env:VITE_SITE_URL) { $env:VITE_SITE_URL } else { "https://demos.intelhunt.com/druva-sports" }

Write-Host "==> Building (base $BASE_PATH)" -ForegroundColor Cyan
npm ci
$env:BASE_PATH = $BASE_PATH
$env:VITE_SITE_URL = $SITE_URL
npm run build

Write-Host "==> Assembling deploy bundle" -ForegroundColor Cyan
if (Test-Path deploy) { Remove-Item -Recurse -Force deploy }
New-Item -ItemType Directory -Force -Path deploy/dist | Out-Null
Copy-Item -Recurse -Force dist/* deploy/dist/
Copy-Item -Force server.mjs, ecosystem.config.cjs deploy/
Copy-Item -Force deploy-package.json deploy/package.json

$dest = "${SSH_USER}@${SSH_HOST}"
Write-Host "==> Uploading to ${dest}:${APP_DIR}" -ForegroundColor Cyan
ssh -p $SSH_PORT -o StrictHostKeyChecking=accept-new $dest "mkdir -p '$APP_DIR'"
scp -P $SSH_PORT -o StrictHostKeyChecking=accept-new -r deploy/* "${dest}:${APP_DIR}/"

Write-Host "==> Starting app with PM2" -ForegroundColor Cyan
$remote = @"
export NVM_DIR="`$HOME/.nvm"; [ -s "`$NVM_DIR/nvm.sh" ] && . "`$NVM_DIR/nvm.sh"
command -v pm2 >/dev/null 2>&1 || npm install -g pm2
cd "$APP_DIR"
pm2 startOrReload ecosystem.config.cjs --update-env
pm2 save
sleep 2
curl -fsS http://127.0.0.1:3919/druva-sports/healthz && echo " - app is up"
"@
ssh -p $SSH_PORT -o StrictHostKeyChecking=accept-new $dest "bash -lc '$remote'"

Write-Host "==> Done. Visit: $SITE_URL" -ForegroundColor Green
Write-Host "    (If you get 502/404, add nginx-druva-sports.conf to the vhost.)" -ForegroundColor Yellow
