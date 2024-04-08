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

      <div className="apply-section">
        <Link to="/apply-to-cohort">Excel Here</Link>
      </div>
    </header>
  );
};

export default NavBar;
