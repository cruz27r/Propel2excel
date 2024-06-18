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
import useScreenSize from '../../../hooks/userScreenSize'; // import the custom hook

const studentsData = [
  { name: 'Fabiola Flores', linkedin: 'https://www.linkedin.com/in/fabiola-flores-esperanza58/' },
  { name: 'Ahsan Khan', linkedin: 'https://www.linkedin.com/in/ahsan-khan01/' },
  { name: 'Ivana Huges', linkedin: 'https://www.linkedin.com/in/ivana-hughes/' },
  { name: 'Glenys Yevi', linkedin: 'https://www.linkedin.com/in/glenysyevi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
  { name: 'JoseManuel Cruz', linkedin: 'https://www.linkedin.com/in/josemanuel-cruz1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
  { name: 'Rafael Cruz', linkedin: 'https://www.linkedin.com/in/rafaelcruzlagos?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
  { name: 'Nourien Fouad', linkedin: 'https://www.linkedin.com/in/nourine-fouad/' },
  { name: 'Marvendy Brutus', linkedin: 'https://www.linkedin.com/in/marvendy-brutus/' },
  { name: 'Zion Witsell', linkedin: 'https://www.linkedin.com/in/zionwitsell/' },
  { name: 'Ebuka Ogbuefi', linkedin: 'https://www.linkedin.com/in/ebuka-ogbuefi/' },
  { name: 'Sparkle Lawson', linkedin: 'https://www.linkedin.com/in/sparkle-lawson/' },
  { name: 'Ethan Weily', linkedin: 'https://www.linkedin.com/in/ethan-weily-wvu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
  { name: 'Delia Whitehill', linkedin: 'https://www.linkedin.com/in/deliawhitehill/' },
  { name: 'David Fang', linkedin: 'https://www.linkedin.com/in/davidffang/' },
  { name: 'Kaden Liu', linkedin: 'https://www.linkedin.com/in/liukaden?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
];

const StudentAbout = () => {
  const [activeEvent, setActiveEvent] = useState('networking');
  const [activeComponent, setActiveComponent] = useState('studentRequirements');
  const [overlayVisible, setOverlayVisible] = useState(false);
  const isMobile = useScreenSize(); // use the custom hook to detect screen size

  const handleEventClick = (event) => {
    setActiveEvent(event);
  };

  const handleComponentClick = (component) => {
    setActiveComponent(component);
  };

  const toggleOverlay = () => {
    setOverlayVisible(!overlayVisible);
  };

  const componentImages = {
    studentRequirements: meeting,
    speaking: mentorshipImage,
    linkedin: LinkedInImage,
    interview: interviewImage,
    candidate: candidate,
  };

  const renderDetails = (component) => {
    switch (component) {
      case 'studentRequirements':
        return (
          <div className="component-details">
            <div className="details-column">
              <h4>Academic Requirements</h4>
              <ul>
                <li><img src={check} alt="check" className="check-icon" /> Good Academic Standing: A GPA of 3.3 and above.</li>
                <li><img src={check} alt="check" className="check-icon" /> Special Projects: Participation in significant academic projects.</li>
                <li><img src={check} alt="check" className="check-icon" /> Awards and Achievements: Recognition such as the Dr. Martin Luther King Jr. Award.</li>
              </ul>
            </div>
            <div className="details-column">
              <h4>Professional Requirements</h4>
              <ul>
                <li><img src={check} alt="check" className="check-icon" /> Leadership Positions: Preferred positions in clubs, sports, or projects.</li>
                <li><img src={check} alt="check" className="check-icon" /> Internship Experience: Experience in top tech, consulting, or banking companies.</li>
                <li><img src={check} alt="check" className="check-icon" /> Business Certifications: Certifications such as CFA, CPA, or other relevant qualifications.</li>
              </ul>
            </div>
          </div>
        );
      case 'speaking':
        return (
          <div className="component-details">
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
          </div>
        );
      case 'linkedin':
        return (
          <div className="component-details">
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
          </div>
        );
      case 'interview':
        return (
          <div className="component-details">
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
          </div>
        );
      case 'candidate':
        return (
          <div className="component-details">
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
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="student-about-container">
      <div className="program-overview" onClick={toggleOverlay}>
        <img src={CollageExample} alt="Mentorship Program" className="program-image" />
        <div className="program-text">
          <h3 className="program-header">Who We Are</h3>
          <p>
            Propel2Excel is a non-profit organization that places and connects ambitious students at non-targeted universities to professionals in top tier <span className='highlight'>tech, consulting, and banking companies</span> — through the "Ivy League recruiting experience".
          </p>
        </div>
        {overlayVisible && (
          <div className="overlay-student">
            <button className="close-overlay" onClick={toggleOverlay}>X</button>
            <div className="students-grid">
              {studentsData.map((student, index) => (
                <div className="student-box" key={index}>
                  <a href={student.linkedin} target="_blank" rel="noopener noreferrer">{student.name}</a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="key-components-container">
        <h3>Key Components of the Program</h3>
        <div className="key-components-content">
          <ul className="key-components">
            <li onClick={() => handleComponentClick('studentRequirements')} className={activeComponent === 'studentRequirements' ? 'active' : ''}>
              <strong>Student Requirements:</strong> The necessary criteria for students to join the program.
              {activeComponent === 'studentRequirements' && <img src={componentImages['studentRequirements']} alt="Student Requirements" className="component-image" />}
              {isMobile && activeComponent === 'studentRequirements' && renderDetails('studentRequirements')}
            </li>
            <li onClick={() => handleComponentClick('speaking')} className={activeComponent === 'speaking' ? 'active' : ''}>
              <strong>Speaking Engagements:</strong> Professional speaking engagements foster partnerships with non-target universities and provide industry insights.
              {activeComponent === 'speaking' && <img src={componentImages['speaking']} alt="Speaking Engagements" className="component-image" />}
              {isMobile && activeComponent === 'speaking' && renderDetails('speaking')}
            </li>
            <li onClick={() => handleComponentClick('linkedin')} className={activeComponent === 'linkedin' ? 'active' : ''}>
              <strong>LinkedIn & Resume Rebrand:</strong> Experts with over 10 years of experience optimize students' LinkedIn profiles and resumes.
              {activeComponent === 'linkedin' && <img src={componentImages['linkedin']} alt="LinkedIn & Resume Rebrand" className="component-image" />}
              {isMobile && activeComponent === 'linkedin' && renderDetails('linkedin')}
            </li>
            <li onClick={() => handleComponentClick('interview')} className={activeComponent === 'interview' ? 'active' : ''}>
              <strong>Interview Preparation:</strong> Students receive mock interviews and feedback from current professionals to enhance their readiness.
              {activeComponent === 'interview' && <img src={componentImages['interview']} alt="Interview Preparation" className="component-image" />}
              {isMobile && activeComponent === 'interview' && renderDetails('interview')}
            </li>
            <li onClick={() => handleComponentClick('candidate')} className={activeComponent === 'candidate' ? 'active' : ''}>
              <strong>Candidate Readiness:</strong> Vetted students are introduced to partner companies for internship or full-time opportunities.
              {activeComponent === 'candidate' && <img src={componentImages['candidate']} alt="Candidate Readiness" className="component-image" />}
              {isMobile && activeComponent === 'candidate' && renderDetails('candidate')}
            </li>
          </ul>
          {!isMobile && (
            <div className="component-details">
              {renderDetails(activeComponent)}
            </div>
          )}
        </div>
      </div>

      <div className="events-statistics-container">
        <div className="statistics-section">
          <div className="stat-item">
            <h3>Live Cohort</h3>
            <p>
              <span className="highlight-stat">250 Students</span> across <span className="highlight-stat">60 Universities (US)</span><br />
              <span className="highlight-stat">8,000 Coaches</span>
            </p>
          </div>
          <div className="stat-item">
            <h3>October Applications</h3>
            <p>
              <span className="highlight-stat">1,200</span> within 2 months<br />
              Projected October Applications: <span className="highlight-stat">5,000</span>
            </p>
          </div>
          <div className="stat-item">
            <h3>Student Profile</h3>
            <p>
              Average GPA: <span className="highlight-stat">3.7</span><br />
              Freshmen: <span className="highlight-stat">25%</span><br />
              Sophomore: <span className="highlight-stat">25%</span><br />
              Junior: <span className="highlight-stat">25%</span><br />
              Senior: <span className="highlight-stat">25%</span>
            </p>
          </div>
          <div className="stat-item">
            <h3>P2E Placements</h3>
            <ul>
              <li>Microsoft: <span className="highlight-stat">20.6%</span></li>
              <li>Google: <span className="highlight-stat">12.7%</span></li>
              <li>Amazon: <span className="highlight-stat">10.3%</span></li>
              <li>McKinsey & Co.: <span className="highlight-stat">7.9%</span></li>
              <li>Mass General Hospital: <span className="highlight-stat">18.6%</span></li>
              <li>Goldman Sachs: <span className="highlight-stat">6.2%</span></li>
              <li>Others: <span className="highlight-stat">7.9%</span></li>
              <li>Bank of America: <span className="highlight-stat">5%</span></li>
              <li>Citi: <span className="highlight-stat">3.3%</span></li>
            </ul>
          </div>
        </div>

        <div className="events-section">
          <div className="events-content">
            <h2>Events That Lead and Inspire</h2>
            <p>Our exclusive events provide invaluable insights into industry practices and networking opportunities, preparing our fellows to become industry leaders.</p>
          </div>
          <div className="events-image">
            <img src={activeEvent === 'networking' ? networkingImage : activeEvent === 'speakerSeries' ? speakerSeriesImage : workshopImage} alt="Event" />
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
