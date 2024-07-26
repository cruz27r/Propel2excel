const express = require('express');
const router = express.Router();
const db = require('../dbs');

// Student Routes
router.get('/students', (req, res) => {
    db.query('SELECT * FROM Students', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

router.post('/students', (req, res) => {
    const { name, email, resume } = req.body;
    db.query('INSERT INTO Students (name, email, resume) VALUES (?, ?, ?)', [name, email, resume], (err, results) => {
        if (err) throw err;
        res.json({ message: 'Student created', id: results.insertId });
    });
});

// Company Routes
router.get('/companies', (req, res) => {
    db.query('SELECT * FROM Companies', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

router.post('/companies', (req, res) => {
    const { companyName, contactEmail, description } = req.body;
    db.query('INSERT INTO Companies (companyName, contactEmail, description) VALUES (?, ?, ?)', [companyName, contactEmail, description], (err, results) => {
        if (err) throw err;
        res.json({ message: 'Company created', id: results.insertId });
    });
});

// Volunteer Routes
router.get('/volunteers', (req, res) => {
    db.query('SELECT * FROM Volunteers', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

router.post('/volunteers', (req, res) => {
    const { name, email, availability } = req.body;
    db.query('INSERT INTO Volunteers (name, email, availability) VALUES (?, ?, ?)', [name, email, availability], (err, results) => {
        if (err) throw err;
        res.json({ message: 'Volunteer created', id: results.insertId });
    });
});

module.exports = router;
