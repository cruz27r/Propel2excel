const P2EFellowApplication = require('../models/P2EFellowApplication');

// Function to handle POST request for submitting a P2E fellow application
exports.submitP2EFellowApplication = async (req, res) => {
  const { name, email, questions, linkedin } = req.body;
  const resume = req.file.path; // Assuming multer middleware is used in route

  try {
    const newApplication = new P2EFellowApplication({ 
      name, 
      email, 
      questions: JSON.parse(questions), 
      linkedin, 
      resume 
    });
    await newApplication.save();
    res.status(201).send({ message: 'Application submitted successfully', application: newApplication });
  } catch (err) {
    res.status(400).send({ message: 'Error submitting application', error: err });
  }
};

// Function to handle GET request for retrieving P2E fellow applications
exports.getApplications = async (req, res) => {
  try {
    const applications = await P2EFellowApplication.find({});
    res.status(200).send(applications);
  } catch (err) {
    res.status(400).send({ message: 'Error fetching applications', error: err });
  }
};
