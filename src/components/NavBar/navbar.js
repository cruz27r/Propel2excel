import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './Logo-P2e-final-v1Asset 12.c5f9e3075a4365128160.png';
import GuidingQuestionsOverlay from './Overlay';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const showOverlay = () => {
    setIsOverlayVisible(true);
  };

  const hideOverlay = () => {
    setIsOverlayVisible(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} width={300} alt="Logo" />
        </Link>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/">Hiring Board</a></li>
        <li><a href="/">Career Tips</a></li>
        <li><a href="#" className="excel-button" onClick={showOverlay}>Excel Here</a></li>
      </ul>
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {isOverlayVisible && (
        <GuidingQuestionsOverlay
          onClose={hideOverlay}
          isChangingAnswers={true} // Pass appropriate props as needed
          answers={{}}
          setAnswers={() => {}}
          fromHomePage={false}
          initialQuestionIndex={0}
        />
      )}
    </nav>
  );
};

export default Navbar;
