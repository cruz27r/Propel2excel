// BuddySystem.js
import React, { useState } from 'react';
import './BuddySystem.css'; // Make sure to create a corresponding CSS file for styling

const ServiceDetail = ({ title, description, imagePlaceholder }) => {
  return (
    <div className="service-detail">
      <div className="service-image" style={{ backgroundColor: imagePlaceholder }}></div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const BuddySystem = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 'resume',
      title: 'Resume Assistance',
      description: 'Help fellows craft a resume that stands out to employers by providing feedback and sharing best practices.',
      imagePlaceholder: '#87CEEB',
    },
    {
      id: 'linkedin',
      title: 'LinkedIn Optimization',
      description: 'Guide fellows in building a professional LinkedIn profile that showcases their skills and experience.',
      imagePlaceholder: '#FFD700',
    },
    {
      id: 'interview',
      title: 'Interview Preparation',
      description: 'Conduct mock interviews to help fellows build confidence and refine their interviewing skills.',
      imagePlaceholder: '#32CD32',
    },
    // Add more services as needed
  ];

  return (
    <div className="buddy-system-container">
      <h2>Buddy System for Partners</h2>
      <p>
        As a partner in the Propel2Excel program, you play a crucial role in guiding and supporting our fellows.
        Your expertise and experience can make a significant difference in their journey.
      </p>
      <div className="services-container">
        {services.map((service) => (
          <button
            key={service.id}
            className={`service-button ${activeService === service.id ? 'active' : ''}`}
            onClick={() => setActiveService(service.id)}
          >
            {service.title}
          </button>
        ))}
      </div>
      <div className="service-details-container">
        {services.map((service) => (
          activeService === service.id && <ServiceDetail key={service.id} {...service} />
        ))}
      </div>
    </div>
  );
};

export default BuddySystem;
