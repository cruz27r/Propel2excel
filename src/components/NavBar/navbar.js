import React, { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import logoImage from '../../assets/images/4x/Logo-P2e-final-v1Asset 12.png';
import './navbar.css';

const NavBar = ({ isLoggedIn, onLogout }) => {
  const [showNavBar, setShowNavBar] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(window.scrollY);
  const navbarRef = useRef();
  const navBarVisibilityTimeout = useRef();
  const location = useLocation();

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
    }, 5500);

    lastScrollY.current = window.scrollY;

    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(navBarVisibilityTimeout.current);
    };
  }, []);

  const isActiveLink = (path) => location.pathname === path ? 'active' : '';

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="navbar">
      <header
        ref={navbarRef}
        className={`header ${showNavBar ? 'show' : 'hide'} ${isHomePage ? 'home-navbar' : ''} ${isScrolled ? 'scrolled-navbar' : ''}`}
      >
        <div className="logo-section">
          <Link to="/" className="logo-link">
            <img src={logoImage} alt="Company Logo" className="logo" />
          </Link>
        </div>

        <div className="center-links">
          <Link to="/career-tips" className={`nav-link ${isActiveLink('/career-tips')}`}>Career Tips</Link>
          <Link to="/hiring-board" className={`nav-link ${isActiveLink('/hiring-board')}`}>Who's Hiring</Link>
        </div>

        <div className="continue-button">
          <Link to="/main-application" className="continue-link">Excel Here</Link>
          {/* <Link onClick={onLogout} className="nav-link">Logout</Link> */}
        </div>
      </header>
    </div>
  );
};

export default NavBar;
