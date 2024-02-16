import React, { useState, useEffect } from 'react';
import './CorporatePartners.css';

// Import your logos
import logo1 from '../../assets/images/UMass_Boston_logo.png';
import logo2 from '../../assets/images/umassA.png';
import logo3 from '../../assets/images/bc.png';
import logo4 from '../../assets/images/Northeastern-University-Logo.png';
import logo5 from '../../assets/images/Wentworth.png';
import logo6 from '../../assets/images/BU.png';

function CorporatePartners() {
    // Index and carousel logic for reached universities
    const [activeIndexReached, setActiveIndexReached] = useState(2);
    useEffect(() => {
        const intervalReached = setInterval(() => {
            setActiveIndexReached(current => (current + 1) % logos.length);
        }, 4500); // Change slide every 5 seconds
        return () => clearInterval(intervalReached);
    }, []);

    const nextSlideReached = () => setActiveIndexReached(current => (current + 1) % logos.length);
    const prevSlideReached = () => setActiveIndexReached(current => (current - 1 + logos.length) % logos.length);

    // Index and carousel logic for universities we are coming to
    const [activeIndexComingTo, setActiveIndexComingTo] = useState(0);
    useEffect(() => {
        const intervalComingTo = setInterval(() => {
            setActiveIndexComingTo(current => (current + 1) % logos.length);
        }, 5000); // Change slide every 5 seconds for coming to section
        return () => clearInterval(intervalComingTo);
    }, []);

    const nextSlideComingTo = () => setActiveIndexComingTo(current => (current + 1) % logos.length);
    const prevSlideComingTo = () => setActiveIndexComingTo(current => (current - 1 + logos.length) % logos.length);

    // All logos
    const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

    // Slider section states
    const [activeSection, setActiveSection] = useState('tech');

    const handleSectionClick = (section) => {
        setActiveSection(section);
    };

    return (
        <div className="corporate-partners-section">
            <h2>Our Current Corporate Partners</h2>
            <div className="slider-section-names">
                <div className={`slider-item-name ${activeSection === 'tech' ? 'active' : ''}`} onClick={() => handleSectionClick('tech')}>
                    <h3>Tech</h3>
                </div>
                <div className={`slider-item-name ${activeSection === 'consulting' ? 'active' : ''}`} onClick={() => handleSectionClick('consulting')}>
                    <h3>Consulting</h3>
                </div>
                <div className={`slider-item-name ${activeSection === 'banking' ? 'active' : ''}`} onClick={() => handleSectionClick('banking')}>
                    <h3>Banking</h3>
                </div>
            </div>
            <p className="corporate-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada faucibus ex nec ultricies. Donec mattis egestas nisi non pretium.
            </p>
            <div className="carousel">
                {/* Reached Universities Carousel */}
                <div className="carousel-inner">
                    <div className={`item ${activeIndexReached === (logos.length + activeIndexReached - 1) % logos.length ? 'prev' : ''}`}>
                        <img src={logos[(logos.length + activeIndexReached - 1) % logos.length]} alt="Previous" />
                    </div>
                    <div className="item active">
                        <img src={logos[activeIndexReached]} alt="Active" />
                    </div>
                    <div className={`item ${activeIndexReached === (activeIndexReached + 1) % logos.length ? 'next' : ''}`}>
                        <img src={logos[(activeIndexReached + 1) % logos.length]} alt="Next" />
                    </div>
                </div>
                <button className="carousel-control left" onClick={prevSlideReached}>&lt;</button>
                <button className="carousel-control right" onClick={nextSlideReached}>&gt;</button>
            </div>

            <h2>Our Anticipated Corporate Partners</h2>
            <p className="corporate-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada faucibus ex nec ultricies. Donec mattis egestas nisi non pretium.
            </p>
            <div className="carousel">
                {/* Universities We Are Coming To Carousel */}
                <div className="carousel-inner">
                    <div className={`item ${activeIndexComingTo === (logos.length + activeIndexComingTo - 1) % logos.length ? 'prev' : ''}`}>
                        <img src={logos[(logos.length + activeIndexComingTo - 1) % logos.length]} alt="Previous" />
                    </div>
                    <div className="item active">
                        <img src={logos[activeIndexComingTo]} alt="Active" />
                    </div>
                    <div className={`item ${activeIndexComingTo === (activeIndexComingTo + 1) % logos.length ? 'next' : ''}`}>
                        <img src={logos[(activeIndexComingTo + 1) % logos.length]} alt="Next" />
                    </div>
                </div>
                <button className="carousel-control left" onClick={prevSlideComingTo}>&lt;</button>
                <button className="carousel-control right" onClick={nextSlideComingTo}>&gt;</button>
            </div>
        </div>
    );
}

export default CorporatePartners;
