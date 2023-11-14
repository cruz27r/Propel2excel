import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/images/P2E_Logo.png'; // Update the path if necessary
import './navbar.css'; // Make sure this path is correct

const NavBar = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={logoImage} alt="Company Logo" className="logo" />
      </Link>
      <nav className="nav-links">
        {/*<Link to="/home">Home</Link>*/}
        <Link to="/events-for-readiness">Events for Readiness</Link>
        <Link to="/submit-linkedin">Submit LinkedIn</Link>
        <Link to="/become-p2e">Become P2E</Link>
        <Link to="/become-speaker">Become Speaker</Link>
        <Link to="/become-sponsor">Become Sponsor</Link>
        <Link to="/interview-prep">Interview Prep</Link>
        <Link to="/partners">Partners</Link>
        <Link to="/speakers">Speakers</Link>
        <Link to="/faqs">FAQs</Link>
      </nav>
    </header>
  );
};

export default NavBar;
