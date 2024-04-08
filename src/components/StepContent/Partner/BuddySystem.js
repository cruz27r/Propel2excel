import React, { useState } from 'react';
import './BuddySystem.css';
import mentorshipVideo from '../../../assets/videos/mentorship_example.mp4';
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
      id: 'resume',
      title: 'Resume Assistance',
      description: 'Partners help fellows craft standout resumes by providing feedback and sharing best practices.',
      icon: '📄',
      image: resumeImage,
    },
    {
      id: 'linkedin',
      title: 'LinkedIn Optimization',
      description: 'Guidance in building a professional LinkedIn profile to showcase skills and experience.',
      icon: '💼',
      image: LinkedInImage,
    },
    {
      id: 'interview',
      title: 'Interview Preparation',
      description: 'Conducting mock interviews to build confidence and refine interviewing skills.',
      icon: '🗣️',
      image: interviewImage,
    },
    {
      id: 'mentorship',
      title: 'Mentorship Program',
      description: 'Offering career guidance and networking opportunities through experienced mentors.',
      icon: '👥',
      image: mentorshipImage,
    },
    {
      id: 'speaking',
      title: 'Speaking Series',
      description: 'Hosting speaking events to share insights and inspire fellow participants.',
      icon: '🎤',
      image: networkingEventImage,
    },
    // Add more services as needed
  ];

  const toggleActiveService = (serviceId) => {
    setActiveService((prevActiveService) => (prevActiveService === serviceId ? null : serviceId));
  };

  return (
    <div className="buddy-system-container">
      <h2 className='buddy-header'>Buddy Program</h2>
      <div className="buddy-intro-container">
        <p className="buddy-intro">
          The Buddy System is a core component of the Propel2Excel program, designed to provide personalized support and guidance to our fellows. Partners are matched with fellows based on their expertise and the fellows' needs, creating a collaborative environment for growth and development.
        </p>
        <video className="mentor-video" autoPlay loop muted>
          <source src={mentorshipVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={`services-container ${activeService ? 'with-active' : ''}`}>
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
      <div className="impact-section">
        <h3>The Impact of Mentorship</h3>
        <p className='impact-explanation'>
          Mentorship plays a pivotal role in the professional development of our fellows. Here are some key statistics combined with explanations:
        </p>
        <ul className='impact-stats'>
          <li><strong>80% Increased Job Opportunities:</strong> Mentees are more likely to receive job offers and promotions.</li>
          <li><strong>70% Enhanced Skill Development:</strong> Mentorship provides personalized guidance for skill improvement and career advancement.</li>
          <li><strong>90% Better Networking:</strong> Access to a mentor's professional network opens up new opportunities and connections.</li>
        </ul>
        <p className='impact-outro'>
          Our Buddy System ensures that each fellow receives the support and guidance necessary to navigate their career path with confidence and achieve their professional goals.
        </p>
      </div>
      <div className="separator-image-container">
        <img src={workshopImage} alt="Workshop" className="separator-image" />
      </div>
      <div className="testimonial-section">
        <h3>Testimonials</h3>
        <div className="testimonial">
          <p>"The Buddy System transformed my career journey. My mentor's insights and support were invaluable in landing my dream job."</p>
          <span>- Jane Doe, Program Fellow</span>
        </div>
        <div className="testimonial">
          <p>"Being a mentor in the Buddy System has been a rewarding experience. It's fulfilling to see the positive impact on the fellows' careers."</p>
          <span>- John Smith, Industry Partner</span>
        </div>
        <div className="testimonial">
          <p>"The guidance I received through the Buddy System was instrumental in helping me secure a competitive internship."</p>
          <span>- Emily Johnson, Program Fellow</span>
        </div>
        <div className="testimonial">
          <p>"As a mentor, I've had the opportunity to make a real difference in the lives of ambitious students, and it's been an incredibly gratifying experience."</p>
          <span>- Michael Brown, Industry Partner</span>
        </div>
        <div className="testimonial">
          <p>"The networking opportunities provided by the Buddy System have opened doors for me that I never thought possible."</p>
          <span>- Sarah Lee, Program Fellow</span>
        </div>
        <div className="testimonial">
          <p>"The networking opportunities provided by the Buddy System have opened doors for me that I never thought possible."</p>
          <span>- Sarah Lee, Program Fellow</span>
        </div>
      </div>
    </div>
  );
};

export default BuddySystem;
