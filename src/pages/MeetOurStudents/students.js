import React from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';
import speakerImage1 from '../../assets/images/headshot1.jpg';
import speakerImage2 from '../../assets/images/headshot2.jpg';
import speakerImage3 from '../../assets/images/headshot3.jpg';

const studentsData = [
  { name: 'John Doe', school: 'Harvard', track: 'Tech', job: 'Software Engineer', image: speakerImage1 },
  { name: 'Jane Smith', school: 'MIT', track: 'Consulting', job: 'Management Consultant', image: speakerImage2 },
  { name: 'Alice Johnson', school: 'Stanford', track: 'Banking', job: 'Investment Banker', image: speakerImage3 },
  { name: 'Michael Brown', school: 'Yale', track: 'Tech', job: 'Data Scientist', image: speakerImage1 },
  { name: 'Sarah Johnson', school: 'Princeton', track: 'Consulting', job: 'Strategy Consultant', image: speakerImage2 },
  { name: 'David Lee', school: 'Columbia', track: 'Banking', job: 'Financial Analyst', image: speakerImage3 },
  { name: 'Emily Wang', school: 'Brown', track: 'Tech', job: 'Software Developer', image: speakerImage1 },
  { name: 'Mark Davis', school: 'Dartmouth', track: 'Consulting', job: 'Business Analyst', image: speakerImage2 },
  { name: 'Olivia White', school: 'Cornell', track: 'Banking', job: 'Investment Analyst', image: speakerImage3 },
  { name: 'James Wilson', school: 'UPenn', track: 'Tech', job: 'IT Manager', image: speakerImage1 },
  { name: 'Emma Taylor', school: 'UChicago', track: 'Consulting', job: 'Management Analyst', image: speakerImage2 },
  { name: 'William Clark', school: 'Northwestern', track: 'Banking', job: 'Financial Planner', image: speakerImage3 },
  { name: 'Sophia Martinez', school: 'UC Berkeley', track: 'Tech', job: 'Web Developer', image: speakerImage1 },
  { name: 'Daniel Rodriguez', school: 'UCLA', track: 'Consulting', job: 'Business Consultant', image: speakerImage2 },
  { name: 'Ava Adams', school: 'USC', track: 'Banking', job: 'Investment Advisor', image: speakerImage3 },
];

const data = [
  { name: 'Tech', value: studentsData.filter(student => student.track === 'Tech').length },
  { name: 'Consulting', value: studentsData.filter(student => student.track === 'Consulting').length },
  { name: 'Banking', value: studentsData.filter(student => student.track === 'Banking').length },
];

function StudentsPage() {
  return (
    <div className="students-page">
      <h1>Students are the Core of Propel2Excel</h1>
      <div className="student-grid">
        {studentsData.map((student, index) => (
          <div key={index} className="student-card">
            <img src={student.image} alt={`Student ${index + 1}`} />
            <h2>{student.name}</h2>
            <p>School: {student.school}</p>
            <p>Track: {student.track}</p>
            <p>Job: {student.job}</p>
          </div>
        ))}
      </div>
      <div className="chart-container">
        <PieChart width={400} height={400}>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
}

export default StudentsPage;
