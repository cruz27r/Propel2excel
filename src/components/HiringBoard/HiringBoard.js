import React, { useState } from 'react';
import './HiringBoard.css';

const HiringBoard = () => {
  const [activeCategory, setActiveCategory] = useState('Tech');

  const jobCategories = {
    Tech: [
      { title: 'JavaScript Developer', status: 'ONGOING', rate: 'USD 45 - 65/h', location: 'Remote' },
      { title: 'Python Developer', status: 'Gathering applicants', rate: 'USD 50 - 70/h', location: 'Remote' },
      { title: 'Mobile Developer', status: 'Closed', rate: 'USD 55 - 75/h', location: 'Remote' },
      { title: 'DevOps Engineer', status: 'ONGOING', rate: 'USD 60 - 80/h', location: 'Remote' },
      { title: 'UI/UX Designer', status: 'Gathering applicants', rate: 'USD 65 - 85/h', location: 'Remote' },
      { title: 'Data Scientist', status: 'Closed', rate: 'USD 70 - 90/h', location: 'Remote' },
      { title: 'Machine Learning Engineer', status: 'ONGOING', rate: 'USD 75 - 95/h', location: 'Remote' },
      { title: 'Security Analyst', status: 'Gathering applicants', rate: 'USD 80 - 100/h', location: 'Remote' },
      { title: 'Systems Architect', status: 'Closed', rate: 'USD 85 - 105/h', location: 'Remote' },
      { title: 'Cloud Specialist', status: 'ONGOING', rate: 'USD 90 - 110/h', location: 'Remote' },
    ],
    Banking: [
      { title: 'Financial Analyst', status: 'ONGOING', rate: 'USD 50 - 70/h', location: 'New York, USA' },
      { title: 'Investment Strategist', status: 'Gathering applicants', rate: 'USD 60 - 80/h', location: 'London, UK' },
      { title: 'Compliance Officer', status: 'Closed', rate: 'USD 55 - 75/h', location: 'Remote' },
      { title: 'Loan Officer', status: 'ONGOING', rate: 'USD 70 - 90/h', location: 'Remote' },
      { title: 'Risk Manager', status: 'Gathering applicants', rate: 'USD 75 - 95/h', location: 'Remote' },
      { title: 'Equity Trader', status: 'Closed', rate: 'USD 80 - 100/h', location: 'Remote' },
      { title: 'Credit Analyst', status: 'ONGOING', rate: 'USD 65 - 85/h', location: 'Remote' },
      { title: 'Wealth Advisor', status: 'Gathering applicants', rate: 'USD 85 - 105/h', location: 'Remote' },
      { title: 'Portfolio Manager', status: 'Closed', rate: 'USD 90 - 110/h', location: 'Remote' },
      { title: 'Mergers & Acquisitions Analyst', status: 'ONGOING', rate: 'USD 95 - 115/h', location: 'Remote' },
    ],
    Consulting: [
      { title: 'Management Consultant', status: 'ONGOING', rate: 'USD 60 - 80/h', location: 'Remote' },
      { title: 'Strategy Consultant', status: 'Gathering applicants', rate: 'USD 65 - 85/h', location: 'Remote' },
      { title: 'HR Consultant', status: 'Closed', rate: 'USD 70 - 90/h', location: 'Remote' },
      { title: 'Financial Advisor', status: 'ONGOING', rate: 'USD 75 - 95/h', location: 'Remote' },
      { title: 'IT Consultant', status: 'Gathering applicants', rate: 'USD 80 - 100/h', location: 'Remote' },
      { title: 'Operations Consultant', status: 'Closed', rate: 'USD 85 - 105/h', location: 'Remote' },
      { title: 'Marketing Consultant', status: 'ONGOING', rate: 'USD 90 - 110/h', location: 'Remote' },
      { title: 'Legal Consultant', status: 'Gathering applicants', rate: 'USD 95 - 115/h', location: 'Remote' },
      { title: 'Environmental Consultant', status: 'Closed', rate: 'USD 100 - 120/h', location: 'Remote' },
      { title: 'Public Relations Consultant', status: 'ONGOING', rate: 'USD 105 - 125/h', location: 'Remote' },
    ]
  };

  const renderJobHeader = () => (
    <div className="job-listing job-listing-header">
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
          <div className="job-title">{job.title}</div>
          <div className={`job-status ${job.status.replace(/ /g, '-').toLowerCase()}`}>
            {job.status}
          </div>
          <div className="job-rate">{job.rate}</div>
          <div className="job-location">{job.location}</div>
          <button className="apply-button">Apply</button>
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
