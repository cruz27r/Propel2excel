require('dotenv').config(); // Load environment variables

const mysql = require('mysql');

// MySQL Connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

// Example query to test connection
db.query('SELECT 1', (err, results) => {
    if (err) throw err;
    console.log(results);
});
