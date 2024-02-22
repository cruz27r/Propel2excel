import React, { useState, useEffect } from 'react';
import './CorporatePartners.css';

// Import your tech logos
import techlogo1 from '../../assets/images/CompanyLogos/Tech/Bain_Capital_Logo copy.jpg';
import techlogo2 from '../../assets/images/CompanyLogos/Tech/aws.png';
import techlogo3 from '../../assets/images/CompanyLogos/Tech/corsair.png';
import techlogo4 from '../../assets/images/CompanyLogos/Tech/samsung.png';
import techlogo5 from '../../assets/images/CompanyLogos/Tech/meta.png';
import techlogo6 from '../../assets/images/CompanyLogos/Tech/microsoft-text.png';

//import banking logos
import bankinglogo1 from '../../assets/images/CompanyLogos/Banking/bank-of-america-logo-bank-of-america-icon-transparent-free-png.webp';
import bankinglogo2 from '../../assets/images/CompanyLogos/Banking/Citibank.svg.png';
import bankinglogo3 from '../../assets/images/CompanyLogos/Banking/download.png';
import bankinglogo4 from '../../assets/images/CompanyLogos/Banking/kisspng-logo-goldman-sachs-vector-graphics-brand-font-sponsors-imperial-college-eesoc-electrical-engin-5b7448af33eda6.5907996815343474392127.jpg';
import bankinglogo5 from '../../assets/images/CompanyLogos/Banking/TD-Bank-logo.png';
import bankinglogo6 from '../../assets/images/CompanyLogos/Banking/capitalone.png';

// import consulting logos
import consultinglogo1 from '../../assets/images/CompanyLogos/Consulting/76924bf3b16400a6d0b6e7e1aeed033d.png';
import consultinglogo2 from '../../assets/images/CompanyLogos/Consulting/Bain_Capital_Logo.jpg';
import consultinglogo3 from '../../assets/images/CompanyLogos/Consulting/png-transparent-google-logo-google-doodle-google-search-design-tshirt-company-text-trademark-thumbnail.png';
import consultinglogo4 from '../../assets/images/CompanyLogos/Consulting/Goldman_Sachs_Secondary.png';
import consultinglogo5 from '../../assets/images/CompanyLogos/Consulting/Accenture_logo.svg.png';
import consultinglogo6 from '../../assets/images/CompanyLogos/Consulting/Oliver-Wyman.webp';

//anticipated logos
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
    const techLogos = [techlogo1, techlogo2, techlogo3, techlogo4, techlogo5, techlogo6]; // Use all logos for each section
    const consultingLogos = [consultinglogo1, consultinglogo2, consultinglogo3, consultinglogo4, consultinglogo5, consultinglogo6];
    const bankingLogos = [bankinglogo1, bankinglogo2, bankinglogo3, bankinglogo4, bankinglogo5, bankinglogo6];
    const anticipatedLogos = [logo1, logo2, logo3, logo4, logo5, logo6];

    // Slider section states
    const [activeSection, setActiveSection] = useState('tech');

    const handleSectionClick = (section) => {
        setActiveSection(section);
    };

    // Determine which logos to display based on the active section
    let displayedLogos;
    switch (activeSection) {
        case 'tech':
            displayedLogos = techLogos;
            break;
        case 'consulting':
            displayedLogos = consultingLogos;
            break;
        case 'banking':
            displayedLogos = bankingLogos;
            break;
        default:
            displayedLogos = techLogos; // Default to tech logos
    }

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
            <div className="carousel">
                {/* Reached Universities Carousel */}
                <div className="carousel-inner">
                    <div className={`item ${activeIndexReached === (displayedLogos.length + activeIndexReached - 1) % displayedLogos.length ? 'prev' : ''}`}>
                        <img src={displayedLogos[(displayedLogos.length + activeIndexReached - 1) % displayedLogos.length]} alt="Previous" />
                    </div>
                    <div className="item active">
                        <img src={displayedLogos[activeIndexReached]} alt="Active" />
                    </div>
                    <div className={`item ${activeIndexReached === (activeIndexReached + 1) % displayedLogos.length ? 'next' : ''}`}>
                        <img src={displayedLogos[(activeIndexReached + 1) % displayedLogos.length]} alt="Next" />
                    </div>
                </div>
                <button className="carousel-control left" onClick={prevSlideReached}>&lt;</button>
                <button className="carousel-control right" onClick={nextSlideReached}>&gt;</button>
            </div>
            <p className="corporate-description">
                Our current corporate partners play a pivotal role in providing strong connections between our fellows and the industry. These companies offer positions and interview opportunities, along with employees who act as coaches for our 1-on-1 sessions. They help prepare resumes, review interviews, and provide practice tailored to their specific companies. These relationships with the top companies build the bridge for our fellows to start their professional journeys.
            </p>

            <h2>Our Anticipated Corporate Partners</h2>
            <p className="corporate-description">
                Our anticipated corporate partners will also play a crucial role in providing connections, interview opportunities, coaching, resume preparation, and interview practice. These partnerships will further enhance the opportunities for our fellows to kickstart their professional journeys.
            </p>
            <div className="carousel">
                {/* Universities We Are Coming To Carousel */}
                <div className="carousel-inner">
                    <div className={`item ${activeIndexComingTo === (anticipatedLogos.length + activeIndexComingTo - 1) % anticipatedLogos.length ? 'prev' : ''}`}>
                        <img src={anticipatedLogos[(anticipatedLogos.length + activeIndexComingTo - 1) % anticipatedLogos.length]} alt="Previous" />
                    </div>
                    <div className="item active">
                        <img src={anticipatedLogos[activeIndexComingTo]} alt="Active" />
                    </div>
                    <div className={`item ${activeIndexComingTo === (activeIndexComingTo + 1) % anticipatedLogos.length ? 'next' : ''}`}>
                        <img src={anticipatedLogos[(activeIndexComingTo + 1) % anticipatedLogos.length]} alt="Next" />
                    </div>
                </div>
                <button className="carousel-control left" onClick={prevSlideComingTo}>&lt;</button>
                <button className="carousel-control right" onClick={nextSlideComingTo}>&gt;</button>
            </div>
        </div>
    );
}

export default CorporatePartners;
