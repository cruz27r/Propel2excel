import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/images/P2E_Logo.png';
import './navbar.css';

const NavBar = () => {
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(window.scrollY); // Ref to keep track of last scroll position
  const hideTimer = useRef(); // Ref for the timer ID

  useEffect(() => {
    const handleScroll = () => {
      // Show nav if scrolling up, hide if scrolling down
      setShowNav(window.scrollY < lastScrollY.current);

      // Update the last scroll position
      lastScrollY.current = window.scrollY;

      // Clear any timeout already set
      clearTimeout(hideTimer.current);

      // If we're not at the top, set a timeout to hide the navbar
      if (window.scrollY > 0) {
        hideTimer.current = setTimeout(() => {
          setShowNav(false);
        }, 2500); // Hide after 2.5 seconds of inactivity
      }
    };

    // Set up the event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(hideTimer.current);
    };
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  return (
    <header className={`header ${showNav ? 'active' : 'hidden'}`}>
      <Link to="/" className='logo-link'>
        <img src={logoImage} alt="Company Logo" className="logo" />
      </Link>
      <nav className="nav-links">
        <Link to="/events-for-readiness">Events for Readiness</Link>
        <div className="dropdown">
          <Link to="#" className="dropbtn">Steps for the Future</Link>
          <div className="dropdown-content">
            <Link to="/submit-linkedin">Submit LinkedIn</Link>
            <Link to="/submit-resume">Submit Resume</Link>
            <Link to="/become-p2e">Become P2E</Link>
            {/* ... (add other dropdown links if needed) ... */}
          </div>
        </div>
        <Link to="/become-speaker">Become Speaker</Link>
        <Link to="/become-sponsor">Become Sponsor</Link>
        <Link to="/interview-prep">Interview Prep</Link>
        <Link to="/partners">Partners</Link>
        <Link to="/speakers">Speakers</Link>
        <Link to="/faqs">FAQs</Link>
      </nav>
    </header>
  );
};

export default NavBar;
