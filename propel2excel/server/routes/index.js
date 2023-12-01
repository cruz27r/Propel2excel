const express = require('express');
const router = express.Router();

const { submitP2EFellowApplication } = require('../controllers/p2eFellowController');
const { submitSpeakerApplication } = require('../controllers/speakerController');
const { submitSponsorApplication } = require('../controllers/sponsorController');

router.post('/become-p2e', submitP2EFellowApplication);
router.post('/become-speaker', submitSpeakerApplication);
router.post('/become-sponsor', submitSponsorApplication);

module.exports = router;
