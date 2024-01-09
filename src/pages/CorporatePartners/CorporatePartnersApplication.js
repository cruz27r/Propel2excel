import React from 'react';
import './CorporatePartnersApplication.css';

function CorporatePartnersApplication() {
  return (
    <div className="application-container">
      <h1>Corporate Partner Application</h1>
      <form>
        <label>Name of Organization:</label>
        <input type="text" placeholder="Enter Name" />
        
        <label>Description of Organization:</label>
        <textarea placeholder="Enter Description"></textarea>
        
        <label>Contact Email:</label>
        <input type="email" placeholder="Enter Email" />

        <label>Website:</label>
        <input type="url" placeholder="Enter Website URL" />

        <label>Type of Partnership:</label>
        <select>
          <option>Strategic Partnership</option>
          <option>Technology Partnership</option>
          <option>Research and Development</option>
        </select>

        <label>Proposed Collaboration Ideas:</label>
        <textarea placeholder="Describe your ideas"></textarea>

        <label>Additional Comments:</label>
        <textarea placeholder="Any additional information"></textarea>

        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}

export default CorporatePartnersApplication;
