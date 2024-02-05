import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/images/Propel-Logo-V1-BlueAsset 4.png';
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
        <div className="dropdown">
          <button className="dropbtn">University Partners</button>
          <div className="dropdown-content">
            <Link to="/university-partners">Learn More</Link>
            <Link to="/university-partners/application">Apply Now</Link>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Corporate Partners</button>
          <div className="dropdown-content">
            <Link to="/corporate-partners">Learn More</Link>
            <Link to="/corporate-partners/application">Apply Now</Link>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Speakers</button>
          <div className="dropdown-content">
            <Link to="/speakers">Learn More</Link>
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
        <Link to="/apply-to-cohort">Apply Here</Link>
      </div>
    </header>
  );
};

export default NavBar;
