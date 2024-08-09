import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './Logo-P2e-final-v1Asset 12.c5f9e3075a4365128160.png';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} width={300} alt="Logo" />
        </Link>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/">Home</Link></li>
        {/* <li><Link to="/students">Students</Link></li>
        <li><Link to="/volunteers">Volunteers</Link></li>
        <li><Link to="/company">Company</Link></li> */}
        <li><Link to="/hiring-board">Hiring Board</Link></li>
        <li><Link to="/career-tips">Career Tips</Link></li>
        <li><Link to="/main-application" className="excel-button">Excel Here</Link></li>
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
