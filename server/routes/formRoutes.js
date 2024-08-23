const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { Student } = require('../models/Student');
const { Company } = require('../models/Company');
const { Volunteer } = require('../models/Volunteer');


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

// Generic error handler function
function handleError(res, err, context = '') {
    console.error(`${context} Error:`, err);
    res.status(500).json({
        error: 'Database error',
        message: err.message,
        context: context,
    });
}

// Student Routes
router.get('/students', async (req, res) => {
    try {
        const students = await Student.findAll();
        res.json(students);
    } catch (err) {
        return handleError(res, err, 'Fetching students');
    }
});

router.post('/students', upload.single('resume'), async (req, res) => {
    const {
        firstName, lastName, email, nameofInstitution, phoneNumber, linkedinURL, currentGPA,
        internshipExperience, top3Companies, studentQ1, studentQ2, studentQ3, studentQ4, studentQ5,
        howDidYouHearAboutUs, organizations
    } = req.body;
    const resume = req.file ? req.file.filename : null;

    try {
        const newStudent = await Student.create({
            firstName, lastName, email, nameofInstitution, phoneNumber, linkedinURL, resume,
            currentGPA, internshipExperience, top3Companies, studentQ1, studentQ2, studentQ3,
            studentQ4, studentQ5, howDidYouHearAboutUs, organizations
        });
        res.status(201).json({ message: 'Student created', id: newStudent.id });
    } catch (err) {
        return handleError(res, err, 'Inserting student');
    }
});

// Company Routes
router.post('/companies', async (req, res) => {
    const {
        companyName, contactPerson, email, phoneNumber, companyURL, description,
        companyQ1, companyQ2, companyQ3, companyQ4, companyQ5
    } = req.body;

    try {
        const newCompany = await Company.create({
            companyName, contactPerson, email, phoneNumber, companyURL, description,
            companyQ1, companyQ2, companyQ3, companyQ4, companyQ5
        });
        res.status(201).json({ message: 'Company created', id: newCompany.id });
    } catch (err) {
        return handleError(res, err, 'Inserting company');
    }
});

// Volunteer Routes
router.post('/volunteers', upload.single('resume'), async (req, res) => {
    const {
        firstName, lastName, email, phoneNumber, linkedinURL, volunteerExperience,
        volunteerQ1, volunteerQ2, volunteerQ3, volunteerQ4, volunteerQ5
    } = req.body;
    const resume = req.file ? req.file.filename : null;

    try {
        const newVolunteer = await Volunteer.create({
            firstName, lastName, email, phoneNumber, linkedinURL, resume,
            volunteerExperience, volunteerQ1, volunteerQ2, volunteerQ3, volunteerQ4, volunteerQ5
        });
        res.status(201).json({ message: 'Volunteer created', id: newVolunteer.id });
    } catch (err) {
        return handleError(res, err, 'Inserting volunteer');
    }
});

module.exports = router;
