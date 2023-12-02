import React, { useState } from 'react';
import './becomeSponsor.css';

function BecomeSponsor() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    sponsorshipLevel: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/submit/sponsor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
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
    <div className="become-sponsor-container">
      <h1>Become a Sponsor</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="companyName">Company Name:</label>
          <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="contactPerson">Contact Person:</label>
          <input type="text" id="contactPerson" name="contactPerson" value={formData.contactPerson} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="sponsorshipLevel">Sponsorship Level:</label>
          <select id="sponsorshipLevel" name="sponsorshipLevel" value={formData.sponsorshipLevel} onChange={handleInputChange} required>
            <option value="">--Please choose an option--</option>
            <option value="gold">Gold</option>
            <option value="silver">Silver</option>
            <option value="bronze">Bronze</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default BecomeSponsor;
