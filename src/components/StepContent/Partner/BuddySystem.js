import React, { useState } from 'react';
import './BuddySystem.css';
import mentorshipVideo from '../../../assets/videos/job-interview.mp4';
import workshopImage from '../../../assets/images/workshop.jpg';
import networkingImage from '../../../assets/images/networking-event.jpg';
import coachingImage from '../../../assets/images/Coaching.jpg';
import mentorshipImage from '../../../assets/images/meetmentor.jpg';
import resumeImage from '../../../assets/images/resume-rebrand-image.jpg';
import LinkedInImage from '../../../assets/images/resume-rebrand-image.jpg';
import interviewImage from '../../../assets/images/mock-interview.jpg';
import networkingEventImage from '../../../assets/images/networking-event.jpg';

const BuddySystem = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 'linkedin-resume',
      title: 'LinkedIn & Resume Rebrand',
      description: 'LinkedIn and resume rebrand completed by professionals with over 10 years of experience rebranding both works with P2E team and from current and ex-professionals at top tier companies.',
      icon: '📄💼',
      image: resumeImage,
    },
    {
      id: 'interview',
      title: 'Interview Preparation',
      description: 'Students are paired with current and professional alum at top tier companies, who have experience in the role students are applying for. This is done with a student as a buddy. In other words, the student would have a lot of 1:1 help before being introduced to a professional to ensure good use of time. Pairing students with professionals during the interview prep helps students feel adequately prepared, and not surprised by any questions that may come forward during the real interview.',
      icon: '🗣️',
      image: interviewImage,
    },
    {
      id: 'speaking',
      title: 'Speaking Series',
      description: 'Hosting monthly and weekly speaking events to share insights and inspire fellow participants. Speaking engagements with professionals from top tier tech, consulting, and banking companies, fostering partnerships with the non-target university environment.',
      icon: '🎤',
      image: networkingEventImage,
    },
    {
      id: 'candidate-readiness',
      title: 'Candidate Readiness',
      description: 'Once a student completes steps 1-3, they are officially coached and vetted. Students\' profiles are presented in a tie to patience, pilot, and interest companies like Microsoft, McKinsey & Co., Amazon, and more. Each company will have the opportunity to choose at least 5 students to interview for their most competitive internships or full-time positions.',
      icon: '🏆',
      image: coachingImage,
    },
  ];

  const toggleActiveService = (serviceId) => {
    setActiveService((prevActiveService) => (prevActiveService === serviceId ? null : serviceId));
  };

  return (
    <div className="buddy-system-container">
      <div className="buddy-intro-container">
        <p className="buddy-intro">
          The Buddy System is a core component of the Propel2Excel program, designed to provide personalized support and guidance to our fellows. Partners are matched with fellows based on their expertise and the fellows' needs, creating a collaborative environment for growth and development.
        </p>
        <video className="mentor-video" autoPlay loop muted>
          <source src={mentorshipVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="services-container">
        {services.map((service) => (
          <div
            key={service.id}
            className={`service-card ${activeService === service.id ? 'active' : ''}`}
            onClick={() => toggleActiveService(service.id)}
          >
            <span className="service-icon">{service.icon}</span>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            {activeService === service.id && (
              <div className="service-image-container">
                <img src={service.image} alt={service.title} className="service-image" />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="requirements">
        <h3>Time Commitment</h3>
        <ul>
          <li className="buddy-requirement">Buddies are committed to doing 3 hours a year for the program.</li>
        </ul>
      </div>
      <div className="impact-and-image">
        <div className="separator-image-container">
          <img src={workshopImage} alt="Workshop" className="separator-image" />
        </div>
        <div className="impact-section">
          <h3>The Impact of Mentorship</h3>
          <p>Mentorship plays a pivotal role in the professional development of our fellows. Here are some key statistics combined with explanations:</p>
          <ul>
            <li><strong>80% Increased Job Opportunities:</strong> Mentees are more likely to receive job offers and promotions.</li>
            <li><strong>70% Enhanced Skill Development:</strong> Mentorship provides personalized guidance for skill improvement and career advancement.</li>
            <li><strong>90% Better Networking:</strong> Access to a mentor's professional network opens up new opportunities and connections.</li>
          </ul>
          <p>Our Buddy System ensures that each fellow receives the support and guidance necessary to navigate their career path with confidence and achieve their professional goals.</p>
        </div>
      </div>
      <div className="testimonial-section">
        <h3>Testimonials</h3>
        <div className="testimonial">
          <p>"I am incredibly grateful for this program and I know if other students had this opportunity they'd feel the same way. I wish Propel2Excel existed sooner, I have already gotten so much value from it in my first financial state of the program like P2E extends to all. It has raised my competencies as well."</p>
          <span>- IB Associate @ BOA</span>
        </div>
        <div className="testimonial">
          <p>"Propel2Excel's Buddy System provided me with the guidance and support I needed to secure a role at Capital One. The mentorship was invaluable."</p>
          <span>- Analyst @ Capital One</span>
        </div>
        <div className="testimonial">
          <p>"I am incredibly grateful for this program and I know if other students had this opportunity they'd feel the same way. I wish Propel2Excel existed sooner, I have already gotten so much value from it in my first financial state of the program like P2E extends to all. It has raised my competencies as well."</p>
          <span>- IB Associate @ BOA</span>
        </div>
      </div>
    </div>
  );
};

export default BuddySystem;
