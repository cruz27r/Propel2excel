import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Chart from 'chart.js/auto';
import './Journey.css';

import ProgressSteps from '../../../components/Individual_Parts/ProgressSteps';

import photo2 from '../../../assets/images/networking_large_table.jpg';
import mentors from '../../../assets/videos/mentorship_example.mp4';

// Define new images
import workshop from '../../../assets/images/workshop.jpg';
import networking from '../../../assets/images/networking-event.jpg';
import speakerSeriesImage from '../../../assets/images/speaker-event.jpg';
import careerCoachingImage from '../../../assets/images/coaching-example.jpg';
import resumeWorkshopImage from '../../../assets/images/resume-rebrand-image.jpg';
import interviewPrepImage from '../../../assets/images/mock-interview.jpg';
import background from '../../../assets/images/Banner/Banner-Main-Example.png';
import bannerText from '../../../assets/images/4x/Logo_Banner_textAsset 4.png'

function JourneyHome() {
  return (
    <div className="App">
      <div className="banner-container">
        <img src={background} alt="Banner" className="full-width-banner" />
        <img src={bannerText} alt="Banner Text" className="banner-text" />
      </div>

      <div className="p2e-description">
        <div className="header-container">
          <h2>Our Mission</h2>
        </div>
        <p className="p2e-text">Propel2Excel is a six-month coaching program led by corporate professionals from Tier 1 companies, for ambitious students at non-target schools to secure competitive internships & careers at top tier tech, consulting, and banking companies.</p>
        <Link to="/journeyContent" className="details-button">Continue</Link>
      </div>
    </div>
  );
}

export default JourneyHome;
