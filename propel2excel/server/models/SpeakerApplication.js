const mongoose = require('mongoose');

const speakerApplicationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  bio: { type: String, required: true },
  topics: { type: String, required: true },
  previousExperience: { type: String, required: true }
});

module.exports = mongoose.model('SpeakerApplication', speakerApplicationSchema);
