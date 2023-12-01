const SponsorApplication = require('../models/SponsorApplication');

exports.submitSponsorApplication = async (req, res) => {
  try {
    const newSponsorApplication = new SponsorApplication(req.body);
    await newSponsorApplication.save();
    res.status(201).send({ message: 'Sponsor application submitted successfully', application: newSponsorApplication });
  } catch (error) {
    res.status(400).send({ message: 'Error submitting sponsor application', error });
  }
};
