import React from 'react';
import './UniversityPartners.css';
import universityPartnerLogo from '../../assets/images/P2E_Logo.png';
import universityPartnerLogo1 from '../../assets/images/umBoston.jpg';
import universityPartnerLogo2 from '../../assets/images/umassA.jpg';
import universityPartnerLogo3 from '../../assets/images/bc.png';
import universityPartnerLogo4 from '../../assets/images/Northeastern.png';
import universityPartnerLogo5 from '../../assets/images/Wentworth.png';
import universityPartnerLogo6 from '../../assets/images/P2E_Logo.png';
import universityPartnerLogo7 from '../../assets/images/P2E_Logo.png';

function UniversityPartners() {
  const reachedUniversities = [
    {
      name: 'University of Massachusetts Boston',
      description: 'A university we have reached and are currently partnering with, providing educational resources and support.',
      image: universityPartnerLogo1
    },
    {
      name: 'Reached University 1',
      description: 'Another university we have successfully partnered with, known for its strong research focus.',
      image: universityPartnerLogo2
    },
    {
      name: 'Upcoming University 2',
      description: 'Another institution on our radar, renowned for its international studies programs.',
      image: universityPartnerLogo3
    },
    {
      name: 'Upcoming University 2',
      description: 'Another institution on our radar, renowned for its international studies programs.',
      image: universityPartnerLogo4
    },
    // Add more reached universities as needed...
  ];

  const upcomingUniversities = [
    {
      name: 'Upcoming University 1',
      description: 'A prospective university we are planning to partner with, known for its focus on innovation in education.',
      image: universityPartnerLogo5
    },
    {
      name: 'Upcoming University 2',
      description: 'Another institution on our radar, renowned for its international studies programs.',
      image: universityPartnerLogo3
    },
    {
      name: 'Upcoming University 2',
      description: 'Another institution on our radar, renowned for its international studies programs.',
      image: universityPartnerLogo2
    },
    {
      name: 'Upcoming University 2',
      description: 'Another institution on our radar, renowned for its international studies programs.',
      image: universityPartnerLogo1
    },
    // Add more upcoming universities as needed...
  ];

  return (
    <div className="partners-container">
      <h1>Our Reached Universities</h1>
      
      <section className="reached-universities">
        <h2>Universities We Have Successfully Partnered With</h2>
        <div className="partners-grid">
          {reachedUniversities.map((partner, index) => (
            <div key={index} className="partner">
              <img src={partner.image} alt={partner.name} className="partner-logo" />
              <h3>{partner.name}</h3>
              <p>{partner.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="upcoming-universities">
        <h2>Universities We're Coming to Soon</h2>
        <div className="partners-grid">
          {upcomingUniversities.map((partner, index) => (
            <div key={index} className="partner">
              <img src={partner.image} alt={partner.name} className="partner-logo" />
              <h3>{partner.name}</h3>
              <p>{partner.description}</p>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
}

export default UniversityPartners;
