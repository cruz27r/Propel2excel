import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import './diverseTalentOverlay.css';

const studentsData = [
  { name: 'Evelyn Maliza', university: 'University at Albany', industry: 'Tech', linkedin: 'https://www.linkedin.com/in/evelyn-maliza-aa126b289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
  { name: 'Uzoamaka Ozo Udeze', university: 'Case Western Reserve University', industry: 'Consulting', linkedin: 'https://www.linkedin.com/in/uzoamakaozo-udeze?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
  { name: 'Kaden Liu', university: 'Cornell University', industry: 'Tech', linkedin: 'https://www.linkedin.com/in/liukaden?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
  { name: 'Ethan Weily', university: 'West Virginia University', industry: 'Consulting', linkedin: 'https://www.linkedin.com/in/ethan-weily-wvu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
  { name: 'Rafael Cruz Lagos', university: 'University of Massachusetts Boston', industry: 'Banking', linkedin: 'https://www.linkedin.com/in/rafaelcruzlagos?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
  { name: 'Glenys Yevi', university: 'University of Houston', industry: 'Tech', linkedin: 'https://www.linkedin.com/in/glenysyevi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
  { name: 'Zachary Shi', university: 'Undergraduate at Binghamton University', industry: 'Banking', linkedin: 'https://www.linkedin.com/in/zacharyshi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
  { name: 'Jose Manuel Cruz', university: 'University of Massachusetts Boston', industry: 'Tech', linkedin: 'https://www.linkedin.com/in/josemanuel-cruz1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
];

const placementData = [
  { name: 'Internships', value: 150 },
  { name: 'Jobs', value: 100 },
];

const COLORS = ['#0088FE', '#00C49F'];

const DiverseTalentOverlay = ({ onClose }) => {
  return (
    <div className="diverse-talent-overlay">
      <div className="diverse-talent-overlay-content">
        <button className="diverse-talent-close-button" onClick={onClose}>×</button>
        <h2>Diverse Talent</h2>
        <div className="overlay-body">
          <div className="student-list">
            {studentsData.map((student, index) => (
              <div key={index} className="student-profile">
                <p className="name"><a href={student.linkedin} target="_blank" rel="noopener noreferrer">{student.name}</a></p>
                <p className="university">{student.university}</p>
                <p className="industry">{student.industry}</p>
              </div>
            ))}
          </div>
          <div className="stats-section">
            <div className="chart">
              <h3>Placement Stats</h3>
              <PieChart width={200} height={200}>
                <Pie data={placementData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label>
                  {placementData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>
            <div className="chart">
              <h3>Interviews & Jobs</h3>
              <div className="stats-container">
                <div className="stat-item">
                  <div className="stat-value">300+</div>
                  <div className="stat-label">Interviews Provided</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiverseTalentOverlay;