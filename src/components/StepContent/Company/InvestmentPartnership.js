// InvestmentPartnership.js
import React from 'react';

// Import the images
import mentorshipImage from '../../../assets/images/meetmentor.jpg';
import workshopImage from '../../../assets/images/workshop.jpg';
import networkingEventImage from '../../../assets/images/networking-event.jpg';
import coachingImage from '../../../assets/images/Coaching.jpg';
// import investmentVideo from '../../../assets/videos/investment_example.mp4';


const InvestmentPartnership = () => (
  <div className="investment-partnership-container">
    <h2 className="investment-partnership-header">Investment & Partnership</h2>
    <p className="investment-partnership-intro">
      Partnering with Propel2Excel provides access to elite talented fellows, support in training and preparing possible recruits, and numerous other benefits for your company and the development of fellows.
    </p>
    <div className="investment-partnership-benefits">
      <h3>Benefits of Partnership</h3>
      <ul>
        <li>Access to elite talented fellows.</li>
        <li>Support in training and preparing possible recruits.</li>
        <li>Networking opportunities with other partners and industry leaders.</li>
        <li>Professional development opportunities for your employees.</li>
        <li>Enhanced brand reputation through association with Propel2Excel.</li>
        <li>Opportunity to shape the future of the industry by supporting emerging talent.</li>
      </ul>
    </div>
    <div className="investment-partnership-benefits">
      <h3>Benefits of Investment</h3>
      <ul>
        <li>Direct impact on the development and success of talented fellows.</li>
        <li>Opportunity to invest in future leaders and innovators.</li>
        <li>Potential for high returns on investment through successful partnerships.</li>
        <li>Access to a pool of skilled and motivated individuals for future recruitment.</li>
        <li>Enhanced corporate social responsibility through investment in talent development.</li>
      </ul>
    </div>
    <div className="investment-partnership-video">
      <video controls>
        <source src={coachingImage} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <div className="investment-partnership-images">
      <img src={mentorshipImage} alt="Mentorship" className="investment-partnership-image" />
      <img src={workshopImage} alt="Workshop" className="investment-partnership-image" />
      <img src={networkingEventImage} alt="Networking Event" className="investment-partnership-image" />
      <img src={coachingImage} alt="Coaching" className="investment-partnership-image" />
    </div>
  </div>
);

export default InvestmentPartnership;
