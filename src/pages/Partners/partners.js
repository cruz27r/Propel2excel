import React from 'react';
import './partners.css';
import partnerLogo from '../../assets/images/P2E_Logo.png'; // Update the path to your image

function Partners() {
  // Placeholder data for partners
  const currentPartners = [
    {
      name: 'University of Massachusetts Boston',
      description: 'A current partner providing educational resources and support.',
      image: partnerLogo
    },
    {
      name: 'Current Partner 1',
      description: 'A prospective partner with aligned goals and visions.',
      image: partnerLogo
    },
    {
      name: 'Current Partner 2',
      description: 'A prospective partner with aligned goals and visions.',
      image: partnerLogo
    },
    // Add more current partners as needed...
  ];

  const anticipatedPartners = [
    {
      name: 'Future Partner 1',
      description: 'A prospective partner with aligned goals and visions.',
      image: partnerLogo
    },
    {
      name: 'Future Partner 2',
      description: 'A prospective partner with aligned goals and visions.',
      image: partnerLogo
    },
    {
      name: 'Future Partner 3',
      description: 'A prospective partner with aligned goals and visions.',
      image: partnerLogo
    },
    {
      name: 'Future Partner 4',
      description: 'A prospective partner with aligned goals and visions.',
      image: partnerLogo
    },
    {
      name: 'Future Partner 5',
      description: 'A prospective partner with aligned goals and visions.',
      image: partnerLogo
    },
    {
      name: 'Future Partner 6',
      description: 'A prospective partner with aligned goals and visions.',
      image: partnerLogo
    },
    // Add more anticipated partners as needed...
  ];

  return (
    <div className="partners-container">
      <h1>Our Partners</h1>
      
      <section className="current-partners">
        <h2>Current Partners</h2>
        <div className="partners-grid">
          {currentPartners.map((partner, index) => (
            <div key={index} className="partner">
              <img src={partner.image} alt={partner.name} className="partner-logo" />
              <h3>{partner.name}</h3>
              <p>{partner.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="anticipated-partners">
        <h2>Anticipated Partners</h2>
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

export default Partners;
