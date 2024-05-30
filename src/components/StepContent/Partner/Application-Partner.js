import React, { useState } from 'react';
import './Application-Partner.css';
import mentorshipVideo from '../../../assets/videos/job-interview.mp4';
import checkmarkIcon from '../../../assets/images/check.png'; // Ensure this path is correct

const BuddyApplication = () => {
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
            <h2>Application for Propel2Excel Buddy</h2>
            <p>Please fill out the form below to the best of your ability.</p>
          </div>
          <div className="form">
            <form className="buddy-application-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name:</label>
                  <input type="text" required />
                </div>
                <div className="form-group">
                  <label>Last Name:</label>
                  <input type="text" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Degree(s) Studied:</label>
                  <input type="text" required />
                </div>
                <div className="form-group">
                  <label>Current Company:</label>
                  <input type="text" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Contact Email:</label>
                  <input type="email" required />
                </div>
                <div className="form-group">
                  <label>Phone Number:</label>
                  <input type="tel" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>LinkedIn Profile URL:</label>
                  <input type="url" required />
                </div>
                <div className="form-group">
                  <label>Past Employers (if any):</label>
                  <textarea required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Relevant Experience:</label>
                  <textarea required />
                </div>
                <div className="form-group">
                  <label>How can you contribute to the Propel2Excel community?</label>
                  <textarea required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>What motivates you to become a Propel2Excel Buddy?</label>
                  <textarea required />
                </div>
              </div>
              <button type="submit">Submit Application</button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default BuddyApplication;