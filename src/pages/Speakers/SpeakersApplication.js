import React, { useState } from 'react';
import './SpeakersApplication.css'; // Importing the CSS file

const BecomeSpeaker = () => {
  const [speakerData, setSpeakerData] = useState({
    name: '',
    email: '',
    profession: '',
    experienceYears: '',
    previousSpeakingEngagements: '',
    linkedInProfile: '',
    whyInterested: '',
    valueAddition: '',
    resumeFile: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setSpeakerData({
      ...speakerData,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log(speakerData);
  };

  return (
    <div className="become-speaker">
      <h2>Application to Become a Speaker</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input type="text" name="name" value={speakerData.name} onChange={handleChange} required />
        </label>
        <label>
          Email Address:
          <input type="email" name="email" value={speakerData.email} onChange={handleChange} required />
        </label>
        <label>
          Profession:
          <input type="text" name="profession" value={speakerData.profession} onChange={handleChange} required />
        </label>
        <label>
          Years of Experience:
          <input type="number" name="experienceYears" value={speakerData.experienceYears} onChange={handleChange} required />
        </label>
        <label>
          Previous Speaking Engagements (if any):
          <textarea name="previousSpeakingEngagements" value={speakerData.previousSpeakingEngagements} onChange={handleChange} />
        </label>
        <label>
          LinkedIn Profile URL:
          <input type="url" name="linkedInProfile" value={speakerData.linkedInProfile} onChange={handleChange} required />
        </label>
        <label>
          Why are you interested in becoming a speaker at Propel2Excel?
          <textarea name="whyInterested" value={speakerData.whyInterested} onChange={handleChange} required />
        </label>
        <label>
          What value can you add to our program?
          <textarea name="valueAddition" value={speakerData.valueAddition} onChange={handleChange} required />
        </label>
        <label>
          Upload Resume:
          <input type="file" name="resumeFile" onChange={handleChange} required />
        </label>
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default BecomeSpeaker;
