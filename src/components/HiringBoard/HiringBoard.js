import React, { useState, useEffect } from 'react';
import './HiringBoard.css';

const HiringBoard = () => {
  const [activeCategory, setActiveCategory] = useState('Tech');
  const [jobCategories, setJobCategories] = useState({ Tech: [], Banking: [], Consulting: [] });

  // Fetch job data when the component mounts
  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch('http://localhost:5000/fetch_jobs');
      const data = await response.json();
      setJobCategories(data); // Assuming the backend sends data in the correct format
    };

    fetchJobs();
  }, []);

  const renderJobHeader = () => (
    <div className="job-listing job-listing-header">
      <div className="job-company">Company</div>
      <div className="job-title">Title</div>
      <div className="job-status">Status</div>
      <div className="job-rate">Rate</div>
      <div className="job-location">Location</div>
      <div className="job-apply">Apply</div>
    </div>
  );

  const renderJobs = (jobs) => (
    <>
      {renderJobHeader()}
      {jobs.map((job, index) => (
        <div key={index} className="job-listing">
          <div className="job-company">{job.company}</div>
          <div className="job-title">{job.title}</div>
          <div className={`job-status ${job.status.replace(/ /g, '-').toLowerCase()}`}>
            {job.status}
          </div>
          <div className="job-rate">{job.rate}</div>
          <div className="job-location">{job.location}</div>
          <a href={job.applyLink} target="_blank" rel="noopener noreferrer">
            <button className="apply-button">Apply</button>
          </a>
        </div>
      ))}
    </>
  );

  return (
    <div className="hiring-board">
      <div className="category-buttons">
        <button onClick={() => setActiveCategory('Tech')} className={activeCategory === 'Tech' ? 'active' : ''}>Tech</button>
        <button onClick={() => setActiveCategory('Banking')} className={activeCategory === 'Banking' ? 'active' : ''}>Banking</button>
        <button onClick={() => setActiveCategory('Consulting')} className={activeCategory === 'Consulting' ? 'active' : ''}>Consulting</button>
      </div>
      <div className="job-category-section">
        <h2 className="category-title">{activeCategory} Jobs</h2>
        <div className="job-listings">
          {renderJobs(jobCategories[activeCategory])}
        </div>
      </div>
    </div>
  );
};

export default HiringBoard;
