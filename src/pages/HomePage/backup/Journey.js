import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Journey.css';
import textbanner from '../../../assets/images/4x/Logo_Banner_textAsset 6.png';
import aboutUsImage from '../../../assets/images/collage-students/cutout-group-3.png';
import CoachOverlay from './overlays/coachOverlay';
import PlaceOverlay from './overlays/placeOverlay';
import DiverseTalentOverlay from './overlays/diverseTalentOverlay';

function JourneyHome({ isLoggedIn: initialIsLoggedIn = true, onLogin, onLogout }) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [activeOverlay, setActiveOverlay] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin(username, password);
    setIsLoggedIn(true);
  };

  const openOverlay = (overlay) => {
    setActiveOverlay(overlay);
  };

  const closeOverlay = () => {
    setActiveOverlay(null);
  };

  return (
    <div className="journey-body">
      <div className="journey-main-content">
        <div className="hero">
          <img src={textbanner} alt="Propel2Excel" className="hero__title-image" />
        </div>
        <div className="about-us">
          <div className="about-us-content">
            <div className="about-us-text">
              <h1>
                <span className="highlight-box" onClick={() => openOverlay('coach')}>Coach</span><br />
                <span className="highlight-box" onClick={() => openOverlay('place')}>Place</span><br />
                <span className="highlight-container" onClick={() => openOverlay('diverse-talent')}>
                  <span className="highlight-box">Diverse Talent</span>
                </span>
              </h1>
            </div>
            <img src={aboutUsImage} alt="About Us" className="about-us-image" />
          </div>
          <Link to="/journeyContent" className="details-button">Continue</Link>
        </div>
      </div>
      {activeOverlay === 'coach' && <CoachOverlay onClose={closeOverlay} />}
      {activeOverlay === 'place' && <PlaceOverlay onClose={closeOverlay} />}
      {activeOverlay === 'diverse-talent' && <DiverseTalentOverlay onClose={closeOverlay} />}
    </div>
  );
}

export default JourneyHome;