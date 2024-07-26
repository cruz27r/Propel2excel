import React, { useState } from 'react';
import logo from './Logo-P2e-final-v1Asset 12.c5f9e3075a4365128160.png';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} width={300} alt="Logo" />
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/students">Students</a></li>
        <li><a href="/volunteer">Volunteer</a></li>
        <li><a href="/partners">Partners</a></li>
        <li><a href="/hiring-board">Hiring Board</a></li>
        <li><a href="/career-tips">Career Tips</a></li>
        <li><a href="/main-application" className="excel-button">Excel Here</a></li>
      </ul>
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
