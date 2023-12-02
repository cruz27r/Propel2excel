const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer');

// Import your controllers
const p2eFellowController = require('../controllers/p2eFellowController');
const speakerController = require('../controllers/speakerController');
const sponsorController = require('../controllers/sponsorController');
const linkedInController = require('../controllers/submitLinkedInController');
const resumeController = require('../controllers/submitResumeController');

// Define routes for each controller
router.post('/fellow-application', upload.single('resume'), p2eFellowController.submitP2EFellowApplication);
router.get('/fellow-applications', p2eFellowController.getApplications);

router.post('/speaker-application', speakerController.submitSpeakerApplication);
router.get('/speakers', speakerController.getSpeakers);

router.post('/sponsor-application', sponsorController.submitSponsorApplication);
router.get('/sponsors', sponsorController.getSponsors);

router.post('/linkedin-submission', linkedInController.submitLinkedIn);
router.get('/linkedin-submissions', linkedInController.getLinkedInSubmissions);

router.post('/resume-submission', upload.single('resume'), resumeController.submitResume);
router.get('/resumes', resumeController.getResumes);

module.exports = router;
