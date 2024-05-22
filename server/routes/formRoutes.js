const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Route to handle form submissions
router.post('/submit', (req, res) => {
  const submission = req.body;
  const sql = 'INSERT INTO submissions SET ?';
  db.query(sql, submission, (err, result) => {
    if (err) {
      res.status(500).send('Server error');
      throw err;
    }
    res.status(200).send('Form submission received!');
  });
});

module.exports = router;
