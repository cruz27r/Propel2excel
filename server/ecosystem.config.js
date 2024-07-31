module.exports = {
    apps: [
      {
        name: 'p2e-api',
        script: './server.js',
        env: {
          NODE_ENV: 'development',
          DB_HOST: 'propel2excel-backend.chcqkim6alxi.us-east-2.rds.amazonaws.com',
          DB_USER: 'admin',
          DB_PASSWORD: 'Propel2Excel',
          DB_NAME: 'propel2excel-backend',
          DB_PORT: 3306,
          PORT: 5000
        },
        env_production: {
          NODE_ENV: 'production',
          DB_HOST: 'propel2excel-backend.chcqkim6alxi.us-east-2.rds.amazonaws.com',
          DB_USER: 'admin',
          DB_PASSWORD: 'Propel2Excel',
          DB_NAME: 'propel2excel-backend',
          DB_PORT: 3306,
          PORT: 5000
        }
      }
    ]
  };
  