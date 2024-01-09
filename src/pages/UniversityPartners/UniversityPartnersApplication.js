import React from 'react';
import '../UniversityPartners/UniversityPartnersApplication.css';

function universityPartnerApplication() {
  return (
    <div className="application-container">
      <h1>University Partner Application</h1>
      <form>
        <label>Name of Institution:</label>
        <input type="text" placeholder="Enter Institution Name" />

        <label>Description of Institution:</label>
        <textarea placeholder="Enter Description"></textarea>

        <label>Contact Email:</label>
        <input type="email" placeholder="Enter Email" />

        <label>Website:</label>
        <input type="url" placeholder="Enter Website URL" />

        <label>Type of Partnership:</label>
        <select>
          <option>Educational Collaboration</option>
          <option>Research Partnership</option>
          <option>Community Outreach</option>
          <option>Student Exchange Program</option>
        </select>

        <label>Areas of Interest:</label>
        <input type="text" placeholder="Specify Areas of Interest" />

        <label>Proposed Collaboration Ideas:</label>
        <textarea placeholder="Describe your ideas"></textarea>

        <label>Preferred Duration of Partnership:</label>
        <input type="text" placeholder="Enter Duration" />

        <label>Additional Comments:</label>
        <textarea placeholder="Any additional information"></textarea>

        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}

export default universityPartnerApplication;
