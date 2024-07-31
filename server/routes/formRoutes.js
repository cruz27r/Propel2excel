const express = require('express');
const router = express.Router();
const db = require('../config/dbs'); // Adjust the path as needed

// Student Routes
router.get('/students', (req, res) => {
    db.query('SELECT * FROM student_submissions', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

router.post('/students', (req, res) => {
    const {
        firstName, lastName, email, nameofInstitution, phoneNumber, linkedinURL, resume,
        currentGPA, internshipExperience, top3Companies, studentQ1, studentQ2, studentQ3, studentQ4, studentQ5
    } = req.body;

    const query = `
        INSERT INTO student_submissions (
            firstName, lastName, email, nameofInstitution, phoneNumber, linkedinURL, resume,
            currentGPA, internshipExperience, top3Companies, studentQ1, studentQ2, studentQ3, studentQ4, studentQ5
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
        firstName, lastName, email, nameofInstitution, phoneNumber, linkedinURL, resume,
        currentGPA, internshipExperience, top3Companies, studentQ1, studentQ2, studentQ3, studentQ4, studentQ5
    ];

    db.query(query, values, (err, results) => {
        if (err) throw err;
        res.json({ message: 'Student created', id: results.insertId });
    });
});

// Company Routes
router.get('/companies', (req, res) => {
    db.query('SELECT * FROM company_submissions', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

router.post('/companies', (req, res) => {
    const {
        companyName, contactPerson, email, phoneNumber, companyURL, description,
        companyQ1, companyQ2, companyQ3, companyQ4, companyQ5
    } = req.body;

    const query = `
        INSERT INTO company_submissions (
            companyName, contactPerson, email, phoneNumber, companyURL, description,
            companyQ1, companyQ2, companyQ3, companyQ4, companyQ5
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
        companyName, contactPerson, email, phoneNumber, companyURL, description,
        companyQ1, companyQ2, companyQ3, companyQ4, companyQ5
    ];

    db.query(query, values, (err, results) => {
        if (err) throw err;
        res.json({ message: 'Company created', id: results.insertId });
    });
});

// Volunteer Routes
router.get('/volunteers', (req, res) => {
    db.query('SELECT * FROM volunteer_submissions', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

router.post('/volunteers', (req, res) => {
    const {
        firstName, lastName, email, phoneNumber, linkedinURL, resume,
        volunteerExperience, volunteerQ1, volunteerQ2, volunteerQ3, volunteerQ4, volunteerQ5
    } = req.body;

    const query = `
        INSERT INTO volunteer_submissions (
            firstName, lastName, email, phoneNumber, linkedinURL, resume,
            volunteerExperience, volunteerQ1, volunteerQ2, volunteerQ3, volunteerQ4, volunteerQ5
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
        firstName, lastName, email, phoneNumber, linkedinURL, resume,
        volunteerExperience, volunteerQ1, volunteerQ2, volunteerQ3, volunteerQ4, volunteerQ5
    ];

    db.query(query, values, (err, results) => {
        if (err) throw err;
        res.json({ message: 'Volunteer created', id: results.insertId });
    });
});

module.exports = router;
