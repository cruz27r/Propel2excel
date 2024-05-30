import React from 'react';
import './placeOverlay.css';

const PlaceOverlay = ({ onClose }) => {
  return (
    <div className="place-overlay">
      <div className="place-overlay-content">
        <button className="place-close-button" onClick={onClose}>×</button>
        <h2>Place</h2>
        <div className="industries">
          <div className="industry">
            <h3>Tech</h3>
            <ul>
              <li>Google</li>
              <li>Microsoft</li>
              <li>Amazon</li>
            </ul>
          </div>
          <div className="industry">
            <h3>Consulting</h3>
            <ul>
              <li>McKinsey</li>
              <li>Bain</li>
              <li>BCG</li>
            </ul>
          </div>
          <div className="industry">
            <h3>Banking</h3>
            <ul>
              <li>Goldman Sachs</li>
              <li>JP Morgan</li>
              <li>Citibank</li>
            </ul>
          </div>
        </div>
        <p>Our number of students placed at internships/jobs: <span className="place-values">1500+</span></p>
        <p>Number of interviews provided so far to fellows: <span className="place-values">5000+</span></p>
      </div>
    </div>
  );
}

export default PlaceOverlay;
