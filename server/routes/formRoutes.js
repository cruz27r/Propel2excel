const express = require('express');
const router = express.Router();
const db = require('../config/dbs');
const multer = require('multer');
const path = require('path');

// Configure Multer for file uploads (resume handling)
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 }, // 1MB file size limit
});

// Health Check Route
router.get('/health', (req, res) => {
    res.status(200).json({ status: 'API is healthy' });
});

// Student Routes
router.get('/students', (req, res) => {
    db.query('SELECT * FROM student_submissions', (err, results) => {
        if (err) {
            console.error('Error fetching students:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.json(results);
    });
});

router.post('/students', upload.single('resume'), (req, res) => {
    const {
        firstName, lastName, email, nameofInstitution, phoneNumber, linkedinURL, currentGPA,
        internshipExperience, top3Companies, studentQ1, studentQ2, studentQ3, studentQ4, studentQ5,
        howDidYouHearAboutUs, organizations
    } = req.body;
    const resume = req.file ? req.file.filename : null;

    // Set default values if howDidYouHearAboutUs or organizations are missing
    const finalHowDidYouHearAboutUs = howDidYouHearAboutUs || 'Unknown';
    const finalOrganizations = organizations || 'Unknown';

    const query = `
        INSERT INTO student_submissions (
            firstName, lastName, email, nameofInstitution, phoneNumber, linkedinURL, resume,
            currentGPA, internshipExperience, top3Companies, studentQ1, studentQ2, studentQ3,
            studentQ4, studentQ5, howDidYouHearAboutUs, organizations
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
        firstName, lastName, email, nameofInstitution, phoneNumber, linkedinURL, resume,
        currentGPA, internshipExperience, top3Companies, studentQ1, studentQ2, studentQ3,
        studentQ4, studentQ5, finalHowDidYouHearAboutUs, finalOrganizations
    ];

    db.query(query, values, (err, results) => {
        if (err) {
            console.error('Error inserting student:', err);
            return res.status(500).json({ error: 'Database error', details: err.message });
        }
        res.status(201).json({ message: 'Student created', id: results.insertId });
    });
});

// Company Routes
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
        if (err) {
            console.error('Error inserting company:', err);
            return res.status(500).json({ error: 'Database error', details: err.message });
        }
        res.status(201).json({ message: 'Company created', id: results.insertId });
    });
});

// Volunteer Routes
router.post('/volunteers', upload.single('resume'), (req, res) => {
    const {
        firstName, lastName, email, phoneNumber, linkedinURL, volunteerExperience,
        volunteerQ1, volunteerQ2, volunteerQ3, volunteerQ4, volunteerQ5
    } = req.body;
    const resume = req.file ? req.file.filename : null;

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
        if (err) {
            console.error('Error inserting volunteer:', err);
            return res.status(500).json({ error: 'Database error', details: err.message });
        }
        res.status(201).json({ message: 'Volunteer created', id: results.insertId });
    });
});

module.exports = router;
