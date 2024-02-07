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
    const [activeIndex, setActiveIndex] = useState(2); // Initialize with an index that allows for a previous and next image
    const logos = [logo1, logo2, logo3, logo4, logo5, logo6,logo1, logo2, logo3, logo4, logo5, logo6];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(current => (current + 1) % logos.length);
        }, 4500); // Change slide every 5 seconds
        return () => clearInterval(interval);
    }, [logos.length]);

    const nextSlide = () => setActiveIndex(current => (current + 1) % logos.length);
    const prevSlide = () => setActiveIndex(current => (current - 1 + logos.length) % logos.length);

    return (
        <div className="university-partners-section">
            <h2>Our Reached Universities</h2>
            <p className="university-description">
                The universities we partner with are the nurturing grounds for our fellows - the future leaders in tech, banking, and consulting industries. These institutions are more than just educational establishments; they are the pillars that support the aspirations of our students. At Propel, we are dedicated to not only providing resources but also expanding our reach to support more students in their journey to excellence. Below are some of the esteemed universities we've had the privilege of working with, and we're excited about the prospect of partnering with many more as we progress.
            </p>
            <div className="carousel">
                <div className="carousel-inner">
                    <div className={`item ${activeIndex === (logos.length + activeIndex - 1) % logos.length ? 'prev' : ''}`}>
                        <img src={logos[(logos.length + activeIndex - 1) % logos.length]} alt="Previous" />
                    </div>
                    <div className="item active">
                        <img src={logos[activeIndex]} alt="Active" />
                    </div>
                    <div className={`item ${activeIndex === (activeIndex + 1) % logos.length ? 'next' : ''}`}>
                        <img src={logos[(activeIndex + 1) % logos.length]} alt="Next" />
                    </div>
                </div>
                <button className="carousel-control left" onClick={prevSlide}>&lt;</button>
                <button className="carousel-control right" onClick={nextSlide}>&gt;</button>
            </div>
        </div>
    );
}

export default UniversityPartners;
