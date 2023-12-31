const mongoose = require('mongoose');

const resumeSubmissionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  careerPath: {
    type: String,
    required: true,
  },
  resume: {
    type: String, // Store the file path to the uploaded resume
    required: true,
  },
  submissionDate: {
    type: Date,
    default: Date.now,
  },
});

const ResumeSubmission = mongoose.model('ResumeSubmission', resumeSubmissionSchema);

module.exports = ResumeSubmission;
