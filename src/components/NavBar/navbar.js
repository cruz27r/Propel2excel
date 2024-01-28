import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/images/Propel-Logo-V1-BlueAsset 4.png';
import './navbar.css';

const NavBar = () => {
  const [showNavBar, setShowNavBar] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(window.scrollY);
  const navbarRef = useRef(); // Correctly define the ref here
  const navBarVisibilityTimeout = useRef();

  const handleScroll = () => {
    clearTimeout(navBarVisibilityTimeout.current);

    if (window.scrollY > lastScrollY.current && window.scrollY > (navbarRef.current?.offsetHeight || 0)) {
      setShowNavBar(false);
    } else {
      setShowNavBar(true);
    }

    navBarVisibilityTimeout.current = setTimeout(() => {
      if (window.scrollY > (navbarRef.current?.offsetHeight || 0)) {
        setShowNavBar(false);
      }
    }, 5500); // Hide navbar after 5.5 seconds of inactivity

    lastScrollY.current = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(navBarVisibilityTimeout.current);
    };
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header ref={navbarRef} className={`header ${showNavBar ? 'show' : 'hide'} ${isMobileMenuOpen ? 'open' : ''}`}>
      <div className="hamburger-menu" onClick={toggleMenu}>
        {isMobileMenuOpen ? '✕' : '☰'}
      </div>
      <Link to="/" className='logo-link'>
        <img src={logoImage} alt="Company Logo" className="logo" />
      </Link>
      <nav className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
        {/* Navigation links */}
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
