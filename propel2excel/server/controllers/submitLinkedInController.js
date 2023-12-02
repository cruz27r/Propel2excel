const LinkedInSubmission = require('../models/LinkedInSubmission');

// Function to handle POST request for submitting a LinkedIn profile
exports.submitLinkedIn = async (req, res) => {
  const { linkedinUrl } = req.body;

  try {
    const newSubmission = new LinkedInSubmission({ linkedinUrl });
    await newSubmission.save();
    res.status(201).send({ message: 'LinkedIn profile submitted successfully', submission: newSubmission });
  } catch (err) {
    res.status(400).send({ message: 'Error submitting LinkedIn profile', error: err });
  }
};

// Function to handle GET request for retrieving LinkedIn submissions
exports.getLinkedInSubmissions = async (req, res) => {
  try {
    const submissions = await LinkedInSubmission.find({});
    res.status(200).send(submissions);
  } catch (err) {
    res.status(400).send({ message: 'Error fetching LinkedIn submissions', error: err });
  }
};
