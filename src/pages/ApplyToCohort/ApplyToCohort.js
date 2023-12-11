import React, { useState } from 'react';
import './ApplyToCohort.css';

function ApplyToCohort() {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('linkedin', formData.linkedin);
    formData.questions.forEach((answer, index) => {
      data.append(`question-${index + 1}`, answer);
    });
    if (formData.resume) {
      data.append('resume', formData.resume);
    }

    try {
      const response = await fetch('http://localhost:5000/api/fellow-application', {
        method: 'POST',
        body: data,
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
    }
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
        {formData.questions.map((question, index) => (
          <div className="form-group" key={index}>
            <label htmlFor={`question-${index + 1}`}>Question {index + 1}:</label>
            <input type="text" id={`question-${index + 1}`} name={`question-${index + 1}`} value={question} onChange={(e) => {
              const newQuestions = formData.questions.map((q, qIndex) => qIndex === index ? e.target.value : q);
              setFormData({ ...formData, questions: newQuestions });
            }} required />
          </div>
        ))}
        <div className="form-group">
          <label htmlFor="resume">Resume:</label>
          <input type="file" id="resume" name="resume" onChange={handleFileChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="linkedin">LinkedIn Profile:</label>
          <input type="text" id="linkedin" name="linkedin" value={formData.linkedin} onChange={handleInputChange} required />
        </div>
        <button type="submit" className="submit-btn">Submit Application</button>
      </form>
    </div>
  );
}

export default ApplyToCohort;
