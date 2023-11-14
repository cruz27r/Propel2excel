import React, { useState } from 'react';
import './becomeSpeaker.css';

function BecomeSpeaker() {
  const [speakerData, setSpeakerData] = useState({
    fullName: '',
    email: '',
    bio: '',
    topics: '',
    previousExperience: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSpeakerData({ ...speakerData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission of the speaker application data
    console.log(speakerData);
    // In a real-world app, you would likely send this data to a server
  };

  return (
    <div className="become-speaker-container">
      <h1>Become a Speaker</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={speakerData.fullName}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={speakerData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="bio">Short Bio:</label>
          <textarea
            id="bio"
            name="bio"
            value={speakerData.bio}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="topics">Topics You Can Speak About:</label>
          <input
            type="text"
            id="topics"
            name="topics"
            value={speakerData.topics}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="previousExperience">Previous Speaking Experience:</label>
          <textarea
            id="previousExperience"
            name="previousExperience"
            value={speakerData.previousExperience}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-group">
          <button type="submit" className="submit-btn">Apply to be a Speaker</button>
        </div>
      </form>
    </div>
  );
}

export default BecomeSpeaker;
