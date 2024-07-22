require('dotenv').config(); // Load environment variables

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error('Error connecting to MongoDB:', error));
db.once('open', () => console.log('Connected to MongoDB'));

// Routes
const formRoutes = require('./routes/formRoutes');
app.use('/api', formRoutes);

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Start the server
const PORT = process.env.PORT || 3306;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
