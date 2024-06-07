import React, { useState } from 'react';
import './AboutP2E-Student.css';
import mentorshipImage from '../../../assets/images/remotemeeting.jpg';
import CollageExample from '../../../assets/images/collage-students/full-collage-2.png';
import workshopImage from '../../../assets/images/workshop.jpg';
import networkingImage from '../../../assets/images/conference-event.jpg';
import candidate from '../../../assets/images/shaking hands.jpg';
import LinkedInImage from '../../../assets/images/resume-rebrand-image.jpg';
import interviewImage from '../../../assets/images/interview-example.jpg';
import speakerSeriesImage from '../../../assets/images/remotemeeting.jpg';
import check from '../../../assets/images/check.png';
import meeting from '../../../assets/images/group-meeting.jpg';

const StudentAbout = () => {
  const [activeEvent, setActiveEvent] = useState('workshop');
  const [activeComponent, setActiveComponent] = useState('studentRequirements');

  const handleEventClick = (event) => {
    setActiveEvent(event);
  };

  const handleComponentClick = (component) => {
    setActiveComponent(component);
  };

  const componentImages = {
    studentRequirements: meeting,
    speaking: mentorshipImage,
    linkedin: LinkedInImage,
    interview: interviewImage,
    candidate: candidate,
  };

  return (
    <div className="student-about-container">
      <div className="program-wwa">
        <img src={CollageExample} alt="Mentorship Program" className="program-statement-image" />
        <div className="program-statement-text">
          <h3 className="ProgramHeader">Who We Are</h3>
          <p>
            Propel2Excel is a non-profit organization that places and connects ambitious students at non-targeted universities to professionals in top tier <span className='highlight'>tech, consulting, and banking companies</span> — through the "Ivy League recruiting experience".
          </p>
        </div>
      </div>

      <div className="key-components-container">
        <h3>Key Components of the Program</h3>
        <div className="components-content">
          <ul>
            <li onClick={() => handleComponentClick('studentRequirements')} className={activeComponent === 'studentRequirements' ? 'active' : ''}>
              <strong>Student Requirements:</strong> The necessary criteria for students to join the program.
            </li>
            <li onClick={() => handleComponentClick('speaking')} className={activeComponent === 'speaking' ? 'active' : ''}>
              <strong>Speaking Engagements:</strong> Professional speaking engagements foster partnerships with non-target universities and provide industry insights.
            </li>
            <li onClick={() => handleComponentClick('linkedin')} className={activeComponent === 'linkedin' ? 'active' : ''}>
              <strong>LinkedIn & Resume Rebrand:</strong> Experts with over 10 years of experience optimize students' LinkedIn profiles and resumes.
            </li>
            <li onClick={() => handleComponentClick('interview')} className={activeComponent === 'interview' ? 'active' : ''}>
              <strong>Interview Preparation:</strong> Students receive mock interviews and feedback from current professionals to enhance their readiness.
            </li>
            <li onClick={() => handleComponentClick('candidate')} className={activeComponent === 'candidate' ? 'active' : ''}>
              <strong>Candidate Readiness:</strong> Vetted students are introduced to partner companies for internship or full-time opportunities.
            </li>
          </ul>
          <div className="component-image">
            {activeComponent && <img src={componentImages[activeComponent]} alt={activeComponent} />}
          </div>
        </div>
        <div className="component-details">
          {activeComponent === 'studentRequirements' && (
            <>
              <div className="details-column-requirements">
                <h4>Academic Requirements</h4>
                <ul>
                  <li><img src={check} alt="check" className="check-icon" /> Good Academic Standing: A GPA of 3.3 and above.</li>
                  <li><img src={check} alt="check" className="check-icon" /> Special Projects: Participation in significant academic projects.</li>
                  <li><img src={check} alt="check" className="check-icon" /> Awards and Achievements: Recognition such as the Dr. Martin Luther King Jr. Award.</li>
                </ul>
              </div>
              <div className="details-column-requirements">
                <h4>Professional Requirements</h4>
                <ul>
                  <li><img src={check} alt="check" className="check-icon" /> Leadership Positions: Preferred positions in clubs, sports, or projects.</li>
                  <li><img src={check} alt="check" className="check-icon" /> Internship Experience: Experience in top tech, consulting, or banking companies.</li>
                  <li><img src={check} alt="check" className="check-icon" /> Business Certifications: Certifications such as CFA, CPA, or other relevant qualifications.</li>
                </ul>
              </div>
            </>
          )}
          {activeComponent === 'speaking' && (
            <>
              <div className="details-column">
                <h4>Common Mistakes</h4>
                <ul>
                  <li>Lack of industry exposure.</li>
                  <li>Insufficient networking opportunities.</li>
                  <li>Limited access to professional insights.</li>
                </ul>
              </div>
              <div className="details-column">
                <h4>Our Focus</h4>
                <ul>
                  <li>Hosting speaking engagements with industry leaders.</li>
                  <li>Fostering professional partnerships.</li>
                  <li>Providing valuable industry insights.</li>
                </ul>
              </div>
              <div className="details-column">
                <h4>Importance</h4>
                <p>Engaging with industry professionals helps students gain valuable insights, build networks, and better understand their chosen fields.</p>
              </div>
            </>
          )}
          {activeComponent === 'linkedin' && (
            <>
              <div className="details-column">
                <h4>Common Mistakes</h4>
                <ul>
                  <li>Incomplete or outdated profiles.</li>
                  <li>Unprofessional profile photos.</li>
                  <li>Failure to showcase skills and accomplishments.</li>
                </ul>
              </div>
              <div className="details-column">
                <h4>Our Focus</h4>
                <ul>
                  <li>LinkedIn profile optimization for professional appearance and completeness.</li>
                  <li>Highlighting skills, accomplishments, and experiences relevant to target industries.</li>
                  <li>Building a strong professional network through strategic connections.</li>
                </ul>
              </div>
              <div className="details-column">
                <h4>Importance</h4>
                <p>Optimized LinkedIn profiles and resumes increase students' visibility to potential employers and improve their chances of securing job opportunities.</p>
              </div>
            </>
          )}
          {activeComponent === 'interview' && (
            <>
              <div className="details-column">
                <h4>Common Mistakes</h4>
                <ul>
                  <li>Lack of preparation and research.</li>
                  <li>Inability to effectively communicate skills and experiences.</li>
                  <li>Failure to ask insightful questions or engage with the interviewer.</li>
                </ul>
              </div>
              <div className="details-column">
                <h4>Our Focus</h4>
                <ul>
                  <li>Mock interviews and personalized feedback.</li>
                  <li>Training on effective communication and storytelling.</li>
                  <li>Guidance on asking questions and engaging with interviewers.</li>
                </ul>
              </div>
              <div className="details-column">
                <h4>Importance</h4>
                <p>Interview preparation is essential for showcasing one's skills and experiences, demonstrating fit for the role, and ultimately securing the job or internship.</p>
              </div>
            </>
          )}
          {activeComponent === 'candidate' && (
            <>
              <div className="details-column">
                <h4>Common Mistakes</h4>
                <ul>
                  <li>Unclear career goals and paths.</li>
                  <li>Not being adequately prepared for job applications.</li>
                  <li>Missing out on suitable job opportunities.</li>
                </ul>
              </div>
              <div className="details-column">
                <h4>Our Focus</h4>
                <ul>
                  <li>Create the most attractive candidates for the most superior opportunities in tech, consulting, and banking.</li>
                </ul>
              </div>
              <div className="details-column">
                <h4>Importance</h4>
                <p>Eliminate the gap in recruiting ambitious students at non-target universities.</p>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="events-requirements-container">
        <div className="statistics-content">
          <div className="stat-item">
            <h3>Student Profile</h3>
            <p>
              Average GPA: 3.7<br />
              Freshmen: 25%<br />
              Sophomore: 25%<br />
              Junior: 25%<br />
              Senior: 25%
            </p>
          </div>
          <div className="stat-item">
            <h3>P2E Placements</h3>
            <ul>
              <li>Microsoft: 20.6%</li>
              <li>Google: 12.7%</li>
              <li>Amazon: 10.3%</li>
              <li>McKinsey & Co.: 7.9%</li>
              <li>Mass General Hospital: 18.6%</li>
              <li>Goldman Sachs: 6.2%</li>
              <li>Others: 7.9%</li>
              <li>Bank of America: 5%</li>
              <li>Citi: 3.3%</li>
            </ul>
          </div>
          <div className="stat-item">
            <h3>Live Cohort</h3>
            <p>
              250 Students across 60 Universities (US)<br />
              8,000 Coaches
            </p>
          </div>
          <div className="stat-item">
            <h3>October Applications</h3>
            <p>
              1,200 within 2 months<br />
              Projected October Applications: 5,000
            </p>
          </div>
        </div>

        <div className="events-section">
          <div className="events-services-content">
            <h2>Events That Lead and Inspire</h2>
            <p>Our exclusive events provide invaluable insights into industry practices and networking opportunities, preparing our fellows to become industry leaders.</p>
          </div>
          <div className="events-services-image">
            <img src={activeEvent === 'workshop' ? workshopImage : activeEvent === 'networking' ? networkingImage : activeEvent === 'speakerSeries' ? speakerSeriesImage : workshopImage} alt="Event" />
          </div>
          <div className="events-buttons">
            <button onClick={() => handleEventClick('networking')} className={activeEvent === 'networking' ? 'active-button' : ''}>Networking Events</button>
            <button onClick={() => handleEventClick('speakerSeries')} className={activeEvent === 'speakerSeries' ? 'active-button' : ''}>Speaker Series</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentAbout;
