const mongoose = require('mongoose');

const linkedInSubmissionSchema = new mongoose.Schema({
  linkedinUrl: {
    type: String,
    required: true,
  },
  submissionDate: {
    type: Date,
    default: Date.now,
  },
});

const LinkedInSubmission = mongoose.model('LinkedInSubmission', linkedInSubmissionSchema);

module.exports = LinkedInSubmission;
