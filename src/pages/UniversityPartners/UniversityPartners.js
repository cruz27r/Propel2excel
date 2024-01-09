import React from 'react';
import './UniversityPartners.css';
import universityPartnerLogo from '../../assets/images/P2E_Logo.png';

function UniversityPartners() {
  const universityPartners = [
    {
      name: 'University of Massachusetts Boston',
      description: 'A current partner providing educational resources and support.',
      image: universityPartnerLogo
    },
    {
      name: 'University Partner 1',
      description: 'A renowned university with a strong research focus.',
      image: universityPartnerLogo
    },
    // Add more university partners as needed...
  ];

  const anticipatedPartners = [
    {
      name: 'Future University Partner 1',
      description: 'A prospective partner with a focus on innovation in education.',
      image: universityPartnerLogo
    },
    {
      name: 'Future University Partner 2',
      description: 'A leading institution in international studies.',
      image: universityPartnerLogo
    },
    // Add more anticipated university partners as needed...
  ];

  return (
    <div className="partners-container">
      <h1>Our University Partners</h1>
      
      <section className="current-partners">
        <h2>Current University Partners</h2>
        <div className="partners-grid">
          {universityPartners.map((partner, index) => (
            <div key={index} className="partner">
              <img src={partner.image} alt={partner.name} className="partner-logo" />
              <h3>{partner.name}</h3>
              <p>{partner.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="anticipated-partners">
        <h2>Anticipated University Partners</h2>
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

export default UniversityPartners;
