import React, { useMemo } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import './UniversityPartners.css';
import universityPartnerLogo1 from '../../assets/images/umBoston.jpg';
import universityPartnerLogo2 from '../../assets/images/umassA.jpg';
import universityPartnerLogo3 from '../../assets/images/bc.png';
import universityPartnerLogo4 from '../../assets/images/Northeastern.png';
import universityPartnerLogo5 from '../../assets/images/Wentworth.png';

function UniversityPartners() {
    const reachedUniversities = useMemo(() => [
        { name: 'University of Massachusetts Boston', image: universityPartnerLogo1 },
        { name: 'University of Massachusetts Amherst', image: universityPartnerLogo2 },
        { name: 'Boston College', image: universityPartnerLogo3 },
        { name: 'Northeastern University', image: universityPartnerLogo4 },
        // Duplicating to fill 8 slots
        { name: 'Wentworth Institute of Technology', image: universityPartnerLogo5 },
        { name: 'University of Massachusetts Boston - Duplicate', image: universityPartnerLogo1 },
        { name: 'University of Massachusetts Amherst - Duplicate', image: universityPartnerLogo2 },
        { name: 'Boston College - Duplicate', image: universityPartnerLogo3 },
    ], []);

    const upcomingUniversities = useMemo(() => [
        { name: 'Upcoming University 1', image: universityPartnerLogo5 },
        { name: 'Upcoming University 2', image: universityPartnerLogo3 },
        // Duplicating to fill 8 slots
        { name: 'Upcoming University 3', image: universityPartnerLogo1 },
        { name: 'Upcoming University 4', image: universityPartnerLogo2 },
        { name: 'Upcoming University 5 - Duplicate', image: universityPartnerLogo5 },
        { name: 'Upcoming University 6 - Duplicate', image: universityPartnerLogo3 },
        { name: 'Upcoming University 7 - Duplicate', image: universityPartnerLogo1 },
        { name: 'Upcoming University 8 - Duplicate', image: universityPartnerLogo2 },
    ], []);

    // Slider settings
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="partners-container">
            <h1>Our Reached Universities</h1>
            <div className="university-introduction">
                <p>The Universities represent more than just those to whom we are bringing educational resources and support. These schools are the homes of our fellows who are preparing themselves to enter and take over in their careers, following the path and lessons that P2E has carved for their empowerment.</p>
            </div>
            <Slider {...sliderSettings}>
                {reachedUniversities.map((uni, index) => (
                    <div key={index} className="partner-slide">
                        <img src={uni.image} alt={uni.name} className="partner-logo" />
                        <h3>{uni.name}</h3>
                    </div>
                ))}
            </Slider>

            <h1>Universities We're Coming to Soon</h1>
            <Slider {...sliderSettings}>
                {upcomingUniversities.map((uni, index) => (
                    <div key={index} className="partner-slide">
                        <img src={uni.image} alt={uni.name} className="partner-logo" />
                        <h3>{uni.name}</h3>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default UniversityPartners;
