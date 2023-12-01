const mongoose = require('mongoose');

const p2EFellowApplicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  questions: [{ type: String, required: true }],
  linkedin: { type: String, required: true },
  resume: { type: String, required: true } // Path to uploaded resume file
});

module.exports = mongoose.model('P2EFellowApplication', p2EFellowApplicationSchema);
