import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-buttons">
          <button className="footer-button">Become a Fellow</button>
          <button className="footer-button">Become a Volunteer</button>
          <button className="footer-button">Become a Partner</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; Propel2Excel 2024. All rights reserved.</p>
        <div className="footer-social">
          <a href="https://www.linkedin.com/company/propel2excel/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} style={{ color: '#fff' }} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} style={{ color: '#fff' }} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} style={{ color: '#fff' }} />
          </a>
        </div>
        <a href="/privacy-policy">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
