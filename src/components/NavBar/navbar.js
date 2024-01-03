import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/images/P2E_Logo.png';
import './navbar.css';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(window.scrollY);
  const hideTimer = useRef();

  useEffect(() => {
    const handleScroll = () => {
      clearTimeout(hideTimer.current);
      hideTimer.current = setTimeout(() => {
        if (window.scrollY > lastScrollY.current) {
          setIsMobileMenuOpen(false);
        }
        lastScrollY.current = window.scrollY;
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isMobileMenuOpen ? 'open' : ''}`}>
      <div className="hamburger-menu" onClick={toggleMenu}>
        {isMobileMenuOpen ? '✕' : '☰'} {/* Change symbols/icons as needed */}
      </div>
      <Link to="/" className='logo-link'>
        <img src={logoImage} alt="Company Logo" className="logo" />
      </Link>
      <nav className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="dropdown">
          <button className="dropbtn">University Partners</button>
          <div className="dropdown-content">
            <Link to="/university-partners">Info</Link>
            <Link to="/university-partners/application">Application</Link>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Corporate Partners</button>
          <div className="dropdown-content">
            <Link to="/corporate-partners">Info</Link>
            <Link to="/corporate-partners/application">Application</Link>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Services</button>
          <div className="dropdown-content">
            <Link to="/linkedin-rebrand">LinkedIn Rebrand</Link>
            <Link to="/resume-rebrand">Resume Rebrand</Link>
            <Link to="/interview-prep">Interview Prep</Link>
            <Link to="/events-for-readiness">Events for Readiness</Link>
          </div>
        </div>
        <Link to="/apply-to-cohort">Apply to Cohort</Link>
        <div className="dropdown">
          <button className="dropbtn">Speakers</button>
          <div className="dropdown-content">
            <Link to="/speakers">Info</Link>
            <Link to="/speakers/application">Application</Link>
          </div>
        </div>
        <Link to="/faqs">FAQs</Link>
      </nav>
    </header>
  );
};

export default NavBar;
