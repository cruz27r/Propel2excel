const express = require('express');
const router = express.Router();
const submissionStudentModel = require('../models/submissionStudentModel');
const submissionCompanyModel = require('../models/submissionCompanyModel');
const submissionVolunteerModel = require('../models/submissionVolunteerModel');

// Test Database Connection
router.get('/test', (req, res) => {
    res.send('Database connection is working');
});

// Get all students
router.get('/students', async (req, res) => {
    try {
        const students = await submissionStudentModel.findAll();
        res.json(students);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Create a new student
router.post('/students', async (req, res) => {
    try {
        const newStudent = await submissionStudentModel.create(req.body);
        res.json(newStudent);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all companies
router.get('/companies', async (req, res) => {
    try {
        const companies = await submissionCompanyModel.findAll();
        res.json(companies);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Create a new company
router.post('/companies', async (req, res) => {
    try {
        const newCompany = await submissionCompanyModel.create(req.body);
        res.json(newCompany);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all volunteers
router.get('/volunteers', async (req, res) => {
    try {
        const volunteers = await submissionVolunteerModel.findAll();
        res.json(volunteers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Create a new volunteer
router.post('/volunteers', async (req, res) => {
    try {
        const newVolunteer = await submissionVolunteerModel.create(req.body);
        res.json(newVolunteer);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
