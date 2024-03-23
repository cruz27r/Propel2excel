import React from 'react';

import './Application-Partner.css';

import mentorshipVideo from '../../../assets/videos/mentorship_example.mp4'; // Import mentorship video
import workshopImage from '../../../assets/images/workshop.jpg'; // Import workshop image
import networkingImage from '../../../assets/images/networking-event.jpg'; // Import networking event image

const PartnerApplication = () => {
  return (
    <div className="student-application-container">
      <form className="student-application-form">
        <h3>Application for University Partner</h3>
        <label>
          Name of Institution:
          <input type="text" required />
        </label>
        <label>
          Contact Email:
          <input type="email" required />
        </label>
        <label>
          Phone Number:
          <input type="tel" required />
        </label>
        <label>
          LinkedIn Profile URL:
          <input type="url" required />
        </label>
        <label>
          Resume:
          <input type="file" accept=".pdf,.doc,.docx" required />
        </label>
        <label className="full-width">
          Internship Experience (if any):
          <textarea required />
        </label>
        <label>
          Current GPA:
          <input type="text" required />
        </label>
        <label className="full-width">
          Top 3 Companies for Internship and Full-Time Career:
          <textarea required />
        </label>
        <label className="full-width">
          How do you envision your career and how can Propel2Excel help make this become your reality?
          <textarea required />
        </label>
        <label className="full-width">
          What are the biggest hurdles in your recruiting experience and why?
          <textarea required />
        </label>
        <label className="full-width">
          Why are you a good candidate for Propel2Excel?
          <textarea required />
        </label>
        <label className="full-width">
          What would you like to get out of Propel2Excel?
          <textarea required />
        </label>
        <label className="full-width">
          Do you believe it is attainable for you to achieve an opportunity at a tier 1 company in tech, consulting or banking, and why? Examples: Tier 1 Google, Tier 2 HubSpot, Tier 3 HP
          <textarea required />
        </label>
        <button type="submit">Submit Application</button>
      </form>

      <div className="application-media">
        <img src={workshopImage} alt="Workshop" className="media-image" />
        <video autoPlay loop className="media-video">
          <source src={mentorshipVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <img src={networkingImage} alt="Networking Event" className="media-image" />
      </div>
    </div>
  );
};

export default PartnerApplication;
