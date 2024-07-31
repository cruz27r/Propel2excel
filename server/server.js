require('dotenv').config(); // Load environment variables

const express = require('express');
const mysql2 = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const formRoutes = require('./routes/formRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS

// MySQL Connection
const db = mysql2.createConnection({
    host: process.env.DB_HOST, // RDS Endpoint
    user: process.env.DB_USER, // RDS Username
    password: process.env.DB_PASSWORD, // RDS Password
    database: process.env.DB_NAME, // Database name
    port: process.env.DB_PORT // MySQL port
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

// Set up storage engine
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// Initialize upload
const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 }, // 1MB file size limit
    fileFilter: function(req, file, cb) {
        checkFileType(file, cb);
    }
}).single('myFile');

// Check File Type
function checkFileType(file, cb) {
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif|txt/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images Only!');
    }
}

// Routes
app.use('/api', formRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
