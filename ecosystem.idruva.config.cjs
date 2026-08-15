/**
 * PM2 process configuration for the idruva.intelhunt.com deployment of the
 * same Druva Badminton Academy app — dedicated subdomain, so it's mounted at
 * the root path instead of the /druva-sports sub-path.
 */
module.exports = {
  apps: [
    {
      name: 'druva-idruva',
      script: 'server.mjs',
      cwd: __dirname,
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        PORT: 3901,
        BASE_PATH: '/',
      },
    },
  ],
}
