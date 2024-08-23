import React, { useState } from 'react';
import './MainApplication.css';
import mentorshipVideo from './../../assets/videos/job-interview.mp4';
import checkmarkIcon from './../../assets/images/check.png';
import Footer from '../../components/Footer/Footer';

const formFields = {
  students: [
    { label: 'First Name', name: 'firstName', type: 'text', required: true },
    { label: 'Last Name', name: 'lastName', type: 'text', required: true },
    { label: 'Name of Institution', name: 'nameofInstitution', type: 'text', required: true },
    { label: 'Contact Email', name: 'email', type: 'email', required: true },
    { label: 'Phone Number', name: 'phoneNumber', type: 'tel', required: true },
    { label: 'LinkedIn Profile URL', name: 'linkedinURL', type: 'url', required: true },
    { label: 'Resume', name: 'resume', type: 'file', accept: '.pdf,.doc,.docx', required: true },
    { label: 'Current GPA', name: 'currentGPA', type: 'text', required: true },
    { label: 'Internship Experience (if any)', name: 'internshipExperience', type: 'textarea', required: true },
    { label: 'Top 3 Companies for Internship and Full-Time Career', name: 'top3Companies', type: 'textarea', required: true },
    { label: 'How do you envision your career and how can Propel2Excel help make this become your reality?', name: 'studentQ1', type: 'textarea', required: true },
    { label: 'What are the biggest hurdles in your recruiting experience and why?', name: 'studentQ2', type: 'textarea', required: true },
    { label: 'Why are you a good candidate for Propel2Excel?', name: 'studentQ3', type: 'textarea', required: true },
    { label: 'What would you like to get out of Propel2Excel?', name: 'studentQ4', type: 'textarea', required: true },
    { label: 'Do you believe it is attainable for you to achieve an opportunity at a tier 1 company in tech, consulting, or banking, and why?', name: 'studentQ5', type: 'textarea', required: true },
    { label: 'How did you hear about us?', name: 'howDidYouHearAboutUs', type: 'textarea', required: true },
    { label: 'Organizations', name: 'organizations', type: 'textarea', required: true },
  ],
  companies: [
    { label: 'Company Name', name: 'companyName', type: 'text', required: true },
    { label: 'Contact Person', name: 'contactPerson', type: 'text', required: true },
    { label: 'Contact Email', name: 'email', type: 'email', required: true },
    { label: 'Phone Number', name: 'phoneNumber', type: 'tel', required: true },
    { label: 'Company URL', name: 'companyURL', type: 'url', required: true },
    { label: 'Description', name: 'description', type: 'textarea', required: true },
    { label: 'Question 1', name: 'companyQ1', type: 'textarea', required: true },
    { label: 'Question 2', name: 'companyQ2', type: 'textarea', required: true },
    { label: 'Question 3', name: 'companyQ3', type: 'textarea', required: true },
    { label: 'Question 4', name: 'companyQ4', type: 'textarea', required: true },
    { label: 'Question 5', name: 'companyQ5', type: 'textarea', required: true },
  ],
  volunteers: [
    { label: 'First Name', name: 'firstName', type: 'text', required: true },
    { label: 'Last Name', name: 'lastName', type: 'text', required: true },
    { label: 'Contact Email', name: 'email', type: 'email', required: true },
    { label: 'Phone Number', name: 'phoneNumber', type: 'tel', required: true },
    { label: 'LinkedIn Profile URL', name: 'linkedinURL', type: 'url', required: true },
    { label: 'Resume', name: 'resume', type: 'file', accept: '.pdf,.doc,.docx', required: true },
    { label: 'Volunteer Experience', name: 'volunteerExperience', type: 'textarea', required: true },
    { label: 'Question 1', name: 'volunteerQ1', type: 'textarea', required: true },
    { label: 'Question 2', name: 'volunteerQ2', type: 'textarea', required: true },
    { label: 'Question 3', name: 'volunteerQ3', type: 'textarea', required: true },
    { label: 'Question 4', name: 'volunteerQ4', type: 'textarea', required: true },
    { label: 'Question 5', name: 'volunteerQ5', type: 'textarea', required: true },
  ],
};

const MainApplication = ({ defaultApplicationType = 'students' }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [applicationType, setApplicationType] = useState(defaultApplicationType);
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleApplicationTypeChange = (e) => {
    setApplicationType(e.target.value);
    setFormData({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    const url = `https://api.propel2excel.com:5000/api/${applicationType}`;
    fetch(url, {
      method: 'POST',
      body: data,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(() => {
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('There was an issue submitting your application. Please try again.');
      });
  };

  const handleJsonSubmitWithTestData = (e) => {
    e.preventDefault();
    
    const testData = {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        nameofInstitution: "Example University",
        phoneNumber: "1234567890",
        linkedinURL: "http://linkedin.com/in/johndoe",
        resume: "Link to resume",
        currentGPA: "3.5",
        internshipExperience: "Internship details",
        top3Companies: "Company1, Company2, Company3",
        studentQ1: "Answer to Q1",
        studentQ2: "Answer to Q2",
        studentQ3: "Answer to Q3",
        studentQ4: "Answer to Q4",
        studentQ5: "Answer to Q5"
    };

    console.log('Test data being submitted as JSON:', JSON.stringify(testData, null, 2));

    const url = `http://api.propel2excel.com:5000/api/${applicationType}`;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(() => {
      setIsSubmitted(true);
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('There was an issue submitting your application. Please try again.');
    });
  };

  const checkHealth = () => {
    fetch('/api/health')
      .then((response) => response.json())
      .then((data) => {
        alert(`API Health: ${JSON.stringify(data)}`);
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('API is not reachable.');
      });
  };

  const renderFields = () => {
    return formFields[applicationType].map(({ label, name, type, accept, required }) => (
      <div className="form-group" key={name}>
        <label>{label}</label>
        {type === 'textarea' ? (
          <textarea name={name} required={required} onChange={handleInputChange} />
        ) : (
          <input type={type} name={name} accept={accept} required={required} onChange={handleInputChange} />
        )}
      </div>
    ));
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
            <p>Please fill out the form below to the best of your ability.</p>
          </div>
          <div className="form">
            <select value={applicationType} onChange={handleApplicationTypeChange}>
              <option value="students">Student</option>
              <option value="companies">Company</option>
              <option value="volunteers">Volunteer</option>
            </select>
            <form className="application-form" onSubmit={handleSubmit}>
              {renderFields()}
              <button type="submit">Submit Application</button>
            </form>
            {/* <button onClick={handleJsonSubmitWithTestData}>Submit Pre-defined Test Data as JSON</button>
            <button onClick={checkHealth}>Check API Health</button> */}
          </div>
        </>
      )}
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default MainApplication;
