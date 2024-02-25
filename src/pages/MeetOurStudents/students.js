import React from 'react';
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
  },
  {
    name: 'Jane Smith',
    image: speakerImage2,
    path: 'Consulting',
    description: 'Jane is part of the Consulting path and goes to MIT. She is working towards a career as a Management Consultant among companies like McKinsey and BCG.',
  },
  {
    name: 'Alice Johnson',
    image: speakerImage3,
    path: 'Banking',
    description: 'Alice is part of the Banking path and goes to Stanford. She is working towards a career as an Investment Banker among companies like Goldman Sachs and J.P. Morgan.',
  },
  {
    name: 'Michael Brown',
    image: speakerImage1,
    path: 'Tech',
    description: 'Michael is part of the Tech path and goes to Yale. He is working towards a career as a Data Scientist among companies like Facebook and Amazon.',
  },
  {
    name: 'Sarah Johnson',
    image: speakerImage2,
    path: 'Consulting',
    description: 'Sarah is part of the Consulting path and goes to Princeton. She is working towards a career as a Strategy Consultant among companies like Bain and Deloitte.',
  },
  {
    name: 'David Lee',
    image: speakerImage3,
    path: 'Banking',
    description: 'David is part of the Banking path and goes to Columbia. He is working towards a career as a Financial Analyst among companies like Morgan Stanley and Citigroup.',
  },
  {
    name: 'Emily Wang',
    image: speakerImage1,
    path: 'Tech',
    description: 'Emily is part of the Tech path and goes to Brown. She is working towards a career as a Web Developer among companies like Apple and Netflix.',
  },
  {
    name: 'Mark Davis',
    image: speakerImage2,
    path: 'Consulting',
    description: 'Mark is part of the Consulting path and goes to Dartmouth. He is working towards a career as a Business Analyst among companies like Accenture and PwC.',
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

function StudentsPage() {
  return (
    <div className="students-page">
      <section className="intro-section">
        <div className="container">
          <h1>Students are the Core of Propel2Excel</h1>
          <p>At Propel2Excel, we believe that students are the future. Our mission is to empower students to achieve their full potential and succeed in their chosen career paths. Through mentorship, networking opportunities, and hands-on experience, we prepare students for success in the tech, consulting, and banking industries.</p>
          <p>Our program is designed to provide students with the skills, knowledge, and confidence they need to excel in today's competitive job market. We are committed to helping students achieve their goals and make a positive impact in the world.</p>
        </div>
      </section>
      <section className="student-section">
        <div className="container">
          <h2>Meet Our Students</h2>
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
      </section>
      <section className="testimonial-section">
        <div className="container">
          <h2>Student Testimonials</h2>
          <div className="testimonial-slider">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial">
                <p>"{testimonial.testimonial}" - {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="chart-section">
        <div className="container">
          <h2>Student Paths</h2>
          <div className="chart-container">
            <PieChart width={400} height={400}>
              <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label />
              <Tooltip />
            </PieChart>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StudentsPage;
