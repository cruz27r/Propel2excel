import React from 'react';
import './Tips.css';

const Tips = () => {
  const tipSections = [
    {
      title: 'Find a Job',
      links: [
        { name: 'Navigating Job Boards', description: 'Tips on using job boards effectively.' },
        { name: 'Networking Online', description: 'How to expand your professional network remotely.' },
        { name: 'Leveraging LinkedIn', description: 'Using LinkedIn to its full potential in job hunting.' },
      ],
    },
    {
      title: 'Career Development',
      links: [
        { name: 'Building a Professional Network', description: 'Strategies for expanding your professional connections.' },
        { name: 'Skills Development', description: 'How to identify and develop in-demand skills.' },
        { name: 'Navigating Career Transitions', description: 'Advice for smoothly changing industries or roles.' },
      ],
    },
    {
      title: 'Working Remotely',
      links: [
        { name: 'Remote Work Best Practices', description: 'Tips for productivity and work-life balance when working from home.' },
        { name: 'Essential Tools for Remote Work', description: 'A review of the best tools for remote collaboration.' },
        { name: 'Finding Remote Work Opportunities', description: 'Where to look for and how to land remote positions.' },
      ],
    },
    {
      title: 'Interview Preparation',
      links: [
        { name: 'Common Interview Questions', description: 'Preparing for the most frequently asked interview questions.' },
        { name: 'Interview Etiquette', description: 'The dos and don’ts during an interview.' },
        { name: 'Virtual Interview Techniques', description: 'How to make a great impression in a virtual interview setting.' },
      ],
    },
    {
      title: 'Applicant Insights',
      links: [
        { name: 'Understanding the Hiring Process', description: 'An inside look at the recruitment cycle from application to offer.' },
        { name: 'Company Culture and Fit', description: 'How to evaluate a company’s culture for fit before you apply.' },
        { name: 'Salary Negotiation Strategies', description: 'Tactics to help you negotiate the salary you deserve.' },
      ],
    },
    {
      title: 'Remote Job Resources',
      links: [
        { name: 'Top Sites for Remote Job Searches', description: 'A curated list of websites to find remote work.' },
        { name: 'Preparing for a Remote Career', description: 'Skills and tools you’ll need to thrive remotely.' },
        { name: 'Succeeding in Remote Teams', description: 'How to be an effective team member when working remotely.' },
      ],
    },
  ];

  return (
    <div className="tips-page">
      <div className="intro-banner">
        <h1>Career Tips and Resources</h1>
        <p>Discover guides and strategies to boost your career path.</p>
      </div>
      {tipSections.map((section, index) => (
        <div key={index} className="tips-section">
          <h2 className="section-title">{section.title}</h2>
          <div className="link-container">
            {section.links.map((link, linkIndex) => (
              <div key={linkIndex} className="resource-link">
                <div className="image-placeholder">{link.name}</div>
                <h3 className="link-title">{link.name}</h3>
                <p className="link-description">{link.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tips;
