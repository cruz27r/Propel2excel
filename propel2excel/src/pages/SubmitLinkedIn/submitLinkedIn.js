import React from 'react';
import './submitLinkedIn.css';

function SubmitLinkedIn() {
  return (
    <div className="submit-linkedin-container">
      <h1>Submit Your LinkedIn Profile</h1>
      <p>Learn why a LinkedIn profile is essential for your professional journey.</p>
      
      {/* Interactive tips and information on LinkedIn importance */}
      
      <form>
        <div className="form-group">
          <label htmlFor="linkedin-url">LinkedIn Profile URL:</label>
          <input type="url" id="linkedin-url" name="linkedin-url" placeholder="https://www.linkedin.com/in/yourprofile" />
        </div>
        
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default SubmitLinkedIn;
