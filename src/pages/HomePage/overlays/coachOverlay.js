import React from 'react';
import './coachOverlay.css';

const CoachOverlay = ({ onClose }) => {
  const totalCoaches = 10000; // Manually calculated total coaches
  const totalCompanies = 35; // Manually calculated total companies

  return (
    <div className="coach-overlay">
      <div className="coach-overlay-content">
        <button className="coach-close-button" onClick={onClose}>×</button>
        <h2>Coach</h2>
        <p>Amount of coaches P2E has access to: <span className="coach-values">{totalCoaches}+</span></p>
        <p>Number of companies they represent: <span className="coach-values">{totalCompanies}+</span></p>
        <div className="coach-services-container">
          <div className="coach-service">
            <h3>Speaker Series</h3>
            <p>Industry leaders share their expertise and experiences to inspire and educate our fellows.</p>
          </div>
          <div className="coach-service">
            <h3>Resume/LinkedIn</h3>
            <p>Expert guidance to craft compelling resumes and LinkedIn profiles that stand out to recruiters.</p>
          </div>
          <div className="coach-service">
            <h3>Interview Prep</h3>
            <p>Comprehensive interview preparation including mock interviews and feedback to ensure success.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoachOverlay;
