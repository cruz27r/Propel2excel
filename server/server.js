const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const formRoutes = require('./routes/formRoutes');
const app = express();
const port = process.env.PORT || 3000;

// MySQL database connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL database.');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use form routes
app.use('/api/forms', formRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
