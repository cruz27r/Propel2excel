const mongoose = require('mongoose');

const sponsorApplicationSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  contactPerson: { type: String, required: true },
  email: { type: String, required: true },
  sponsorshipLevel: { type: String, required: true },
  message: { type: String }
});

module.exports = mongoose.model('SponsorApplication', sponsorApplicationSchema);
