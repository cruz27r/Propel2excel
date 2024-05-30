import React, { useState } from 'react';
import { PieChart, Pie, Tooltip, Cell, Legend } from 'recharts';
import './students.css';
import tableComputer from '../../assets/images/table-computers.jpg';

const requirements = [
  { requirement: 'Good Academic Standing', description: 'A GPA of 3.3 and above.' },
  { requirement: 'Leadership Positions', description: 'Preferred positions in clubs, sports, or projects that demonstrate leadership skills.' },
  { requirement: 'Internship Experience', description: 'Experience in top tech, consulting, or banking companies is a plus.' },
  { requirement: 'Business Certifications', description: 'Certifications such as CFA, CPA, or other relevant qualifications are advantageous.' },
  { requirement: 'Special Projects', description: 'Participation in significant academic or extracurricular projects.' },
  { requirement: 'Awards and Achievements', description: 'Recognition such as the Dr. Martin Luther King Jr. Award or other prestigious awards.' },
];

const placementsData = [
  { name: 'Bank of America', value: 5 },
  { name: 'Citi', value: 3 },
  { name: 'Goldman Sachs', value: 6 },
  { name: 'Microsoft', value: 20 },
  { name: 'Google', value: 13 },
  { name: 'Amazon', value: 10 },
  { name: 'McKinsey & Co.', value: 8 },
  { name: 'Mass General Hospital', value: 18 },
  { name: 'Others', value: 8 },
];

const studentProfileData = [
  { name: 'Senior', value: 25 },
  { name: 'Junior', value: 25 },
  { name: 'Sophomore', value: 25 },
  { name: 'Freshmen', value: 25 },
];

const studentsData = [
  {
    name: 'John Doe',
    image: 'https://via.placeholder.com/150',
    path: 'Tech',
    description: 'John is part of the Tech path and goes to Harvard. He is working towards a career as a Software Engineer among companies like Google and Microsoft.',
    gpa: 3.8,
    demographic: 'Male',
    university: 'Harvard',
    schoolyear: 'Senior',
    nationality: 'American',
    averagePlacement: 'Google',
  },
  {
    name: 'Jane Smith',
    image: 'https://via.placeholder.com/150',
    path: 'Consulting',
    description: 'Jane is part of the Consulting path and goes to Princeton. She is working towards a career as a Strategy Consultant among companies like Bain and Deloitte.',
    gpa: 3.9,
    demographic: 'Female',
    university: 'Princeton',
    schoolyear: 'Junior',
    nationality: 'American',
    averagePlacement: 'Bain',
  },
  {
    name: 'Emily Davis',
    image: 'https://via.placeholder.com/150',
    path: 'Tech',
    description: 'Emily is part of the Tech path and goes to MIT. She is working towards a career as a Data Scientist among companies like Amazon and Microsoft.',
    gpa: 3.7,
    demographic: 'Female',
    university: 'MIT',
    schoolyear: 'Senior',
    nationality: 'American',
    averagePlacement: 'Amazon',
  },
  {
    name: 'Michael Johnson',
    image: 'https://via.placeholder.com/150',
    path: 'Banking',
    description: 'Michael is part of the Banking path and goes to Stanford. He is working towards a career as a Financial Analyst among companies like Goldman Sachs and J.P. Morgan.',
    gpa: 3.8,
    demographic: 'Male',
    university: 'Stanford',
    schoolyear: 'Junior',
    nationality: 'American',
    averagePlacement: 'Goldman Sachs',
  },
  {
    name: 'Sarah Lee',
    image: 'https://via.placeholder.com/150',
    path: 'Consulting',
    description: 'Sarah is part of the Consulting path and goes to Yale. She is working towards a career as a Management Consultant among companies like McKinsey and BCG.',
    gpa: 3.9,
    demographic: 'Female',
    university: 'Yale',
    schoolyear: 'Senior',
    nationality: 'American',
    averagePlacement: 'McKinsey',
  },
  {
    name: 'David Brown',
    image: 'https://via.placeholder.com/150',
    path: 'Tech',
    description: 'David is part of the Tech path and goes to Columbia. He is working towards a career as a Software Engineer among companies like Google and Facebook.',
    gpa: 3.6,
    demographic: 'Male',
    university: 'Columbia',
    schoolyear: 'Junior',
    nationality: 'American',
    averagePlacement: 'Google',
  },
  {
    name: 'Jessica Wilson',
    image: 'https://via.placeholder.com/150',
    path: 'Banking',
    description: 'Jessica is part of the Banking path and goes to Dartmouth. She is working towards a career as an Investment Banker among companies like Citi and Morgan Stanley.',
    gpa: 3.7,
    demographic: 'Female',
    university: 'Dartmouth',
    schoolyear: 'Senior',
    nationality: 'American',
    averagePlacement: 'Citi',
  },
  {
    name: 'William Martinez',
    image: 'https://via.placeholder.com/150',
    path: 'Consulting',
    description: 'William is part of the Consulting path and goes to Brown. He is working towards a career as a Strategy Consultant among companies like Bain and Deloitte.',
    gpa: 3.8,
    demographic: 'Male',
    university: 'Brown',
    schoolyear: 'Junior',
    nationality: 'American',
    averagePlacement: 'Bain',
  },
];

const testimonials = [
  { name: 'IB Associate @ BOA', testimonial: 'I am incredibly grateful for this program and I know if other students had this opportunity they\'d feel the same way. I wish Propel2Excel existed sooner, I have already gotten so much value from it in my first financial state of the program like P2E extends to all. It has raised my competencies as well.' },
  { name: 'Analyst @ Capital One', testimonial: 'Propel2Excel\'s Buddy System provided me with the guidance and support I needed to secure a role at Capital One. The mentorship was invaluable.' },
  { name: 'IB Associate @ BOA', testimonial: 'I am incredibly grateful for this program and I know if other students had this opportunity they\'d feel the same way. I wish Propel2Excel existed sooner, I have already gotten so much value from it in my first financial state of the program like P2E extends to all. It has raised my competencies as well.' },
];

const data = [
  { name: 'Tech', value: studentsData.filter(student => student.path === 'Tech').length },
  { name: 'Consulting', value: studentsData.filter(student => student.path === 'Consulting').length },
  { name: 'Banking', value: studentsData.filter(student => student.path === 'Banking').length },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28FCF', '#FF6361', '#BC5090', '#FFA600'];

const StudentsPage = () => {
  const [selectedPath, setSelectedPath] = useState('Banking');

  const filteredStudents = selectedPath ? studentsData.filter(student => student.path === selectedPath) : studentsData;

  const handleFilter = (path) => {
    setSelectedPath(path);
  };

  return (
    <div className="students-page">
      <div className="intro-section">
        <div className="container">
          <h1>Students are the Core of Propel2Excel</h1>
        </div>
      </div>

      <div className="side-by-side-container">
        <div className="requirements-section">
          <h2>Requirements for Fellows</h2>
          <ul className="requirements-list">
            {requirements.map((req, index) => (
              <li key={index} className="requirement-item">
                <strong>{req.requirement}:</strong> {req.description}
              </li>
            ))}
          </ul>
        </div>
        <div className="meet-our-fellows-section">
          <h2>Meet Our Fellows</h2>
          <div className="student-grid">
            {studentsData.map((student, index) => (
              <div key={index} className="student-card">
                <img src={student.image} alt={`Student ${index + 1}`} className="student-image" />
                <div className="student-details">
                  <h3>{student.name}</h3>
                  <p>{student.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="chart-section">
        <div className="chart-wrapper">
          <h3 className="chart-title">P2E Placements</h3>
          <PieChart width={400} height={400}>
            <Pie data={placementsData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} fill="#8884d8" label>
              {placementsData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="custom-tooltip">
                    <p className="label">{`${payload[0].name} : ${payload[0].value}`}</p>
                  </div>
                );
              }
              return null;
            }} />
            <Legend />
          </PieChart>
        </div>
        <div className="chart-wrapper">
          <h3 className="chart-title">Student Profile</h3>
          <PieChart width={400} height={400}>
            <Pie data={studentProfileData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} fill="#82ca9d" label>
              {studentProfileData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="custom-tooltip">
                    <p className="label">{`${payload[0].name} : ${payload[0].value}`}</p>
                  </div>
                );
              }
              return null;
            }} />
            <Legend />
          </PieChart>
        </div>
      </div>

      <div className="testimonials-section">
        <h2>Student Testimonials</h2>
        <div className="testimonials-container">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <p>{testimonial.testimonial}</p>
              <p className="testimonial-author">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentsPage;
