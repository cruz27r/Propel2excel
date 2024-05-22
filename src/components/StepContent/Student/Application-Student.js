import React, { useState } from 'react';
import './Application-Student.css';
import mentorshipVideo from '../../../assets/videos/job-interview.mp4';
import checkmarkIcon from '../../../assets/images/check.png'; // Ensure this path is correct

const StudentApplication = () => {
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
            <h2>Application for Propel2Excel Fellowship</h2>
            <p>Please fill out the form below to best of your ability.</p>
          </div>
          <div className="form">
            <form className="student-application-form" onSubmit={handleSubmit}>
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
                  <label>Name of Institution:</label>
                  <input type="text" required />
                </div>
                <div className="form-group">
                  <label>Contact Email:</label>
                  <input type="email" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number:</label>
                  <input type="tel" required />
                </div>
                <div className="form-group">
                  <label>LinkedIn Profile URL:</label>
                  <input type="url" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Resume:</label>
                  <input type="file" accept=".pdf,.doc,.docx" required />
                </div>
                <div className="form-group">
                  <label>Current GPA:</label>
                  <input type="text" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Internship Experience (if any):</label>
                  <textarea required />
                </div>
                <div className="form-group">
                  <label>Top 3 Companies for Internship and Full-Time Career:</label>
                  <textarea required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>How do you envision your career and how can Propel2Excel help make this become your reality?</label>
                  <textarea required />
                </div>
                <div className="form-group">
                  <label>What are the biggest hurdles in your recruiting experience and why?</label>
                  <textarea required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Why are you a good candidate for Propel2Excel?</label>
                  <textarea required />
                </div>
                <div className="form-group">
                  <label>What would you like to get out of Propel2Excel?</label>
                  <textarea required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Do you believe it is attainable for you to achieve an opportunity at a tier 1 company in tech, consulting or banking, and why?</label>
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

export default StudentApplication;