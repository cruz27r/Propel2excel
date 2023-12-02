const express = require('express');
const cors = require('cors'); // Make sure you have installed cors with npm install cors
const mongoose = require('mongoose');
require('dotenv').config();

const app = express(); // Initialize your express app

app.use(cors()); // Use cors middleware
app.use(express.json()); // Middleware for parsing JSON

// Other middleware or route definitions
app.use('/api', require('./routes/routes'));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
