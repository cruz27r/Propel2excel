import React, { useState } from 'react';
import './becomeSponsor.css';

function BecomeSponsor() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    sponsorshipLevel: '', // Assuming there are predefined sponsorship levels
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the submission of the form data
    console.log(formData);
    // In a real-world app, you would likely send this data to a server
    alert('Thank you for your interest in becoming a sponsor!');
  };

  return (
    <div className="become-sponsor-container">
      <h1>Become a Sponsor</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="companyName">Company Name:</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="contactPerson">Contact Person:</label>
          <input
            type="text"
            id="contactPerson"
            name="contactPerson"
            value={formData.contactPerson}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="sponsorshipLevel">Sponsorship Level:</label>
          <select
            id="sponsorshipLevel"
            name="sponsorshipLevel"
            value={formData.sponsorshipLevel}
            onChange={handleInputChange}
            required
          >
            <option value="">--Please choose an option--</option>
            <option value="gold">Gold</option>
            <option value="silver">Silver</option>
            <option value="bronze">Bronze</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="form-group">
          <button type="submit" className="submit-btn">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default BecomeSponsor;
