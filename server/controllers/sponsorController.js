const SponsorApplication = require('../models/SponsorApplication');

// Function to handle POST request for submitting a sponsor application
exports.submitSponsorApplication = async (req, res) => {
  try {
    const newSponsorApplication = new SponsorApplication(req.body);
    await newSponsorApplication.save();
    res.status(201).send({ message: 'Sponsor application submitted successfully', application: newSponsorApplication });
  } catch (error) {
    res.status(400).send({ message: 'Error submitting sponsor application', error });
  }
};

// Function to handle GET request for retrieving sponsor applications
exports.getSponsors = async (req, res) => {
  try {
    const sponsors = await SponsorApplication.find({});
    res.status(200).send(sponsors);
  } catch (error) {
    res.status(400).send({ message: 'Error fetching sponsor applications', error });
  }
};
