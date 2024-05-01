import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Journey.css';

// Import images
import textbanner from '../../../assets/images/4x/Logo_Banner_textAsset 4.png';

function JourneyHome() {
  // Check if the user is already logged in by reading from localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'Propel' && password === 'p2eDev') {
      setIsLoggedIn(true);
      // Store the login state in localStorage
      localStorage.setItem('isLoggedIn', 'true');
    } else {
      alert('Invalid credentials');
    }
  };

  useEffect(() => {
    // Check localStorage when the component mounts to see if the user is logged in
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  // Generate cubes
  const cubes = Array.from({ length: 6 }, (_, index) => (
    <div key={index} className={`cube cube-${index + 1}`}></div>
  ));

  const loginForm = (
    <div className="login-container">
      <header className="Login-Header">
        This is the Future Home of Propel2Excel
      </header>
      <p className="Login-Message">
        For any contact, please email: Propel@propel2excel.com
      </p>
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
    <div className="App">
      <div className="hero">
        <img src={textbanner} alt="Propel2Excel" className="hero__title-image" />
        {cubes} {/* Render the cubes here */}
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

  return (
    <div>
      {mainContent || loginForm}
    </div>
  );
}

export default JourneyHome;
