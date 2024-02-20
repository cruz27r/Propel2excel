import React, { useState, useEffect } from 'react';
import './UniversityPartners.css';

// Import your logos
import logo1 from '../../assets/images/UMass_Boston_logo.png';
import logo2 from '../../assets/images/umassA.png';
import logo3 from '../../assets/images/bc.png';
import logo4 from '../../assets/images/Northeastern-University-Logo.png';
import logo5 from '../../assets/images/Wentworth.png';
import logo6 from '../../assets/images/BU.png';

function UniversityPartners() {
    // Duplicate logos for testing purposes
    const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo1, logo2, logo3, logo4, logo5, logo6];

    return (
        <div className="university-partners-section">
            <h2>Our Reached Universities</h2>
            <p className="university-description">
                The universities we partner with are the nurturing grounds for our fellows - the future leaders in tech, banking, and consulting industries. These institutions are more than just educational establishments; they are the pillars that support the aspirations of our students. At Propel, we are dedicated to not only providing resources but also expanding our reach to support more students in their journey to excellence. Below are some of the esteemed universities we've had the privilege of working with, and we're excited about the prospect of partnering with many more as we progress.
            </p>
            <div className="logos-grid">
                {logos.map((logo, index) => (
                    <div key={index} className="logo-item">
                        <img src={logo} alt={`University ${index + 1}`} />
                    </div>
                ))}
            </div>

            <h2>Universities We Are Coming To</h2>
            <p className="university-description">
                We are actively expanding our network to reach out to new universities and establish partnerships. These endeavors are aimed at fostering growth opportunities for students and facilitating collaboration in various sectors. Below are some of the universities we are excited to connect with in the near future.
            </p>
            <div className="logos-grid">
                {logos.map((logo, index) => (
                    <div key={index} className="logo-item">
                        <img src={logo} alt={`University ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UniversityPartners;
