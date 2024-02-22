import React, { useState } from 'react';
import './speakers.css';
import speakerImage1 from '../../assets/images/headshot1.jpg';
import speakerImage2 from '../../assets/images/headshot2.jpg';
import speakerImage3 from '../../assets/images/headshot3.jpg';

function Speakers() {
  const [activeCategory, setActiveCategory] = useState('tech');

  const tech = [
    {
      name: 'John Doe',
      bio: 'John Doe has over 10 years of experience in tech innovation and is a pioneer in future trends.',
      topics: 'AI, Machine Learning, Cloud Computing',
      image: speakerImage1
    },
    {
      name: 'Jane Smith',
      bio: 'Jane Smith is a tech leader with a focus on developing innovative solutions for complex problems.',
      topics: 'Cybersecurity, Blockchain, IoT',
      image: speakerImage2
    },
    {
      name: 'Alex Johnson',
      bio: 'Alex Johnson is a tech entrepreneur and founder of multiple successful startups in the industry.',
      topics: 'Tech Entrepreneurship, Startup Growth, Innovation',
      image: speakerImage3
    },
    // Add more speakers as needed...
  ];

  const banking = [
    {
      name: 'Emily Brown',
      bio: 'Emily Brown is a banking expert with a deep understanding of financial markets and regulations.',
      topics: 'Financial Markets, Banking Regulation, Investment Banking',
      image: speakerImage1
    },
    {
      name: 'Michael Lee',
      bio: 'Michael Lee has extensive experience in corporate banking and financial analysis.',
      topics: 'Corporate Banking, Financial Analysis, Risk Management',
      image: speakerImage2
    },
    {
      name: 'Sarah Davis',
      bio: 'Sarah Davis is a banking professional specializing in retail banking and customer experience.',
      topics: 'Retail Banking, Customer Experience, Financial Services',
      image: speakerImage3
    },
    // Add more speakers as needed...
  ];

  const consulting = [
    {
      name: 'David Wilson',
      bio: 'David Wilson is a management consultant with a focus on organizational strategy and change management.',
      topics: 'Organizational Strategy, Change Management, Business Transformation',
      image: speakerImage1
    },
    {
      name: 'Rachel White',
      bio: 'Rachel White is a consulting expert with a background in operational efficiency and process improvement.',
      topics: 'Operational Efficiency, Process Improvement, Business Optimization',
      image: speakerImage2
    },
    {
      name: 'Mark Thompson',
      bio: 'Mark Thompson is a management consultant specializing in technology integration and digital transformation.',
      topics: 'Technology Integration, Digital Transformation, IT Strategy',
      image: speakerImage3
    },
    // Add more speakers as needed...
  ];

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  let displayedSpeakers;
  switch (activeCategory) {
    case 'tech':
      displayedSpeakers = tech;
      break;
    case 'banking':
      displayedSpeakers = banking;
      break;
    case 'consulting':
      displayedSpeakers = consulting;
      break;
    default:
      displayedSpeakers = tech;
  }

  return (
    <div className="speakers-container">
      <h1>Event Speakers</h1>
      <div className="category-slider">
        <div className={`category-item ${activeCategory === 'tech' ? 'active' : ''}`} onClick={() => handleCategoryChange('tech')}>
          <h3>Tech</h3>
        </div>
        <div className={`category-item ${activeCategory === 'banking' ? 'active' : ''}`} onClick={() => handleCategoryChange('banking')}>
          <h3>Banking</h3>
        </div>
        <div className={`category-item ${activeCategory === 'consulting' ? 'active' : ''}`} onClick={() => handleCategoryChange('consulting')}>
          <h3>Consulting</h3>
        </div>
      </div>
      <div className="speakers-list">
        {displayedSpeakers.map((speaker, index) => (
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
