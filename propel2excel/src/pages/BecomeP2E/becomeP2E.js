import React, { useState } from 'react';
import './becomeP2E.css';

function BecomeP2EFellow() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    questions: Array(9).fill(''),
    resume: null,
    linkedin: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the submission of the form data, probably to a backend server
    console.log(formData);
    // Redirect to PayPal payment or open PayPal payment modal
  };

  return (
    <div className="become-p2e-container">
      <h1>Become a P2E Fellow</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>

        {/* Map through each question */}
        {formData.questions.map((_, index) => (
          <div className="form-group" key={index}>
            <label htmlFor={`question-${index + 1}`}>Question {index + 1}:</label>
            <input type="text" id={`question-${index + 1}`} name={`question-${index + 1}`} value={formData.questions[index]} onChange={(e) => {
              const updatedQuestions = formData.questions.map((q, qIndex) => qIndex === index ? e.target.value : q);
              setFormData({ ...formData, questions: updatedQuestions });
            }} required />
          </div>
        ))}

        <div className="form-group">
          <label htmlFor="resume-upload">Upload Resume:</label>
          <input type="file" id="resume-upload" name="resume-upload" onChange={handleFileChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="linkedin">LinkedIn Profile:</label>
          <input type="text" id="linkedin" name="linkedin" value={formData.linkedin} onChange={handleInputChange} required />
        </div>

        <div className="form-group submit-section">
          <button type="submit" className="submit-btn">Submit Application</button>
        </div>
      </form>
    </div>
  );
}

export default BecomeP2EFellow;
