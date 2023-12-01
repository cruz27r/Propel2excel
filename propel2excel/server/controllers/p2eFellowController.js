const P2EFellowApplication = require('../models/P2EFellowApplication');
const uploadResume = require('../middlewares/multer');

exports.submitP2EFellowApplication = (req, res) => {
  uploadResume(req, res, async (error) => {
    if (error) {
      return res.status(500).send({ message: error.message });
    }
    const { name, email, questions, linkedin } = req.body;
    const resume = req.file.path;

    try {
      const newApplication = new P2EFellowApplication({ name, email, questions: JSON.parse(questions), linkedin, resume });
      await newApplication.save();
      res.status(201).send({ message: 'Application submitted successfully', application: newApplication });
    } catch (err) {
      res.status(400).send({ message: 'Error submitting application', error: err });
    }
  });
};
