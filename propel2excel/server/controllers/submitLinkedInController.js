const LinkedInSubmission = require('../models/LinkedInSubmission');

exports.submitLinkedIn = async (req, res) => {
  const { linkedinUrl } = req.body;

  try {
    const newSubmission = new LinkedInSubmission({
      linkedinUrl,
    });

    await newSubmission.save();
    res.status(201).send({ message: 'LinkedIn profile submitted successfully', submission: newSubmission });
  } catch (err) {
    res.status(400).send({ message: 'Error submitting LinkedIn profile', error: err });
  }
};
