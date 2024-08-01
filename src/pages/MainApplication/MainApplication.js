import React, { useState } from 'react';
import './MainApplication.css'; // Importing the CSS file
import mentorshipVideo from './../../assets/videos/job-interview.mp4';
import checkmarkIcon from './../../assets/images/check.png'; // Ensure this path is correct

const MainApplication = ({ defaultApplicationType }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [applicationType, setApplicationType] = useState(defaultApplicationType || 'student');
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({ ...formData, [name]: type === 'file' ? files[0] : value });
  };

  const handleApplicationTypeChange = (e) => {
    setApplicationType(e.target.value);
    setFormData({}); // Reset form data when application type changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = `http://api.propel2excel.com:5000/api/${applicationType}s`;

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key] !== null && formData[key] !== '') {
        data.append(key, formData[key]);
      }
    });

    fetch(url, {
      method: 'POST',
      body: data,
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((result) => {
      setIsSubmitted(true);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  const renderStudentForm = () => (
    <>
      <div className="form-row">
        <div className="form-group">
          <label>First Name:</label>
          <input type="text" name="firstName" required onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input type="text" name="lastName" required onChange={handleInputChange} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Name of Institution:</label>
          <input type="text" name="nameofInstitution" required onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Contact Email:</label>
          <input type="email" name="email" required onChange={handleInputChange} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Phone Number:</label>
          <input type="tel" name="phoneNumber" required onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>LinkedIn Profile URL:</label>
          <input type="url" name="linkedinURL" required onChange={handleInputChange} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Resume:</label>
          <input type="file" name="resume" accept=".pdf,.doc,.docx" required onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Current GPA:</label>
          <input type="text" name="currentGPA" required onChange={handleInputChange} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Internship Experience (if any):</label>
          <textarea name="internshipExperience" required onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Top 3 Companies for Internship and Full-Time Career:</label>
          <textarea name="top3Companies" required onChange={handleInputChange} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>How do you envision your career and how can Propel2Excel help make this become your reality?</label>
          <textarea name="studentQ1" required onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>What are the biggest hurdles in your recruiting experience and why?</label>
          <textarea name="studentQ2" required onChange={handleInputChange} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Why are you a good candidate for Propel2Excel?</label>
          <textarea name="studentQ3" required onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>What would you like to get out of Propel2Excel?</label>
          <textarea name="studentQ4" required onChange={handleInputChange} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Do you believe it is attainable for you to achieve an opportunity at a tier 1 company in tech, consulting or banking, and why?</label>
          <textarea name="studentQ5" required onChange={handleInputChange} />
        </div>
      </div>
    </>
  );

  const renderCompanyForm = () => (
    <>
      <div className="form-row">
        <div className="form-group">
          <label>Company Name:</label>
          <input type="text" name="companyName" required onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Contact Person:</label>
          <input type="text" name="contactPerson" required onChange={handleInputChange} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Contact Email:</label>
          <input type="email" name="email" required onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input type="tel" name="phoneNumber" required onChange={handleInputChange} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Company URL:</label>
          <input type="url" name="companyURL" required onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea name="description" required onChange={handleInputChange} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Question 1:</label>
          <textarea name="companyQ1" required onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Question 2:</label>
          <textarea name="companyQ2" required onChange={handleInputChange} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Question 3:</label>
          <textarea name="companyQ3" required onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Question 4:</label>
          <textarea name="companyQ4" required onChange={handleInputChange} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Question 5:</label>
          <textarea name="companyQ5" required onChange={handleInputChange} />
        </div>
      </div>
    </>
  );

  const renderVolunteerForm = () => (
    <>
      <div className="form-row">
        <div className="form-group">
          <label>First Name:</label>
          <input type="text" name="firstName" required onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input type="text" name="lastName" required onChange={handleInputChange} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Contact Email:</label>
          <input type="email" name="email" required onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input type="tel" name="phoneNumber" required onChange={handleInputChange} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>LinkedIn Profile URL:</label>
          <input type="url" name="linkedinURL" required onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Resume:</label>
          <input type="file" name="resume" accept=".pdf,.doc,.docx" required onChange={handleInputChange} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Volunteer Experience:</label>
          <textarea name="volunteerExperience" required onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Question 1:</label>
          <textarea name="volunteerQ1" required onChange={handleInputChange} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Question 2:</label>
          <textarea name="volunteerQ2" required onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Question 3:</label>
          <textarea name="volunteerQ3" required onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Question 4:</label>
          <textarea name="volunteerQ4" required onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Question 5:</label>
          <textarea name="volunteerQ5" required onChange={handleInputChange} />
        </div>
      </div>
    </>
  );

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
            <p>Please fill out the form below to the best of your ability.</p>
          </div>
          <div className="form">
            <select value={applicationType} onChange={handleApplicationTypeChange}>
              <option value="student">Student</option>
              <option value="company">Company</option>
              <option value="volunteer">Volunteer</option>
            </select>
            <form className="application-form" onSubmit={handleSubmit}>
              {applicationType === 'student' && renderStudentForm()}
              {applicationType === 'company' && renderCompanyForm()}
              {applicationType === 'volunteer' && renderVolunteerForm()}
              <button type="submit">Submit Application</button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default MainApplication;
