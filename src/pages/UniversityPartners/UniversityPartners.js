import React, { useMemo } from 'react';
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
        { name: 'Wentworth Institute of Technology', image: universityPartnerLogo5 },
        // Duplicated entries to fill up the grid as per requirement
        { name: 'University of Massachusetts Boston - 2', image: universityPartnerLogo1 },
        { name: 'University of Massachusetts Amherst - 2', image: universityPartnerLogo2 },
        { name: 'Boston College - 2', image: universityPartnerLogo3 },
    ], []);

    const upcomingUniversities = useMemo(() => [
        { name: 'Upcoming University 1', image: universityPartnerLogo5 },
        { name: 'Upcoming University 2', image: universityPartnerLogo3 },
        { name: 'Upcoming University 3', image: universityPartnerLogo5 },
        { name: 'Upcoming University 4', image: universityPartnerLogo1 },
        { name: 'Upcoming University 5', image: universityPartnerLogo2 },
        { name: 'Upcoming University 6', image: universityPartnerLogo3 },
    ], []);

    return (
        <div className="partners-container">
            <h1>Our Reached Universities</h1>
            <div className="university-introduction">
                <p>The Universities represent more than just those to whom we are bringing educational resources and support. These schools are the homes of our fellows who are preparing themselves to enter and take over in their careers, following the path and lessons that P2E has carved for their empowerment.</p>
            </div>
            <section className="reached-universities">
                <div className="partners-grid">
                    {reachedUniversities.map((partner, index) => (
                        <div key={index} className="partner">
                            <img src={partner.image} alt={partner.name} className="partner-logo" />
                            <h3>{partner.name}</h3>
                        </div>
                    ))}
                </div>
            </section>

            <h1>Universities We're Coming to Soon</h1>
            <section className="upcoming-universities">
                <div className="partners-grid">
                    {upcomingUniversities.map((partner, index) => (
                        <div key={index} className="partner">
                            <img src={partner.image} alt={partner.name} className="partner-logo" />
                            <h3>{partner.name}</h3>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default UniversityPartners;
