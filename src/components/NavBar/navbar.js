import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/images/P2E_Logo.png';
import './navbar.css';

const NavBar = () => {
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(window.scrollY); 
  const hideTimer = useRef(); 

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY < lastScrollY.current);
      lastScrollY.current = window.scrollY;
      clearTimeout(hideTimer.current);

      if (window.scrollY > 0) {
        hideTimer.current = setTimeout(() => {
          setShowNav(false);
        }, 2500); 
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(hideTimer.current);
    };
  }, []);

  return (
    <header className={`header ${showNav ? 'active' : 'hidden'}`}>
      <Link to="/" className='logo-link'>
        <img src={logoImage} alt="Company Logo" className="logo" />
      </Link>
      <nav className="nav-links">
        <div className="dropdown">
          <Link to="#" className="dropbtn">University Partners</Link>
          <div className="dropdown-content">
            <Link to="/university-partners">Info</Link>
            <Link to="/university-partners/application">Application</Link>
          </div>
        </div>
        <div className="dropdown">
          <Link to="#" className="dropbtn">Corporate Partners</Link>
          <div className="dropdown-content">
            <Link to="/corporate-partners">Info</Link>
            <Link to="/corporate-partners/application">Application</Link>
          </div>
        </div>
        <div className="dropdown">
          <Link to="#" className="dropbtn">Services</Link>
          <div className="dropdown-content">
            <Link to="/linkedin-rebrand">LinkedIn Rebrand</Link>
            <Link to="/resume-rebrand">Resume Rebrand</Link>
            <Link to="/interview-prep">Interview Prep</Link>
            <Link to="/events-for-readiness">Events for Readiness</Link>
          </div>
        </div>
        <Link to="/apply-to-cohort">Apply to Cohort</Link>
        <div className="dropdown">
          <Link to="#" className="dropbtn">Speakers</Link>
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
