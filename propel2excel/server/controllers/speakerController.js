const SpeakerApplication = require('../models/SpeakerApplication');

exports.submitSpeakerApplication = async (req, res) => {
  try {
    const newSpeakerApplication = new SpeakerApplication(req.body);
    await newSpeakerApplication.save();
    res.status(201).send({ message: 'Speaker application submitted successfully', application: newSpeakerApplication });
  } catch (error) {
    res.status(400).send({ message: 'Error submitting speaker application', error });
  }
};
