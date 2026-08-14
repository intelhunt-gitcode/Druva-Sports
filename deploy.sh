#!/usr/bin/env bash
# ===========================================================================
#  Druva Badminton Academy — one-command deploy to demos.intelhunt.com
# ===========================================================================
#  Run from your machine (Git Bash / WSL / Linux / macOS) — it builds the app
#  and ships it to the server, then (re)starts it with PM2.
#
#  Credentials are read from the environment (never hard-coded). Either:
#    1) copy .deploy.env.example → .deploy.env, fill it in (it's gitignored),
#       then:   set -a; source .deploy.env; set +a; ./deploy.sh
#    2) or export SSH_PASSWORD (and any overrides) yourself before running.
#
#  Password auth uses `sshpass` (install: apt/brew install sshpass). If you use
#  an SSH key instead, just leave SSH_PASSWORD empty and your key is used.
# ===========================================================================
set -euo pipefail

SSH_HOST="${SSH_HOST:-103.192.198.87}"
SSH_PORT="${SSH_PORT:-22}"
SSH_USER="${SSH_USER:-intelhunt-demos}"
APP_DIR="${APP_DIR:-/home/intelhunt-demos/htdocs/demos.intelhunt.com/Druva-Sports}"
BASE_PATH="${BASE_PATH:-/druva-sports/}"
SITE_URL="${VITE_SITE_URL:-https://demos.intelhunt.com/druva-sports}"

# sshpass wrapper (used only if a password is supplied).
SSH_PRE=()
if [ -n "${SSH_PASSWORD:-}" ]; then
  if ! command -v sshpass >/dev/null 2>&1; then
    echo "ERROR: SSH_PASSWORD is set but 'sshpass' is not installed." >&2
    echo "Install it (apt/brew install sshpass) or use an SSH key instead." >&2
    exit 1
  fi
  export SSHPASS="$SSH_PASSWORD"
  SSH_PRE=(sshpass -e)
fi
SSH_OPTS=(-p "$SSH_PORT" -o StrictHostKeyChecking=accept-new)
SCP_OPTS=(-P "$SSH_PORT" -o StrictHostKeyChecking=accept-new)

echo "==> Building (base ${BASE_PATH})"
npm ci
BASE_PATH="$BASE_PATH" VITE_SITE_URL="$SITE_URL" npm run build

echo "==> Assembling deploy bundle"
rm -rf deploy && mkdir -p deploy/dist
cp -r dist/. deploy/dist/
cp server.mjs ecosystem.config.cjs deploy/
cp deploy-package.json deploy/package.json

echo "==> Uploading to ${SSH_USER}@${SSH_HOST}:${APP_DIR}"
"${SSH_PRE[@]}" ssh "${SSH_OPTS[@]}" "${SSH_USER}@${SSH_HOST}" "mkdir -p '${APP_DIR}'"
"${SSH_PRE[@]}" scp "${SCP_OPTS[@]}" -r deploy/. "${SSH_USER}@${SSH_HOST}:${APP_DIR}/"

echo "==> Starting app with PM2"
"${SSH_PRE[@]}" ssh "${SSH_OPTS[@]}" "${SSH_USER}@${SSH_HOST}" bash -lc "'
  set -e
  export NVM_DIR=\"\$HOME/.nvm\"; [ -s \"\$NVM_DIR/nvm.sh\" ] && . \"\$NVM_DIR/nvm.sh\"
  command -v pm2 >/dev/null 2>&1 || npm install -g pm2
  cd \"${APP_DIR}\"
  pm2 startOrReload ecosystem.config.cjs --update-env
  pm2 save
  sleep 2
  curl -fsS http://127.0.0.1:3919/druva-sports/healthz && echo \" — app is up\"
'"

echo "==> Done. Visit: ${SITE_URL}"
echo "    (If you get 502/404, add the Nginx block from nginx-druva-sports.conf to the vhost.)"
