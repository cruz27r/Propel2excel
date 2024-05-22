import React, { useState } from 'react';
import './Application-Company.css';
import mentorshipVideo from '../../../assets/videos/job-interview.mp4';
import checkmarkIcon from '../../../assets/images/check.png'; // Ensure this path is correct

const CompanyApplication = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="Application-Page">
      {isSubmitted ? (
        <div className="confirmation-view">
          <img src={checkmarkIcon} alt="Checkmark" className="checkmark-icon" />
          <h3>Thank you!</h3>
          <p>Your submission has been sent.</p>
        </div>
      ) : (
        <>
          <div className="banner">
            <video autoPlay loop muted playsInline className="banner-video">
              <source src={mentorshipVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="header">
            <h2>Partnership Inquiry for Propel2Excel</h2>
            <p>Please fill out the form below to best of your ability.</p>
          </div>
          <div className="form">
            <form className="company-application-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Applicants First Name:</label>
                  <input type="text" required />
                </div>
                <div className="form-group">
                  <label>Applicants Last Name:</label>
                  <input type="text" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Company Name:</label>
                  <input type="text" required />
                </div>
                <div className="form-group">
                  <label>Best Reachable Email:</label>
                  <input type="email" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Best Reachable Phone Number (if applicable):</label>
                  <input type="tel" />
                </div>
                <div className="form-group">
                  <label>LinkedIn Profile URL:</label>
                  <input type="url" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Company Website:</label>
                  <input type="url" required />
                </div>
                <div className="form-group">
                  <label>Industry:</label>
                  <input type="text" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Current Collaborations or Partnerships (if any):</label>
                  <textarea required />
                </div>
                <div className="form-group">
                  <label>Areas of Interest for Collaboration:</label>
                  <textarea required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>How do you envision a partnership with Propel2Excel benefiting your company?</label>
                  <textarea required />
                </div>
                <div className="form-group">
                  <label>What are the key objectives your company aims to achieve through this partnership?</label>
                  <textarea required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>How can Propel2Excel support your company's goals and initiatives?</label>
                  <textarea required />
                </div>
                <div className="form-group">
                  <label>Any additional information or comments:</label>
                  <textarea required />
                </div>
              </div>
              <button type="submit">Submit Inquiry</button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default CompanyApplication;
