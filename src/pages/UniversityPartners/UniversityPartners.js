import React, { useState } from 'react';
import './UniversityPartners.css';
import universityBanner from '../../assets/images/University Logos/UMB-ISC-NightPic.jpg';

// Import your logos
import logo1 from '../../assets/images/UMass_Boston_logo.png';
import logo2 from '../../assets/images/umassA.png';
import logo3 from '../../assets/images/bc.png';
import logo4 from '../../assets/images/Northeastern-University-Logo.png';
import logo5 from '../../assets/images/Wentworth.png';
import logo6 from '../../assets/images/BU.png';

function UniversityPartners() {
    const [selectedUniversity, setSelectedUniversity] = useState(null);

    // Logos and their respective statistics
    const logos = [
        { logo: logo1, name: 'UMass Boston', students: 24, techTrack: 10, consultingTrack: 6, bankingTrack: 8 },
        { logo: logo2, name: 'Umass Amherst', students: 30, techTrack: 15, consultingTrack: 7, bankingTrack: 8 },
        { logo: logo3, name: 'Boston College', students: 28, techTrack: 12, consultingTrack: 8, bankingTrack: 8 },
        { logo: logo4, name: 'Northeastern University', students: 35, techTrack: 18, consultingTrack: 10, bankingTrack: 7 },
        { logo: logo5, name: 'Wentworth Institute of Technology', students: 20, techTrack: 10, consultingTrack: 5, bankingTrack: 5 },
        { logo: logo6, name: 'Boston University', students: 32, techTrack: 16, consultingTrack: 8, bankingTrack: 8 }
    ];

    const anticipatedUniversities = [
        { logo: logo6, name: 'Harvard University' },
        { logo: logo5, name: 'MIT' },
        { logo: logo4, name: 'Stanford University' },
    ];

    const handleUniversityClick = (index) => {
        setSelectedUniversity((prevSelectedUniversity) => {
            if (prevSelectedUniversity && prevSelectedUniversity.logo === logos[index].logo) {
                // If the same logo is clicked again, hide the statistics
                return null;
            } else {
                // Otherwise, show the statistics for the clicked logo
                return logos[index];
            }
        });
    };

    return (
        <div className="university-partners-section">
            <div className="banner-container">
                <img src={universityBanner} alt="University Banner" className="banner-image" />
                <div className="banner-text">
                    <h2>Our Reached Universities</h2>
                    <p className="university-description">
                        The universities we partner with are the nurturing grounds for our fellows - the future leaders in tech, banking, and consulting industries. These institutions are more than just educational establishments; they are the pillars that support the aspirations of our students. At Propel, we are dedicated to not only providing resources but also expanding our reach to support more students in their journey to excellence. Below are some of the esteemed universities we've had the privilege of working with, and we're excited about the prospect of partnering with many more as we progress.
                    </p>
                </div>
            </div>
            <div className="logos-grid">
                {logos.map((university, index) => (
                    <div key={index} className="logo-item" onClick={() => handleUniversityClick(index)}>
                        <img src={university.logo} alt={university.name} />
                        {selectedUniversity === university && (
                            <div className="statistics-block active">
                                <p>Total Students Here: {university.students}</p>
                                <p>Students in Tech Track: {university.techTrack}</p>
                                <p>Students in Consulting Track: {university.consultingTrack}</p>
                                <p>Students in Banking Track: {university.bankingTrack}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <h2>Universities We Are Coming To</h2>
            <p className="anticipated-description">
                We are actively seeking partnerships with the following universities to expand our network and reach more students:
            </p>
            <div className="logos-grid">
                {anticipatedUniversities.map((university, index) => (
                    <div key={index} className="logo-item">
                        <img src={university.logo} alt={university.name} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UniversityPartners;
