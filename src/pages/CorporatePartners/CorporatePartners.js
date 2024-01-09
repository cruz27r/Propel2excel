import React from 'react';
import './CorporatePartners.css';
import corporatePartnerLogo from '../../assets/images/P2E_Logo.png';

function CorporatePartners() {
  const corporatePartners = [
    {
      name: 'Corporate Partner 1',
      description: 'A leading company in the industry.',
      image: corporatePartnerLogo
    },
    {
      name: 'Corporate Partner 2',
      description: 'Innovative solutions for modern challenges.',
      image: corporatePartnerLogo
    },
    // Add more corporate partners as needed...
  ];

  const anticipatedPartners = [
    {
      name: 'Future Corporate Partner 1',
      description: 'A prospective partner with aligned goals and visions.',
      image: corporatePartnerLogo
    },
    {
      name: 'Future Corporate Partner 2',
      description: 'A pioneering company in technology and innovation.',
      image: corporatePartnerLogo
    },
    // Add more anticipated corporate partners as needed...
  ];

  return (
    <div className="partners-container">
      <h1>Our Corporate Partners</h1>
      
      <section className="current-partners">
        <h2>Current Corporate Partners</h2>
        <div className="partners-grid">
          {corporatePartners.map((partner, index) => (
            <div key={index} className="partner">
              <img src={partner.image} alt={partner.name} className="partner-logo" />
              <h3>{partner.name}</h3>
              <p>{partner.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="anticipated-partners">
        <h2>Anticipated Corporate Partners</h2>
        <div className="partners-grid">
          {anticipatedPartners.map((partner, index) => (
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

export default CorporatePartners;
