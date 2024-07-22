const express = require('express');
const router = express.Router();
const SubmissionStudent = require('../models/submissionStudentModel');
const SubmissionCompany = require('../models/submissionCompanyModel');
const SubmissionVolunteer = require('../models/submissionVolunteerModel');

// Student Submission
router.post('/submit-student', async (req, res) => {
    const { name, email, projectTitle, projectDescription } = req.body;

    const newSubmission = new SubmissionStudent({
        name,
        email,
        projectTitle,
        projectDescription
    });

    try {
        const savedSubmission = await newSubmission.save();
        res.status(201).json(savedSubmission);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Company Submission
router.post('/submit-company', async (req, res) => {
    const { name, email, companyName, companyDescription } = req.body;

    const newSubmission = new SubmissionCompany({
        name,
        email,
        companyName,
        companyDescription
    });

    try {
        const savedSubmission = await newSubmission.save();
        res.status(201).json(savedSubmission);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Volunteer Submission
router.post('/submit-volunteer', async (req, res) => {
    const { name, email, volunteerRole, volunteerDescription } = req.body;

    const newSubmission = new SubmissionVolunteer({
        name,
        email,
        volunteerRole,
        volunteerDescription
    });

    try {
        const savedSubmission = await newSubmission.save();
        res.status(201).json(savedSubmission);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
