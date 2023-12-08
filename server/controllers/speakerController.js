const SpeakerApplication = require('../models/SpeakerApplication');

// Function to handle POST request for submitting a speaker application
exports.submitSpeakerApplication = async (req, res) => {
  try {
    const newSpeakerApplication = new SpeakerApplication(req.body);
    await newSpeakerApplication.save();
    res.status(201).send({ message: 'Speaker application submitted successfully', application: newSpeakerApplication });
  } catch (error) {
    res.status(400).send({ message: 'Error submitting speaker application', error });
  }
};

// Function to handle GET request for retrieving speaker applications
exports.getSpeakers = async (req, res) => {
  try {
    const speakers = await SpeakerApplication.find({});
    res.status(200).send(speakers);
  } catch (error) {
    res.status(400).send({ message: 'Error fetching speaker applications', error });
  }
};
