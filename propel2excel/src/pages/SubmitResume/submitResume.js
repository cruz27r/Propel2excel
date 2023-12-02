import React, { useState } from 'react';
import './submitResume.css';

function SubmitResume() {
  const [resumeFile, setResumeFile] = useState(null);

  const handleFileChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('resume', resumeFile);

    try {
      const response = await fetch('http://localhost:5000/api/submit/resume', {
        method: 'POST',
        body: data,
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
    <div className="submit-resume-container">
      <h1>Submit Your Resume</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="resume-upload">Upload Resume:</label>
          <input type="file" id="resume-upload" name="resume-upload" onChange={handleFileChange} required />
        </div>

        <div className="form-group submit-section">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default SubmitResume;
