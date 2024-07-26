import React, { useState, useRef } from 'react';
import './programcomponents.css';
import studentRequirement from '../assets/images/student-requirement.jpg';
import speakingEngagement from '../assets/images/speaking engagement.jpg';
import linkedinRebrand from '../assets/images/linkedin-rebrand.jpg';
import candidateReadiness from '../assets/images/candidate readiness.jpg';
import interviewPrep from '../assets/images/interview prep.jpg'

const ProgramComponents = () => {
  const [activeSection, setActiveSection] = useState('student-requirements');
  const rightColumnRef = useRef(null);

  const infoBlocks = [
    {
      title: 'Student Requirements',
      details: 'The necessary criteria for students to join the program.',
      image: studentRequirement,
      section: 'student-requirements',
      content: (
        <>
          <div className='requirement-list'>
          <h2 className='list-title'>Academic Requirements</h2>
          <ul className='list'>
            <li>Good Academic Standing: A GPA of 3.3 and above.</li>
            <li>Special Projects: Participation in significant academic projects.</li>
            <li>Awards and Achievements: Recognition such as the Dr. Martin Luther King Jr. Award.</li>
          </ul>
          </div>
          <div className='info-list'>
          <h2 className='list-title'>Professional Requirements</h2>
          <ul className='list'>
            <li>Leadership Positions: Preferred positions in clubs, sports, or projects.</li>
            <li>Internship Experience: Experience in top tech, consulting, or banking companies.</li>
            <li>Business Certifications: Certifications such as CFA, CPA, or other relevant qualifications.</li>
          </ul>
          </div>
        </>
      )
    },
    {
      title: 'Speaking Engagements',
      details: 'Professional speaking engagements foster partnerships with non-target universities and provide industry insights.',
      image: speakingEngagement,
      section: 'speaking-engagements',
      content: (
        <>
          <div className='requirement-list'>
          <h2 className='list-title'>Common Mistakes</h2>
          <ul className='list'>
            <li>Lack of industry exposure.</li>
            <li>Insufficient networking opportunities.</li>
            <li>Limited access to professional insights.</li>
          </ul>
          </div>
          <div className='info-list'>
          <h2 className='list-title'>Our Focus</h2>
          <ul className='list'>
            <li>Hosting speaking engagements with industry leaders.</li>
            <li>Fostering professional partnerships.</li>
            <li>Providing valuable industry insights.</li>
          </ul>
          </div>
          <div className='info-list'>
          <h2 className='list-title'>Importance</h2>
          <ul className='list'>
            <p>Engaging with industry professionals helps students gain valuable insights, build networks, and better understand their chosen fields.</p>
          </ul>
          </div>
        </>
      )
    },
    {
      title: 'LinkedIn & Resume Rebrand',
      details: 'Experts with over 10 years of experience optimize students\' LinkedIn profiles and resumes.',
      image: linkedinRebrand,
      section: 'linkedin-rebrand',
      content: (
        <>
          <div className='requirement-list'>
          <h2 className='list-title'>Common Mistakes</h2>
          <ul className='list'>
            <li>Incomplete or outdated profiles.</li>
            <li>Unprofessional profile photos.</li>
            <li>Failure to showcase skills and accomplishments.</li>
          </ul>
          </div>
          <div className='info-list'>
          <h2 className='list-title'>Our Focus</h2>
          <ul className='list'>
            <li>LinkedIn profile optimization for professional appearance and completeness.</li>
            <li>Highlighting skills, accomplishments, and experiences relevant to target industries.</li>
            <li>Building a strong professional network through strategic connections.</li>
          </ul>
          </div>
          <div className='info-list'>
          <h2 className='list-title'>Importance</h2>
          <ul className='list'>
            <p>Optimized LinkedIn profiles and resumes increase students' visibility to potential employers and improve their chances of securing job opportunities.</p>
          </ul>
          </div>
        </>
      )
    },
    {
      title: 'Interview Preparation',
      details: 'Students receive mock interviews and feedback from current professionals to enhance their readiness.',
      image: interviewPrep,
      section: 'interview-prep',
      content: (
        <>
          <div className='requirement-list'>
          <h2 className='list-title'>Common Mistakes</h2>
          <ul className='list'>
            <li>Lack of preparation and research.</li>
            <li>Inability to effectively communicate skills and experiences.</li>
            <li>Failure to ask insightful questions or engage with the interviewer.</li>
          </ul>
          </div>
          <div className='info-list'>
          <h2 className='list-title'>Our Focus</h2>
          <ul className='list'>
            <li>Mock Interviews and personalized feedback.</li>
            <li>Training on effective communication and storytelling.</li>
            <li>Guidance on asking questions and engaging with interviewers.</li>
          </ul>
          </div>
          <div className='info-list'>
          <h2 className='list-title'>Importance</h2>
          <ul className='list'>
            <p>Interview preparation is essential for showcasing one's skills and experiences, demonstrating fit for the role, and ultimately securing the job or internship.</p>
          </ul>
          </div>
        </>
      )
    },
    {
      title: 'Candidate Readiness',
      details: 'Experts with over 10 years of experience optimize students\' LinkedIn profiles and resumes.',
      image: candidateReadiness,
      section: 'candidate-readiness',
      content: (
        <>
          <div className='requirement-list'>
          <h2 className='list-title'>Common Mistakes</h2>
          <ul className='list'>
            <li>Unclear career goals and paths.</li>
            <li>Not being adequately prepared for job applications.</li>
            <li>Missing out on suitable job opportunities.</li>
          </ul>
          </div>
          <div className='info-list'>
          <h2 className='list-title'>Our Focus</h2>
          <ul className='list'>
            <p>Create the most attractive candidates for the most superior opportunities in tech, consulting, and banking.</p>
          </ul>
          </div>
          <div className='info-list'>
          <h2 className='list-title'>Importance</h2>
          <ul className='list'>
            <p>Eliminate the gap in recruiting ambitious students at non-target universities.</p>
          </ul>
          </div>
        </>
      )
    }
  ]; 

  const handleSectionChange = (section) => {
    setActiveSection(section);

    // Trigger bounce animation
    if (rightColumnRef.current) {
      rightColumnRef.current.classList.add('bounce');
      // Remove bounce class after animation ends to allow re-triggering
      setTimeout(() => {
        if (rightColumnRef.current) {
          rightColumnRef.current.classList.remove('bounce');
        }
      }, 600); // Match the animation duration
    }
  };

  return (
    <section className="program-components">
      <h1 className="section-title">Key Components of the Program</h1>
      <div className="components-container">
        <div className="left-column">
          {infoBlocks.map((block, index) => (
            <div
              key={index}
              className={`info-block ${activeSection === block.section ? 'active' : ''}`}
              onClick={() => handleSectionChange(block.section)}
            >
              <h3>{block.title}:</h3>
              <p>{block.details}</p>
              <img 
                src={block.image} 
                alt={block.title} 
                className={`info-image ${activeSection === block.section ? 'visible' : 'hidden'}`}
              />
            </div>
          ))}
        </div>
        <div className="right-column" ref={rightColumnRef}>
          {infoBlocks.map((block, index) => (
            <div
              key={index}
              className={`requirements-block ${activeSection === block.section ? 'active' : ''}`}
              style={{ display: activeSection === block.section ? 'block' : 'none' }}
            >
              {block.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramComponents;