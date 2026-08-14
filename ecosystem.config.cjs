/**
 * PM2 process configuration for the Druva Badminton Academy app.
 * Keeps the Node static server (server.mjs) running on the app port and
 * restarts it on deploy / crash / reboot.
 */
module.exports = {
  apps: [
    {
      name: 'druva-sports',
      script: 'server.mjs',
      cwd: __dirname,
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        PORT: 3919,
        BASE_PATH: '/druva-sports',
      },
    },
  ],
}
