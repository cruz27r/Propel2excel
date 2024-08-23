require('dotenv').config(); // Load environment variables
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT,
    logging: false, // Disable logging; default: console.log
});

sequelize.authenticate()
    .then(() => console.log('Connected to MySQL via Sequelize'))
    .catch(err => console.error('Unable to connect to MySQL via Sequelize:', err));

// Export the sequelize instance to use it in other files (e.g., models)
module.exports = sequelize;
