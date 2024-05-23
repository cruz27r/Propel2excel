import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Journey.css';
import textbanner from '../../../assets/images/4x/Logo_Banner_textAsset 4.png';
import aboutUsImage from '../../../assets/images/cutout-group.png';
import logoImage from '../../../assets/images/4x/Logo-P2e-final-v1Asset 12.png';

function JourneyHome({ isLoggedIn: initialIsLoggedIn = true, onLogin, onLogout }) {
  // Set isLoggedIn to true by default
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Set to true
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin(username, password);
    setIsLoggedIn(true); // Set login state to true upon login
  };

  const mainContent = (
    <div className="journey-main-content">
      <div className="hero">
        <img src={textbanner} alt="Propel2Excel" className="hero__title-image" />
      </div>
      <div className="about-us">
        <div className="about-us-content">
          <div className="about-us-text">
            <h1>
              <span className="highlight-box">Coach</span> 
              <span className="highlight-box">Place</span> 
              <span className="highlight-box">Diverse</span> 
              <span className="highlight-box">Talent</span>
            </h1>
          </div>
          <img src={aboutUsImage} alt="About Us" className="about-us-image" />
        </div>
        <Link to="/journeyContent" className="details-button">Continue</Link>
      </div>
    </div>
  );

  return (
    <div className="journey-body">
      {mainContent}
    </div>
  );
}

export default JourneyHome;
