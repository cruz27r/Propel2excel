import React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import './KeyStatistics.css';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28FCF', '#FF6361', '#5770B5', '#FFA600'];

const companySuccessData = [
  { name: 'Success', value: 80 },
  { name: 'Other', value: 20 },
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
    <div>
      <h1 className="section-title">Key Statistics</h1>
      <div className="charts-container">

        <div className="chart-wrapper">
          <h3 className="chart-title">Company Success Rate</h3>
          <div className="company-success-status">
            <div className="large-percentage-icon">
              <span style={{ fontSize: '48px', color: '#0088FE' }}>
                {companySuccessData[0].value}%
              </span>
            </div>
          </div>
        </div>

        <div className="chart-wrapper">
          <h3 className="chart-title">Employment Offers</h3>
          <BarChart width={400} height={300} data={conversionData} style={{ margin: '0 auto' }}>
            <CartesianGrid strokeDasharray="3 3" />
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
          <h3 className="chart-title">Interviewees Provided</h3>
          <div className="interviewees-status">
            <div className="large-percentage-icon">
              <span style={{ fontSize: '48px', color: '#0088FE' }}>100%</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default KeyStatistics;
