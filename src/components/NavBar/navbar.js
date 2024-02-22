import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/images/4x/Logo-P2e-final-v1Asset 12.png';
import './navbar.css';

const NavBar = () => {
  const [showNavBar, setShowNavBar] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(window.scrollY);
  const navbarRef = useRef();
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
      <div className="hamburger-menu" onClick={toggleMenu}>☰</div>
      <div className="logo-section">
        <Link to="/" className='logo-link'>
          <img src={logoImage} alt="Company Logo" className="logo" />
        </Link>
      </div>

      <nav className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
      <Link to="/students">Meet Our Students</Link>
        <div className="dropdown">
          <button className="dropbtn">Universities</button>
          <div className="dropdown-content">
            <Link to="/university-partners">Universities representing</Link>
            <Link to="/university-partners">Universities anticipated</Link>
            <Link to="/university-partners/application">Apply Now</Link>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Corporate</button>
          <div className="dropdown-content">
            <Link to="/corporate-partners">Partners</Link>
            <Link to="/corporate-partners">Anticipated Partners</Link>
            <Link to="/corporate-partners">Coaches</Link>
            <Link to="/corporate-partners/application">Apply Now</Link>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Mentors</button>
          <div className="dropdown-content">
            <Link to="/speakers">Current Mentors</Link>
            <Link to="/speakers/application">Apply Now</Link>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Services</button>
          <div className="dropdown-content">
            <Link to="/linkedin-rebrand">LinkedIn Rebrand</Link>
            <Link to="/resume-rebrand">Resume Rebrand</Link>
            <Link to="/interview-prep">Interview Prep</Link>
          </div>
        </div>
        <Link to="/events-for-readiness">Events</Link>
        <Link to="/faqs">FAQs</Link>
      </nav>

      <div className="apply-section">
        <Link to="/apply-to-cohort">Excel Here</Link>
      </div>
    </header>
  );
};

export default NavBar;
