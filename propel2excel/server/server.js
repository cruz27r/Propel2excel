const express = require('express');
const cors = require('cors'); // Ensure cors is installed with npm install cors
const mongoose = require('mongoose');
require('dotenv').config();

const app = express(); // Initialize your express app

app.use(cors()); // Use cors middleware for handling Cross-Origin Resource Sharing
app.use(express.json()); // Middleware for parsing JSON bodies

// Route definitions
app.use('/api', require('./routes/routes'));

// Connect to MongoDB without deprecated options
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
