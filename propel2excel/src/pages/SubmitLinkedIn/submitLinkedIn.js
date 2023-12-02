import React, { useState } from 'react';
import './submitLinkedIn.css';

function SubmitLinkedIn() {
  const [linkedinUrl, setLinkedinUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/linkedin-submission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ linkedinUrl }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
      // Handle success, maybe clear the form or show a success message
    } catch (error) {
      console.error('Submission failed', error);
      // Handle errors, show an error message
    }
  };

  return (
    <div className="submit-linkedin-container">
      <h1>Submit Your LinkedIn Profile</h1>
      <p>Learn why a LinkedIn profile is essential for your professional journey.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="linkedin-url">LinkedIn Profile URL:</label>
          <input type="url" id="linkedin-url" name="linkedin-url" value={linkedinUrl} onChange={(e) => setLinkedinUrl(e.target.value)} placeholder="https://www.linkedin.com/in/yourprofile" required />
        </div>

        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default SubmitLinkedIn;
