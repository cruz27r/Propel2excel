const ResumeSubmission = require('../models/ResumeSubmission');

// Function to handle POST request for submitting a resume
exports.submitResume = async (req, res) => {
  const { name, email, careerPath } = req.body;
  const resume = req.file.path; // Resume file path

  try {
    const newSubmission = new ResumeSubmission({
      name,
      email,
      careerPath,
      resume
    });
    await newSubmission.save();
    res.status(201).send({ message: 'Resume submitted successfully', submission: newSubmission });
  } catch (err) {
    res.status(400).send({ message: 'Error submitting resume', error: err });
  }
};

// Function to handle GET request for retrieving resumes
exports.getResumes = async (req, res) => {
  try {
    const resumes = await ResumeSubmission.find({});
    res.status(200).send(resumes);
  } catch (err) {
    res.status(400).send({ message: 'Error fetching resumes', error: err });
  }
};
