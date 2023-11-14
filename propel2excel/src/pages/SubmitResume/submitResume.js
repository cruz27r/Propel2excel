import React from 'react';
import './submitResume.css';

function SubmitResume() {
  return (
    <div className="submit-resume-container">
      <h1>Submit Your Resume</h1>
      <form>
        <div className="form-group">
          <label htmlFor="resume-upload">Upload Resume:</label>
          <input type="file" id="resume-upload" name="resume-upload" accept=".pdf,.doc,.docx" />
        </div>
        
        <div className="form-group">
          <label htmlFor="introduction">Introduction:</label>
          <textarea id="introduction" name="introduction" placeholder="Tell us about yourself and the jobs you're interested in."></textarea>
        </div>
        
        {/* Additional form fields for job interests and details about the submitter */}
        
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default SubmitResume;
