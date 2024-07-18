require('dotenv').config(); // Load environment variables

const express = require('express');
const mysql2 = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS

// MySQL Connection
const db = mysql2.createConnection({
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

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Example route with database query
app.get('/data', (req, res) => {
    const query = 'SELECT * FROM your_table';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
