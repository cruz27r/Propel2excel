import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Journey.css';
import textbanner from '../../../assets/images/4x/Logo_Banner_textAsset 4.png';
import aboutUsImage from '../../../assets/images/cutout-group.png';
import logoImage from '../../../assets/images/4x/Logo-P2e-final-v1Asset 12.png';

function JourneyHome({ isLoggedIn, onLogin, onLogout }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  const loginForm = (
    <div className="login-container">
      <img src={logoImage} alt="Company Logo" className="logo" />
      <header className="Login-Header">This is the Future Home of Propel2Excel</header>
      <p className="Login-Message">For any contact, please email: Propel@propel2excel.com</p>
      <h2>Login to Continue to the site</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );

  const mainContent = isLoggedIn && (
    <div className="journey-main-content">
      <div className="hero">
        <img src={textbanner} alt="Propel2Excel" className="hero__title-image" />
      </div>
      <div className="about-us">
        <div className="about-us-text">
          <h1>About Us</h1>
          <p>
            Propel2Excel is a non-profit organization that places and connects ambitious students at non-targeted universities to professionals in top tier <span className='highlight'>tech, consulting, and banking companies</span> — through the "Ivy League recruiting experience".
          </p>
          <Link to="/journeyContent" className="details-button">Continue</Link>
        </div>
        <img src={aboutUsImage} alt="About Us" className="about-us-image" />
      </div>
    </div>
  );

  return (
    <div className={`journey-body ${!isLoggedIn ? 'journey-body--login' : ''}`}>
      {!isLoggedIn ? loginForm : mainContent}
    </div>
  );
}

export default JourneyHome;
