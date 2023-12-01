const ResumeSubmission = require('../models/ResumeSubmission');
const uploadResume = require('../middlewares/multer');

exports.submitResume = (req, res) => {
  uploadResume(req, res, async (error) => {
    if (error) {
      return res.status(500).send({ message: error.message });
    }

    const { introduction } = req.body;
    const resume = req.file.path; // Resume file path

    try {
      const newSubmission = new ResumeSubmission({
        introduction,
        resume, // Saving the path of the uploaded resume file
      });

      await newSubmission.save();
      res.status(201).send({ message: 'Resume submitted successfully', submission: newSubmission });
    } catch (err) {
      res.status(400).send({ message: 'Error submitting resume', error: err });
    }
  });
};
