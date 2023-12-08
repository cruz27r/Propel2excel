import React from 'react';
import './speakers.css';
import speakerImage1 from '../../assets/images/headshot1.jpg';
import speakerImage2 from '../../assets/images/headshot2.jpg';
import speakerImage3 from '../../assets/images/headshot3.jpg';
// Update the path to your images

function Speakers() {
  // Placeholder data for speakers
  const speakers = [
    {
      name: 'John Doe',
      bio: 'John Doe has over 20 years of experience in the industry and has spoken at numerous international conferences.',
      topics: 'Innovation, Technology, Future Trends',
      image: speakerImage1
    },
    {
      name: 'Jane Smith',
      bio: 'Jane Smith is a renowned expert in her field and has authored several influential papers.',
      topics: 'Leadership, Organizational Culture, Productivity',
      image: speakerImage2
    },
    {
      name: 'Jane Smith',
      bio: 'Jane Smith is a renowned expert in her field and has authored several influential papers.',
      topics: 'Leadership, Organizational Culture, Productivity',
      image: speakerImage3
    },
    // Add more speakers as needed...
  ];

  return (
    <div className="speakers-container">
      <h1>Event Speakers</h1>
      <div className="speakers-list">
        {speakers.map((speaker, index) => (
          <div key={index} className="speaker">
            <img src={speaker.image} alt={`Speaker ${speaker.name}`} className="speaker-image" />
            <div className="speaker-info">
              <h2 className="speaker-name">{speaker.name}</h2>
              <p className="speaker-bio">{speaker.bio}</p>
              <p className="speaker-topics">Topics: {speaker.topics}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Speakers;
