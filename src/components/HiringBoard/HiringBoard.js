import React, { useState } from 'react';
import './HiringBoard.css';

const HiringBoard = () => {
  const [activeCategory, setActiveCategory] = useState('Tech');

  // const jobCategories = {
  //   Tech: [
  //     { company: 'Amazon', title: 'Software Development Engineer II', status: 'ONGOING', rate: 'USD 115,000 - 223,600/year', location: 'Seattle, WA, USA', applyLink: 'https://www.amazon.jobs/en/jobs/2601261/software-development-engineer-ii' },
  //     { company: 'Amazon', title: 'Software Development Engineer - EC2 Core Platform', status: 'ONGOING', rate: 'Competitive', location: 'Seattle, WA, USA', applyLink: 'https://www.amazon.jobs/en/jobs/2640507/software-development-engineer-ii' },
  //     { company: 'Apple', title: 'Software Engineer', status: 'ONGOING', rate: 'Competitive', location: 'Cupertino, CA, USA', applyLink: 'https://jobs.apple.com/en-us/details/200296398/software-engineer' },
  //     { company: 'Google', title: 'Software Engineer', status: 'ONGOING', rate: 'Competitive', location: 'Mountain View, CA, USA', applyLink: 'https://careers.google.com/jobs/results/108872912096191238-software-engineer' },
  //     { company: 'Meta', title: 'Software Development Engineer', status: 'ONGOING', rate: 'Competitive', location: 'Menlo Park, CA, USA', applyLink: 'https://www.metacareers.com/jobs/843857/software-engineer' },
  //     { company: 'Microsoft', title: 'Software Development Engineer', status: 'ONGOING', rate: 'Competitive', location: 'Redmond, WA, USA', applyLink: 'https://careers.microsoft.com/us/en/job/1136341/Software-Development-Engineer' },
  //     { company: 'Netflix', title: 'Software Engineer', status: 'ONGOING', rate: 'Competitive', location: 'Los Gatos, CA, USA', applyLink: 'https://jobs.netflix.com/positions/2444842' },
  //     { company: 'IBM', title: 'Software Engineer', status: 'ONGOING', rate: 'Competitive', location: 'Armonk, NY, USA', applyLink: 'https://www.ibm.com/employment/software-engineer' },
  //     { company: 'Salesforce', title: 'Software Engineer', status: 'ONGOING', rate: 'Competitive', location: 'San Francisco, CA, USA', applyLink: 'https://careers.salesforce.com/en/jobs/843749/software-engineer' },
  //     { company: 'Slack', title: 'Software Engineer', status: 'ONGOING', rate: 'Competitive', location: 'San Francisco, CA, USA', applyLink: 'https://slack.com/careers/software-engineer' },
  //     { company: 'Amazon', title: 'Software Development Engineer, Amazon Games', status: 'ONGOING', rate: 'Competitive', location: 'Irvine, CA, USA', applyLink: 'https://www.amazon.jobs/en/jobs/2643237/software-development-engineer-amazon-games' },
  //     { company: 'Amazon', title: 'Software Development Engineer, AWS', status: 'ONGOING', rate: 'Competitive', location: 'Seattle, WA, USA', applyLink: 'https://www.amazon.jobs/en/jobs/2536102/software-development-engineer-aws' },
  //     { company: 'Microsoft', title: 'Senior Software Engineer - Azure', status: 'ONGOING', rate: 'Competitive', location: 'Redmond, WA, USA', applyLink: 'https://careers.microsoft.com/us/en/job/245465/senior-software-engineer-azure' },
  //     { company: 'Google', title: 'Software Engineer - Google Cloud', status: 'ONGOING', rate: 'Competitive', location: 'Mountain View, CA, USA', applyLink: 'https://careers.google.com/jobs/results/753675/software-engineer-google-cloud' },
  //     { company: 'Meta', title: 'Software Engineer - Meta AI', status: 'ONGOING', rate: 'Competitive', location: 'Menlo Park, CA, USA', applyLink: 'https://www.metacareers.com/v2/jobs/362847/software-engineer-ai' }
  //   ],
  //   Banking: [
  //     { company: 'Goldman Sachs', title: 'Financial Analyst', status: 'ONGOING', rate: 'Competitive', location: 'New York, NY, USA', applyLink: 'https://www.goldmansachs.com/careers/apply/' },
  //     { company: 'JPMorgan Chase', title: 'Investment Strategist', status: 'Gathering applicants', rate: 'Competitive', location: 'London, UK', applyLink: 'https://careers.jpmorgan.com/us/en/job/210273568/investment-strategist' },
  //     { company: 'Morgan Stanley', title: 'Compliance Officer', status: 'ONGOING', rate: 'Competitive', location: 'Remote', applyLink: 'https://www.morganstanley.com/careers' },
  //     { company: 'Citibank', title: 'Loan Officer', status: 'ONGOING', rate: 'Competitive', location: 'Remote', applyLink: 'https://jobs.citi.com/job/new-york/loan-officer/287/1349428096' },
  //     { company: 'UBS', title: 'Risk Manager', status: 'Gathering applicants', rate: 'Competitive', location: 'Remote', applyLink: 'https://www.ubs.com/global/en/careers.html' },
  //     { company: 'BlackRock', title: 'Equity Trader', status: 'ONGOING', rate: 'Competitive', location: 'Remote', applyLink: 'https://careers.blackrock.com/' },
  //     { company: 'Fidelity', title: 'Credit Analyst', status: 'ONGOING', rate: 'Competitive', location: 'Remote', applyLink: 'https://jobs.fidelity.com/' },
  //     { company: 'Eastern Bank', title: 'Wealth Advisor', status: 'Gathering applicants', rate: 'Competitive', location: 'Remote', applyLink: 'https://www.easternbank.com/careers' },
  //     { company: 'Wells Fargo', title: 'Portfolio Manager', status: 'ONGOING', rate: 'Competitive', location: 'Remote', applyLink: 'https://www.wellsfargo.com/about/careers/' },
  //     { company: 'US Bank', title: 'Mergers & Acquisitions Analyst', status: 'ONGOING', rate: 'Competitive', location: 'Remote', applyLink: 'https://www.usbank.com/careers' },
  //     { company: 'Goldman Sachs', title: 'Risk Analyst', status: 'ONGOING', rate: 'Competitive', location: 'New York, NY, USA', applyLink: 'https://www.goldmansachs.com/careers/apply/' },
  //     { company: 'JPMorgan Chase', title: 'Financial Advisor', status: 'ONGOING', rate: 'Competitive', location: 'New York, NY, USA', applyLink: 'https://careers.jpmorgan.com/us/en/job/210272907/financial-advisor' },
  //     { company: 'Morgan Stanley', title: 'Investment Banker', status: 'ONGOING', rate: 'Competitive', location: 'New York, NY, USA', applyLink: 'https://www.morganstanley.com/careers' },
  //     { company: 'Citibank', title: 'Credit Risk Manager', status: 'ONGOING', rate: 'Competitive', location: 'New York, NY, USA', applyLink: 'https://jobs.citi.com/' },
  //     { company: 'UBS', title: 'Wealth Management Associate', status: 'ONGOING', rate: 'Competitive', location: 'Remote', applyLink: 'https://www.ubs.com/global/en/careers.html' }
  //   ],
  //   Consulting: [
  //     { company: 'McKinsey & Company', title: 'Management Consultant', status: 'ONGOING', rate: 'Competitive', location: 'Remote', applyLink: 'https://www.mckinsey.com/careers' },
  //     { company: 'Bain', title: 'Strategy Consultant', status: 'Gathering applicants', rate: 'Competitive', location: 'Remote', applyLink: 'https://www.bain.com/careers/' },
  //     { company: 'BCG', title: 'HR Consultant', status: 'ONGOING', rate: 'Competitive', location: 'Remote', applyLink: 'https://www.bcg.com/careers' },
  //     { company: 'PwC', title: 'Financial Advisor', status: 'ONGOING', rate: 'Competitive', location: 'Remote', applyLink: 'https://www.pwc.com/careers' },
  //     { company: 'Deloitte', title: 'IT Consultant', status: 'ONGOING', rate: 'Competitive', location: 'Remote', applyLink: 'https://jobs2.deloitte.com/global/en/' },
  //     { company: 'EY', title: 'Operations Consultant', status: 'ONGOING', rate: 'Competitive', location: 'Remote', applyLink: 'https://www.ey.com/en_gl/careers' },
  //     { company: 'Accenture', title: 'Management Consultant', status: 'ONGOING', rate: 'Competitive', location: 'Remote', applyLink: 'https://www.accenture.com/us-en/careers' },
  //     { company: 'KPMG', title: 'Strategy Consultant', status: 'Gathering applicants', rate: 'Competitive', location: 'Remote', applyLink: 'https://home.kpmg/xx/en/home/careers.html' },
  //     { company: 'Booz Allen Hamilton', title: 'HR Consultant', status: 'ONGOING', rate: 'Competitive', location: 'Remote', applyLink: 'https://www.boozallen.com/careers.html' },
  //     { company: 'Mercer', title: 'Financial Advisor', status: 'ONGOING', rate: 'Competitive', location: 'Remote', applyLink: 'https://www.mercer.com/careers.html' },
  //     { company: 'Oliver Wyman', title: 'IT Consultant', status: 'ONGOING', rate: 'Competitive', location: 'Remote', applyLink: 'https://www.oliverwyman.com/careers.html' },
  //     { company: 'Roland Berger', title: 'Operations Consultant', status: 'ONGOING', rate: 'Competitive', location: 'Remote', applyLink: 'https://www.rolandberger.com/en/Join/Jobs.html' },
  //     { company: 'A.T. Kearney', title: 'Management Consultant', status: 'ONGOING', rate: 'Competitive', location: 'Remote', applyLink: 'https://www.kearney.com/careers' },
  //     { company: 'LEK Consulting', title: 'Strategy Consultant', status: 'Gathering applicants', rate: 'Competitive', location: 'Remote', applyLink: 'https://www.lek.com/join-lek' },
  //     { company: 'AlixPartners', title: 'HR Consultant', status: 'ONGOING', rate: 'Competitive', location: 'Remote', applyLink: 'https://www.alixpartners.com/careers/' }
  //   ]
  // };
  fetch('/get-jobs')
  .then(response => response.json())
  .then(data => {
    const jobCategories = {
      Consulting: data.Consulting,
      Banking: data.Banking,
      Tech: data.Tech
    };

    // Update the DOM or state with `jobCategories` to display jobs
    console.log(jobCategories);
  })
  .catch(error => console.error('Error fetching jobs:', error));

  // const jobCategories = {Consulting: [],  Banking: [], Tech: [] }

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
