import React from 'react';
import { useState } from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';
import './students.css';

import speakerImage1 from '../../assets/images/headshot1.jpg';
import speakerImage2 from '../../assets/images/headshot2.jpg';
import speakerImage3 from '../../assets/images/headshot3.jpg';

const studentsData = [
  {
    name: 'John Doe',
    image: speakerImage1,
    path: 'Tech',
    description: 'John is part of the Tech path and goes to Harvard. He is working towards a career as a Software Engineer among companies like Google and Microsoft.',
    gpa: 3.8,
    demographic: 'Male',
    university: 'Harvard',
    schoolyear: 'Senior',
    Nationality: 'American',
    averageplacement: 'Google',
  },
  {
    name: 'Michael Brown',
    image: speakerImage1,
    path: 'Tech',
    description: 'Michael is part of the Tech path and goes to Yale. He is working towards a career as a Data Scientist among companies like Facebook and Amazon.',
    gpa: 3.6,
    demographic: 'Male',
    university: 'Yale',
    schoolyear: 'Junior',
    Nationality: 'American',
    averageplacement: 'Facebook',
  },
  {
    name: 'Emily Wang',
    image: speakerImage1,
    path: 'Tech',
    description: 'Emily is part of the Tech path and goes to Brown. She is working towards a career as a Web Developer among companies like Apple and Netflix.',
    gpa: 3.9,
    demographic: 'Female',
    university: 'Brown',
    schoolyear: 'Senior',
    Nationality: 'American',
    averageplacement: 'Apple',
  },
  {
    name: 'Sarah Johnson',
    image: speakerImage2,
    path: 'Consulting',
    description: 'Sarah is part of the Consulting path and goes to Princeton. She is working towards a career as a Strategy Consultant among companies like Bain and Deloitte.',
    gpa: 3.7,
    demographic: 'Female',
    university: 'Princeton',
    schoolyear: 'Junior',
    Nationality: 'American',
    averageplacement: 'Bain',
  },
  {
    name: 'Mark Davis',
    image: speakerImage2,
    path: 'Consulting',
    description: 'Mark is part of the Consulting path and goes to Dartmouth. He is working towards a career as a Business Analyst among companies like Accenture and PwC.',
    gpa: 3.5,
    demographic: 'Male',
    university: 'Dartmouth',
    schoolyear: 'Senior',
    Nationality: 'American',
    averageplacement: 'Accenture',
  },
  {
    name: 'Alice Johnson',
    image: speakerImage3,
    path: 'Banking',
    description: 'Alice is part of the Banking path and goes to Stanford. She is working towards a career as an Investment Banker among companies like Goldman Sachs and J.P. Morgan.',
    gpa: 3.8,
    demographic: 'Female',
    university: 'Stanford',
    schoolyear: 'Junior',
    Nationality: 'American',
    averageplacement: 'Goldman Sachs',
  },
  {
    name: 'David Lee',
    image: speakerImage3,
    path: 'Banking',
    description: 'David is part of the Banking path and goes to Columbia. He is working towards a career as a Financial Analyst among companies like Morgan Stanley and Citigroup.',
    gpa: 3.6,
    demographic: 'Male',
    university: 'Columbia',
    schoolyear: 'Senior',
    Nationality: 'American',
    averageplacement: 'Morgan Stanley',
  },
  {
    name: 'Jane Smith',
    image: speakerImage2,
    path: 'Consulting',
    description: 'Jane is part of the Consulting path and goes to MIT. She is working towards a career as a Management Consultant among companies like McKinsey and BCG.',
    gpa: 3.9,
    demographic: 'Female',
    university: 'MIT',
    schoolyear: 'Senior',
    Nationality: 'American',
    averageplacement: 'McKinsey',
  },
  {
    name: 'Michael White',
    image: speakerImage1,
    path: 'Tech',
    description: 'Michael is part of the Tech path and goes to Stanford. He is working towards a career as a Software Engineer among companies like Google and Facebook.',
    gpa: 3.7,
    demographic: 'Male',
    university: 'Stanford',
    schoolyear: 'Junior',
    Nationality: 'American',
    averageplacement: 'Google',
  },
  {
    name: 'Jessica Brown',
    image: speakerImage2,
    path: 'Consulting',
    description: 'Jessica is part of the Consulting path and goes to Harvard. She is working towards a career as a Strategy Consultant among companies like Bain and McKinsey.',
    gpa: 3.6,
    demographic: 'Female',
    university: 'Harvard',
    schoolyear: 'Senior',
    Nationality: 'American',
    averageplacement: 'Bain',
  },
  {
    name: 'Brian Johnson',
    image: speakerImage3,
    path: 'Banking',
    description: 'Brian is part of the Banking path and goes to Yale. He is working towards a career as an Investment Banker among companies like Goldman Sachs and J.P. Morgan.',
    gpa: 3.8,
    demographic: 'Male',
    university: 'Yale',
    schoolyear: 'Junior',
    Nationality: 'American',
    averageplacement: 'Goldman Sachs',
  },
  {
    name: 'Brian Johnson',
    image: speakerImage3,
    path: 'Banking',
    description: 'Brian is part of the Banking path and goes to Yale. He is working towards a career as an Investment Banker among companies like Goldman Sachs and J.P. Morgan.',
    gpa: 3.8,
    demographic: 'Male',
    university: 'Yale',
    schoolyear: 'Junior',
    Nationality: 'American',
    averageplacement: 'Goldman Sachs',
  },
  {
    name: 'Michelle Lee',
    image: speakerImage1,
    path: 'Tech',
    description: 'Michelle is part of the Tech path and goes to MIT. She is working towards a career as a Data Scientist among companies like Amazon and Microsoft.',
    gpa: 3.5,
    demographic: 'Female',
    university: 'MIT',
    schoolyear: 'Senior',
    Nationality: 'American',
    averageplacement: 'Amazon',
  },
  {
    name: 'Andrew Davis',
    image: speakerImage2,
    path: 'Consulting',
    description: 'Andrew is part of the Consulting path and goes to Stanford. He is working towards a career as a Management Consultant among companies like McKinsey and BCG.',
    gpa: 3.9,
    demographic: 'Male',
    university: 'Stanford',
    schoolyear: 'Junior',
    Nationality: 'American',
    averageplacement: 'McKinsey',
  },
  {
    name: 'Sophia Wang',
    image: speakerImage3,
    path: 'Banking',
    description: 'Sophia is part of the Banking path and goes to Harvard. She is working towards a career as a Financial Analyst among companies like Morgan Stanley and Citigroup.',
    gpa: 3.7,
    demographic: 'Female',
    university: 'Harvard',
    schoolyear: 'Senior',
    Nationality: 'American',
    averageplacement: 'Morgan Stanley',
  },
];


const testimonials = [
  { name: 'John Doe', testimonial: 'John is a dedicated and talented individual. He always goes above and beyond to deliver exceptional results.' },
  { name: 'Jane Smith', testimonial: 'Jane is a natural leader with excellent problem-solving skills. She is a valuable asset to any team.' },
  { name: 'Alice Johnson', testimonial: 'Alice is a hardworking and detail-oriented individual. She is always willing to take on new challenges.' },
  { name: 'Michael Brown', testimonial: 'Michael is a highly skilled data scientist. His analytical skills and attention to detail make him a valuable team member.' },
  { name: 'Sarah Johnson', testimonial: 'Sarah is a strategic thinker with a strong analytical mind. She consistently delivers high-quality work.' },
  { name: 'David Lee', testimonial: 'David is a reliable and dedicated financial analyst. His expertise and insights have been invaluable to our team.' },
  { name: 'Emily Wang', testimonial: 'Emily is a talented web developer with a passion for coding. She is a quick learner and always eager to tackle new challenges.' },
  { name: 'Mark Davis', testimonial: 'Mark is a proactive and insightful business analyst. He has a knack for identifying opportunities for improvement.' },
];

const data = [
  { name: 'Tech', value: studentsData.filter(student => student.path === 'Tech').length },
  { name: 'Consulting', value: studentsData.filter(student => student.path === 'Consulting').length },
  { name: 'Banking', value: studentsData.filter(student => student.path === 'Banking').length },
];

const gpa = [
  { name: '3.0-3.2', value: studentsData.filter(student => student.gpa >= 3.0 && student.gpa < 3.2).length },
  { name: '3.2-3.4', value: studentsData.filter(student => student.gpa >= 3.2 && student.gpa < 3.4).length },
  { name: '3.5-3.7', value: studentsData.filter(student => student.gpa >= 3.5 && student.gpa < 3.7).length },
  { name: '3.7-3.9', value: studentsData.filter(student => student.gpa >= 3.7 && student.gpa < 3.9).length },
  { name: '4.0-4.5', value: studentsData.filter(student => student.gpa >= 4.0 && student.gpa <= 4.5).length },
];

const demographic = [
  { name: 'Male', value: studentsData.filter(student => student.demographic === 'Male').length },
  { name: 'Female', value: studentsData.filter(student => student.demographic === 'Female').length },
];

const university = [
  { name: 'Harvard', value: studentsData.filter(student => student.university === 'Harvard').length },
  { name: 'MIT', value: studentsData.filter(student => student.university === 'MIT').length },
  { name: 'Stanford', value: studentsData.filter(student => student.university === 'Stanford').length },
  { name: 'Yale', value: studentsData.filter(student => student.university === 'Yale').length },
  { name: 'Brown', value: studentsData.filter(student => student.university === 'Brown').length },
  { name: 'Princeton', value: studentsData.filter(student => student.university === 'Princeton').length },
  { name: 'Dartmouth', value: studentsData.filter(student => student.university === 'Dartmouth').length },
  { name: 'Columbia', value: studentsData.filter(student => student.university === 'Columbia').length },
];

const schoolyear = [
  { name: 'Senior', value: studentsData.filter(student => student.schoolyear === 'Senior').length },
  { name: 'Junior', value: studentsData.filter(student => student.schoolyear === 'Junior').length },
];

const nationality = [
  { name: 'American', value: studentsData.filter(student => student.Nationality === 'American').length },
  // Add more nationalities as needed
];

const averagePlacement = [
  { name: 'Google', value: studentsData.filter(student => student.averageplacement === 'Google').length },
  { name: 'Facebook', value: studentsData.filter(student => student.averageplacement === 'Facebook').length },
  { name: 'Apple', value: studentsData.filter(student => student.averageplacement === 'Apple').length },
  { name: 'Bain', value: studentsData.filter(student => student.averageplacement === 'Bain').length },
  { name: 'Accenture', value: studentsData.filter(student => student.averageplacement === 'Accenture').length },
  { name: 'Goldman Sachs', value: studentsData.filter(student => student.averageplacement === 'Goldman Sachs').length },
  { name: 'Morgan Stanley', value: studentsData.filter(student => student.averageplacement === 'Morgan Stanley').length },
  { name: 'Amazon', value: studentsData.filter(student => student.averageplacement === 'Amazon').length },
  // Add more placement options as needed
];

function getIntroOfPage(name) {
  switch (name) {
    case 'Tech':
      return 'Students pursuing careers in technology.';
    case 'Consulting':
      return 'Students pursuing careers in consulting.';
    case 'Banking':
      return 'Students pursuing careers in banking.';
    case '3.0-3.2':
      return 'Students with GPAs between 3.0 and 3.2.';
    case '3.2-3.4':
      return 'Students with GPAs between 3.2 and 3.4.';
    case '3.5-3.7':
      return 'Students with GPAs between 3.5 and 3.7.';
    case '3.7-3.9':
      return 'Students with GPAs between 3.7 and 3.9.';
    case '4.0-4.5':
      return 'Students with GPAs between 4.0 and 4.5.';
    case 'Male':
      return 'Male students.';
    case 'Female':
      return 'Female students.';
    case 'Harvard':
      return 'Students from Harvard University.';
    case 'MIT':
      return 'Students from MIT.';
    case 'Stanford':
      return 'Students from Stanford University.';
    case 'Yale':
      return 'Students from Yale University.';
    case 'Brown':
      return 'Students from Brown University.';
    case 'Princeton':
      return 'Students from Princeton University.';
    case 'Dartmouth':
      return 'Students from Dartmouth College.';
    case 'Columbia':
      return 'Students from Columbia University.';
    default:
      return '';
  }
}


function PathTooltip({ payload, label, active }) {
  if (active && payload && payload.length) {
    const intro = getIntroOfPage(label);
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="intro">Path: {label}</p>
      </div>
    );
  }

  return null;
}

function GPATooltip({ payload, label, active }) {
  if (active && payload && payload.length) {
    const intro = getIntroOfPage(label);
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="intro">GPA Range: {label}</p>
      </div>
    );
  }

  return null;
}

function DemographicTooltip({ payload, label, active }) {
  if (active && payload && payload.length) {
    const intro = getIntroOfPage(label);
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="intro">Demographic: {label}</p>
      </div>
    );
  }

  return null;
}

function UniversityTooltip({ payload, label, active }) {
  if (active && payload && payload.length) {
    const intro = getIntroOfPage(label);
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="intro">University: {label}</p>
      </div>
    );
  }

  return null;
}

function GradeLevelTooltip({ payload, label, active }) {
  if (active && payload && payload.length) {
    const intro = getIntroOfPage(label);
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="intro">Grade Level: {label}</p>
      </div>
    );
  }

  return null;
}

function PlacementTooltip({ payload, label, active }) {
  if (active && payload && payload.length) {
    const intro = getIntroOfPage(label);
    const positions = studentsData.filter(student => student.averageplacement === label).map(student => student.position).join(', ');
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="intro">Positions at {label}: {positions}</p>
      </div>
    );
  }

  return null;
}

function StudentsPage() {
  const [selectedPath, setSelectedPath] = useState('Banking');

  const filteredStudents = selectedPath ? studentsData.filter(student => student.path === selectedPath) : studentsData;

  const handleFilter = (path) => {
    setSelectedPath(path);
  };

  return (
    <div className="students-page">
      <section className="intro-section">
        <div className="container">
          <h1>Students are the Core of Propel2Excel</h1>
        </div>
      </section>
      <section className="chart-section">
        <div className="chart-text">
            <p>At Propel2Excel, we believe that students are the future. Our mission is to empower students to achieve their full potential and succeed in their chosen career paths. Through mentorship, networking opportunities, and hands-on experience, we prepare students for success in the tech, consulting, and banking industries. Our program is designed to provide students with the skills, knowledge, and confidence they need to excel in today's competitive job market. We are committed to helping students achieve their goals and make a positive impact in the world.</p>
        </div>
        <div className="chart-container-row">
        <PieChart width={400} height={400}>
          <text x={200} y={20} textAnchor="middle" dominantBaseline="middle" className="chart-title">Fellow's Paths</text>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label />
          <Tooltip content={<PathTooltip />} />
        </PieChart>
        <PieChart width={400} height={400}>
          <text x={200} y={20} textAnchor="middle" dominantBaseline="middle" className="chart-title">GPA Distribution</text>
          <Pie data={gpa} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#82ca9d" label />
          <Tooltip content={<GPATooltip />} />
        </PieChart>
        <PieChart width={400} height={400}>
          <text x={200} y={20} textAnchor="middle" dominantBaseline="middle" className="chart-title">Demographics</text>
          <Pie data={demographic} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#ffc658" label />
          <Tooltip content={<DemographicTooltip />} />
        </PieChart>
        <PieChart width={400} height={400}>
          <text x={200} y={20} textAnchor="middle" dominantBaseline="middle" className="chart-title">University Distribution</text>
          <Pie data={university} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#ff7f50" label />
          <Tooltip content={<UniversityTooltip />} />
        </PieChart>
        <PieChart width={400} height={400}>
          <text x={200} y={20} textAnchor="middle" dominantBaseline="middle" className="chart-title">Grade Levels</text>
          <Pie data={schoolyear} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#d45087" label />
          <Tooltip content={<GradeLevelTooltip />} />
        </PieChart>
        <PieChart width={400} height={400}>
          <text x={200} y={20} textAnchor="middle" dominantBaseline="middle" className="chart-title">Average Placement</text>
          <Pie data={averagePlacement} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#1e90ff" label />
          <Tooltip content={<PlacementTooltip />} />
        </PieChart>
          {/* <PieChart width={400} height={400}>
            <Pie data={nationality} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label />
            <Tooltip />
          </PieChart> */}
        </div>
      </section>
      <section className="student-section">
        <div className="container">
          <h2>Meet Some of Our Top Students</h2>
          <div className="filter-buttons">
            <button className={selectedPath === 'Tech' ? 'active' : ''} onClick={() => handleFilter('Tech')}>Tech</button>
            <button className={selectedPath === 'Banking' ? 'active' : ''} onClick={() => handleFilter('Banking')}>Banking</button>
            <button className={selectedPath === 'Consulting' ? 'active' : ''} onClick={() => handleFilter('Consulting')}>Consulting</button>
          </div>
          <div className="student-grid">
            {filteredStudents.map((student, index) => (
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
      </section>
      <section className="testimonials-section">
        <div className="container">
          <h2>Student Testimonials</h2>
          <div className="testimonials-container">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial">
                <p>{testimonial.testimonial}</p>
                <p className="testimonial-author">- {testimonial.name}</p>
              </div>
            ))}
            {testimonials.map((testimonial, index) => (
              <div key={index + testimonials.length} className="testimonial">
                <p>{testimonial.testimonial}</p>
                <p className="testimonial-author">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


export default StudentsPage;
