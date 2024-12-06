module.exports = {
    apps: [
      {
        name: 'ingeniumfe',
        port: 3000,
        script: 'npm run start',
        args: 'start',
        cwd: './',
        watch: true,
        env: {
          NODE_ENV: 'development'
        },
        env_production: {
          NODE_ENV: 'production'
        }
      }
    ]
  };