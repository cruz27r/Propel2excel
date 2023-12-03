const mongoose = require('mongoose');

const linkedInSubmissionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    // Consider adding email validation
  },
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
