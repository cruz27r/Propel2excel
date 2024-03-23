import React, { useState, useEffect, useRef } from 'react';

import './AboutP2E-Student.css';

import mentorshipVideo from '../../../assets/videos/mentorship_example.mp4'; // Import mentorship video
import workshopImage from '../../../assets/images/workshop.jpg'; // Import workshop image
import networkingImage from '../../../assets/images/networking-event.jpg'; // Import networking event image
import coachingImage from '../../../assets/images/Coaching.jpg'; // Import coaching image
import mentorshipImage from '../../../assets/images/meetmentor.jpg'; // Import mentorship image
import resumeImage from '../../../assets/images/resume-rebrand-image.jpg'; // Import resume image
import LinkedInImage from '../../../assets/images/resume-rebrand-image.jpg'; // Import LinkedIn image
import interviewImage from '../../../assets/images/mock-interview.jpg'; // Import interview image
import networkingEventImage from '../../../assets/images/networking-event.jpg'; // Import networking event image

// Reuse the same image for testing purposes
const careerCoaching = coachingImage;
const resumeWorkshop = resumeImage;
const interviewPrep = interviewImage;
const speakerSeries = networkingEventImage;

const StudentAbout = () => {
  const [activeService, setActiveService] = useState('coaching');
  const [activeEvent, setActiveEvent] = useState('workshop');
  const [activeComponent, setActiveComponent] = useState('coaching');
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  const detailsRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% of the details section is visible
    };

    const observer = new IntersectionObserver(([entry]) => {
      setIsDetailsVisible(entry.isIntersecting);
    }, options);

    if (detailsRef.current) {
      observer.observe(detailsRef.current);
    }

    return () => {
      if (detailsRef.current) {
        observer.unobserve(detailsRef.current);
      }
    };
  }, []);

  const handleServiceClick = (service) => {
    setActiveService(service);
  };

  const handleEventClick = (event) => {
    setActiveEvent(event);
  };

  const handleComponentClick = (component) => {
    setActiveComponent(component);
  };

  const componentImages = {
    coaching: coachingImage,
    mentorship: mentorshipImage,
    resume: resumeImage,
    interview: interviewImage,
    networking: networkingEventImage,
    careerCoaching: careerCoaching,
    resumeWorkshop: resumeWorkshop,
    interviewPrep: interviewPrep,
    speakerSeries: speakerSeries,
    linkedin: LinkedInImage,
  };

  return (
    <div>
      <div className="video-paragraph-container">
        <video src={mentorshipVideo} loop autoPlay muted>
          Your browser does not support the video tag.
        </video>
        <p>Propel2Excel is a six-month coaching program led by corporate professionals from Tier 1 companies, for ambitious students at non-target schools to secure competitive internships & careers at top tier tech, consulting, and banking companies.</p>
      </div>

      <div className="program-statement">
        <h3 className='ProgramHeader'>Program Overview</h3>
        <p className='Overview-Text'>
          Propel2Excel offers a comprehensive program designed to help students secure competitive internships and careers at top-tier tech, consulting, and banking companies. The program is led by corporate professionals from Tier 1 companies and is tailored for ambitious students at non-target schools.
        </p>
      </div>

      <div className="key-components-container">
        <h3>Key Components of the Program</h3>
        <div className="components-content">
          <ul>
            <li onClick={() => handleComponentClick('coaching')} className={activeComponent === 'coaching' ? 'active' : ''}><strong>Coaching Sessions:</strong> Weekly coaching sessions with industry professionals provide personalized guidance and support.</li>
            <li onClick={() => handleComponentClick('resume')} className={activeComponent === 'resume' ? 'active' : ''}><strong>Resume Workshops:</strong> Tailored assistance to enhance students' online presence and attract potential employers.</li>
            <li onClick={() => handleComponentClick('linkedin')} className={activeComponent === 'linkedin' ? 'active' : ''}><strong>LinkedIn Rebranding:</strong> Customized support to optimize students' LinkedIn profiles for job opportunities.</li>
            <li onClick={() => handleComponentClick('mentorship')} className={activeComponent === 'mentorship' ? 'active' : ''}><strong>Mentorship Program:</strong> Access to experienced mentors who offer career guidance and networking opportunities.</li>
            <li onClick={() => handleComponentClick('interview')} className={activeComponent === 'interview' ? 'active' : ''}><strong>Interview Preparation:</strong> Mock interviews and personalized feedback to help students excel in job interviews.</li>
          </ul>
          <div className="component-image">
            {activeComponent && <img src={componentImages[activeComponent]} alt={activeComponent} />}
          </div>
        </div>
        {/* Component Details */}
        <div ref={detailsRef} className={`component-details ${isDetailsVisible ? 'highlighted' : ''}`}>
          {activeComponent === 'coaching' && (
            <>
              <div className="details-column">
                <h4>Common Mistakes</h4>
                <ul>
                  <li>Lack of clear career goals.</li>
                  <li>Poor time management and prioritization skills.</li>
                  <li>Ineffective networking strategies.</li>
                </ul>
              </div>
              <div className="details-column">
                <h4>Our Focus</h4>
                <ul>
                  <li>Setting clear, achievable career goals with actionable plans.</li>
                  <li>Time management workshops and personalized strategies.</li>
                  <li>Networking events and guidance on effective networking techniques.</li>
                </ul>
              </div>
              <div className="details-column">
                <h4>Importance</h4>
                <p>Effective coaching sessions provide students with personalized guidance and support, helping them navigate their career paths with clarity and confidence.</p>
              </div>
            </>
          )}
          {activeComponent === 'resume' && (
            <>
              <div className="details-column">
                <h4>Common Mistakes</h4>
                <ul>
                  <li>Unprofessional formatting and layout.</li>
                  <li>Generic, unfocused content.</li>
                  <li>Lack of keyword optimization for ATS.</li>
                </ul>
              </div>
              <div className="details-column">
                <h4>Our Focus</h4>
                <ul>
                  <li>Resume workshops to create visually appealing, ATS-friendly resumes.</li>
                  <li>Personalized feedback on content and structure.</li>
                  <li>Optimization for relevant keywords and industry-specific language.</li>
                </ul>
              </div>
              <div className="details-column">
                <h4>Importance</h4>
                <p>A well-crafted resume is crucial for making a positive first impression on recruiters and showcasing relevant skills and experiences.</p>
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
                <p>A well-crafted LinkedIn profile can significantly enhance a student's online presence, attract potential employers, and lead to valuable networking opportunities.</p>
              </div>
            </>
          )}
          {activeComponent === 'mentorship' && (
            <>
              <div className="details-column">
                <h4>Common Mistakes</h4>
                <ul>
                  <li>Lack of mentorship or guidance.</li>
                  <li>Difficulty networking or making industry connections.</li>
                  <li>Uncertainty about career direction or goals.</li>
                </ul>
              </div>
              <div className="details-column">
                <h4>Our Focus</h4>
                <ul>
                  <li>Pairing students with experienced mentors in their field.</li>
                  <li>Providing networking opportunities and industry insights.</li>
                  <li>Offering guidance and support for career development.</li>
                </ul>
              </div>
              <div className="details-column">
                <h4>Importance</h4>
                <p>Mentorship offers students valuable insights, guidance, and networking opportunities that can significantly impact their career trajectory and success.</p>
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
        </div>

      </div>
      
      {/* Events and Services Container */}
      <div className="events-services-container">
        {/* Events Section */}
        <div className="events-section">
          <div className="events-services-content">
            <h2>Events That Lead and Inspire</h2>
            <p>Our exclusive events provide invaluable insights into industry practices and networking opportunities, preparing our fellows to become industry leaders.</p>
          </div>
          <div className="events-services-image">
            <img src={activeEvent === 'workshop' ? workshopImage : activeEvent === 'networking' ? networkingImage : speakerSeries} alt="Event" />
          </div>
          <div className="events-buttons">
            <button onClick={() => handleEventClick('workshop')} className={activeEvent === 'workshop' ? 'active-button' : ''}>Workshops</button>
            <button onClick={() => handleEventClick('networking')} className={activeEvent === 'networking' ? 'active-button' : ''}>Networking Events</button>
            <button onClick={() => handleEventClick('speakerSeries')} className={activeEvent === 'speakerSeries' ? 'active-button' : ''}>Speaker Series</button>
          </div>
        </div>

        {/* Services Section */}
        <div className="services-section">
          <div className="events-services-image">
            <img src={activeService === 'coaching' ? careerCoaching : activeService === 'resume' ? resumeWorkshop : interviewPrep} alt="Service" />
          </div>
          <div className="services-content">
            <h2>Professional Services</h2>
            <p>Our range of services includes career coaching, resume workshops, and interview preparation, ensuring our fellows are fully prepared for the job market.</p>
          </div>
          <div className="services-buttons">
            <button onClick={() => handleServiceClick('coaching')} className={activeService === 'coaching' ? 'active-button' : ''}>Career Coaching</button>
            <button onClick={() => handleServiceClick('resume')} className={activeService === 'resume' ? 'active-button' : ''}>Resume Workshops</button>
            <button onClick={() => handleServiceClick('interview')} className={activeService === 'interview' ? 'active-button' : ''}>Interview Preparation</button>
          </div>
        </div>
      </div>


    </div>
  );
};

export default StudentAbout;

