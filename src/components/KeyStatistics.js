import React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import './KeyStatistics.css';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28FCF', '#FF6361', '#5770B5', '#FFA600'];

const companySuccessData = [
  { name: 'Success', value: 2 },
  { name: 'Other', value: 98 },
];

const conversionData = [
  { name: 'Full-time', value: 60 },
  { name: 'Internship', value: 40 },
];

const intervieweesData = [
  { name: 'Provided', value: 100 },
  { name: 'Not Provided', value: 0 },
];

const KeyStatistics = () => {
  return (
    <div className='key-stats-section'>
      <h1 className="section-title">Key Statistics</h1>
      <div className="charts-container">

        <div className="chart-wrapper">
          <h3 className="chart-title">Program Acceptance Rate</h3>
          <div className="company-success-status">
            <div className="large-percentage-icon">
              <span style={{ fontSize: '48px', color: '#0088FE' }}>
                {companySuccessData[0].value}%
              </span>
            </div>
          </div>
        </div>

        <div className="chart-wrapper">
          <h3 className="chart-title">Employment Offers Through P2E</h3>
          <BarChart width={400} height={300} data={conversionData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#82ca9d">
              {conversionData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={index === 0 ? COLORS[0] : COLORS[6]} />
              ))}
            </Bar>
          </BarChart>
        </div>

        <div className="chart-wrapper">
          <h3 className="chart-title">Job Offer Placement Rate</h3>
          <div className="interviewees-status">
            <div className="large-percentage-icon">
              <span style={{ fontSize: '48px', color: '#0088FE' }}>100%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="modern-stats">
        <div className="stats-grid">
          <div className="stat">
            <i className="fas fa-user-graduate"></i>
            <h3>250+</h3>
            <p>Students Enrolled</p>
          </div>
          <div className="stat">
            <i className="fas fa-university"></i>
            <h3>120+</h3>
            <p>Universities including 30 HBCUs</p>
          </div>
          <div className="stat">
            <i className="fas fa-chalkboard-teacher"></i>
            <h3>8,000+</h3>
            <p>Industry Coaches</p>
          </div>
          <div className="stat">
            <i className="fas fa-briefcase"></i>
            <h3>5,000+</h3>
            <p>Applications Projected for October</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyStatistics;
