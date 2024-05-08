import React, { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import logoImage from '../../assets/images/4x/Logo-P2e-final-v1Asset 12.png';
import './navbar.css';

const NavBar = () => {
  const [showNavBar, setShowNavBar] = useState(true);
  const lastScrollY = useRef(window.scrollY);
  const navbarRef = useRef();
  const navBarVisibilityTimeout = useRef();
  const location = useLocation(); // Use useLocation hook to access pathname

  // Determine if the current page is the homepage
  const isHomePage = location.pathname === '/';

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

  return (
    <header ref={navbarRef} className={`header ${showNavBar ? 'show' : 'hide'} ${isHomePage ? 'home-navbar' : ''}`}>
      <div className="logo-section">
        <Link to="/" className='logo-link'>
          <img src={logoImage} alt="Company Logo" className="logo" />
        </Link>
      </div>

      {/* Center group of links */}
      <div className="center-links">
        <Link to="/career-tips" className='nav-link'>Career Tips</Link>
        <Link to="/hiring-board" className='nav-link'>Who's Hiring</Link>
      </div>

      <div className="continue-button">
        <Link to="/main-application" className='continue-link'>Excel Here</Link>
      </div>
    </header>
  );
};

export default NavBar;
