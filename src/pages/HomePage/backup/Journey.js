import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Journey.css';

import ProgressSteps from '../../../components/Individual_Parts/ProgressSteps';

import mainbanner from '../../../assets/images/4x/Logo-P2e-final-v4Asset 2.png';

function JourneyHome() {
  // State to manage login status and input values
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle login, checking against specific credentials
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'Propel' && password === 'p2eDev') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  // Login form
  const loginForm = (
    <div className="login-container">
      <header className='Login-Header'>
        This is the Future Home of Propel2Excel
      </header>
      <p className='Login-Message'>
        For any contact, please email: Propel@propel2excel.com
      </p>
      <h2>Login to Continue to site</h2>
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

  // Main content, shown only when logged in
  const mainContent = (
    <div className="App">
      <div className="banner-container">
        <img src={mainbanner} alt="Banner" className="full-width-banner" />
      </div>

      <div className="p2e-description">
        <div className="header-container">
          <h2>Our Mission</h2>
        </div>
        <p className="p2e-text">
          Propel2Excel is a six-month coaching program led by corporate professionals from Tier 1 companies, for ambitious students at non-target schools to secure competitive internships & careers at top tier tech, consulting, and banking companies.
        </p>
        <Link to="/journeyContent" className="details-button">Continue</Link>
      </div>
    </div>
  );

  // Conditional rendering based on login status
  return (
    <div>
      {isLoggedIn ? mainContent : loginForm}
    </div>
  );
}

export default JourneyHome;
