import React, { useState } from 'react';
import './AboutP2E-Partner.css';
import mentorshipImage from '../../../assets/images/remotemeeting.jpg';
import CollageExample from '../../../assets/images/collage-students/collage-example.png';
import workshopImage from '../../../assets/images/workshop.jpg';
import networkingImage from '../../../assets/images/conference-event.jpg';
import candidate from '../../../assets/images/shaking hands.jpg';
import LinkedInImage from '../../../assets/images/resume-rebrand-image.jpg';
import interviewImage from '../../../assets/images/interview-example.jpg';
import speakerSeriesImage from '../../../assets/images/remotemeeting.jpg'; // Add this import for the speaker series image

const PartnerAbout = () => {
  const [activeEvent, setActiveEvent] = useState('workshop');
  const [activeComponent, setActiveComponent] = useState('speaking');

  const handleEventClick = (event) => {
    setActiveEvent(event);
  };

  const handleComponentClick = (component) => {
    setActiveComponent(component);
  };

  const componentImages = {
    speaking: mentorshipImage,
    linkedin: LinkedInImage,
    interview: interviewImage,
    candidate: candidate,
  };

  return (
    <div className="student-about-container">
      <div className="program-statement">
        <img src={CollageExample} alt="Mentorship Program" className="program-statement-image" />
        <div className="program-statement-text">
          <h3 className="ProgramHeader">Program Overview</h3>
          <p>
            Propel2Excel is a non-profit organization that places and connects ambitious students at non-targeted universities to professionals in top tier <span className='highlight'>tech, consulting, and banking companies</span> — through the "Ivy League recruiting experience".
          </p>
        </div>
      </div>

      <div className="key-components-container">
        <h3>Key Components of the Program</h3>
        <div className="components-content">
          <ul>
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
                <li>Create the most attractive candidates for the most superior opportunities in tech, consulting, and banking</li>
                </ul>
              </div>
              <div className="details-column">
                <h4>Importance</h4>
                <p>Eliminate the gap in recruiting ambitious students at non-target university. </p>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="events-requirements-container">
        <div className="requirements-section">
          <h2>Requirements for Fellows</h2>
          <div className="requirements-content">
            <ul>
              <li><strong>Good Academic Standing:</strong> A GPA of 3.3 and above.</li>
              <li><strong>Leadership Positions:</strong> Preferred positions in clubs, sports, or projects that demonstrate leadership skills.</li>
              <li><strong>Internship Experience:</strong> Experience in top tech, consulting, or banking companies is a plus.</li>
              <li><strong>Business Certifications:</strong> Certifications such as CFA, CPA, or other relevant qualifications are advantageous.</li>
              <li><strong>Special Projects:</strong> Participation in significant academic or extracurricular projects.</li>
              <li><strong>Awards and Achievements:</strong> Recognition such as the Dr. Martin Luther King Jr. Award or other prestigious awards.</li>
            </ul>
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

export default PartnerAbout;

