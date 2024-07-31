require('dotenv').config(); // Load environment variables
const db = require('./config/dbs');

db.query('SELECT 1 + 1 AS solution', (err, results) => {
    if (err) {
        console.error('Error executing query:', err);
        return;
    }
    console.log('The solution is: ', results[0].solution);
});
