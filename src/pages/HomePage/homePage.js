import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Chart from 'chart.js/auto';
import './homePage.css';

import ProgressSteps from '../../components/Individual_Parts/ProgressSteps';

import photo2 from '../../assets/images/networking_large_table.jpg';
import mentors from '../../assets/videos/mentorship_example.mp4';

// Define new images
import workshop from '../../assets/images/workshop.jpg';
import networking from '../../assets/images/networking-event.jpg';
import speakerSeriesImage from '../../assets/images/speaker-event.jpg';
import careerCoachingImage from '../../assets/images/coaching-example.jpg';
import resumeWorkshopImage from '../../assets/images/resume-rebrand-image.jpg';
import interviewPrepImage from '../../assets/images/mock-interview.jpg';
import background from '../../assets/images/4x/Logo-P2e-final-v4Asset 2.png';

function Home() {
  const [activeEvent, setActiveEvent] = useState('workshop'); // Default active bullet for events section
  const [activeService, setActiveService] = useState('coaching'); // Default active bullet for services section

  const handleHoverEvent = (eventName) => {
    setActiveEvent(eventName);
  };

  const handleHoverService = (service) => {
    setActiveService(service);
  };

  useEffect(() => {
    // Corporate Section Chart
    const corporateCtx = document.getElementById('corporateChart').getContext('2d');
    let corporateChartInstance = new Chart(corporateCtx, {
      type: 'pie',
      data: {
        labels: ['Tech', 'Consulting', 'Banking'],
        datasets: [{
          data: [30, 40, 30], // Example data, replace with your actual data
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }]
      }
    });
  
    // Coach Section Chart
    const coachCtx = document.getElementById('coachChart').getContext('2d');
    let coachChartInstance = new Chart(coachCtx, {
      type: 'bar',
      data: {
        labels: ['Google', 'Microsoft', 'Amazon'],
        datasets: [{
          label: 'Number of Coaches',
          data: [20, 30, 25], // Example data, replace with your actual data
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  
    // Mentor Section Chart
    const mentorCtx = document.getElementById('mentorChart').getContext('2d');
    let mentorChartInstance = new Chart(mentorCtx, {
      type: 'radar',
      data: {
        labels: ['Career Guidance', 'Networking', 'Resume Building', 'Interview Prep', 'Soft Skills'],
        datasets: [{
          label: 'Mentor Responsibilities',
          data: [80, 70, 60, 75, 85], // Example data, replace with your actual data
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }]
      }
    });
  
    // Cleanup function to destroy charts
    return () => {
      corporateChartInstance.destroy();
      coachChartInstance.destroy();
      mentorChartInstance.destroy();
    };
  }, []);  

  return (
    <div className="App">
      <div className="banner-container">
        <img src={background} alt="Banner" className="full-width-banner" />
      </div>

      <div className="p2e-description">
        <div className="header-container">
          <h2>Our Mission</h2>
        </div>
        <p className="p2e-text">Propel2Excel is a six-month coaching program led by corporate professionals from Tier 1 companies, for ambitious students at non-target schools to secure competitive internships & careers at top tier tech, consulting, and banking companies.</p>
        <Link to="/apply-to-cohort" className="details-button">Cohort Application</Link>
      </div>

      {/* Corporate Logos Section */}
      <section className="corporate-section">
        <img src={photo2} alt="Networking at a large table" />
        <div className="corporate-text-box">
          <div className="button-container">
            <h2>Discover Our Corporate Network</h2>
            <Link to="/corporate-partners" className="arrow-button"></Link> {/* Arrow button */}
          </div>
          <p>At Propel2Excel, we have established strong partnerships with industry giants such as Google, Microsoft, and Amazon. These collaborations create unique opportunities for our participants, from internships to job placements. Our corporate network offers invaluable insights and mentorship from experienced professionals in these renowned companies.</p>
          <canvas id="corporateChart" width="100px" height="100px"></canvas>
        </div>
      </section>

      {/* Career Coach Section */}
      <section className="coach-section-box">
        <div className="coach-text-box">
          <div className="button-container">
            <h2>And Connect with a Career Coach</h2>
            <Link to="/coach" className="arrow-button"></Link> {/* Arrow button */}
          </div>
          <p>Our 1-on-1 coaching program focuses on specific career fields, offering interview preparation, LinkedIn rebranding, and more. Our coaches are dedicated to helping students excel in their chosen paths. Additionally, students gain insights and introductions to senior leadership within their respective companies, paving the way for successful careers.</p>
          <div className="video-container">
            <video src={mentors} autoPlay muted loop playsInline />
          </div>
        </div>
        <div className="chart-container">
          <canvas id="coachChart" width="400" height="400"></canvas>
        </div>
      </section>

      {/* Mentorship Section */}
      <section className="mentors-section">
        <div className="video-container">
          <video src={mentors} autoPlay muted loop playsInline />
        </div>
        <div className="mentor-text-box">
          <div className="header-container">
            <h2>Meet Our Mentors</h2>
          </div>
          <p>Our mentorship program is the heart of Propel2Excel. Experienced mentors from leading firms offer weekly coaching, guiding students in their career journeys. Beyond group coaching, students can request private 1-on-1 meetings with mentors for personalized advice. Our mentors play a crucial role in bringing students to 80% of speaking engagements and ensuring progress in LinkedIn and resume rebranding.</p>
          <canvas id="mentorChart" width="100px" height="100px"></canvas>
        </div>
      </section>

      {/* Events and Services Section */}
      <div className="events-services-container">
        {/* Events Section */}
        <div className="events-services-section">
          <div className="events-services-content">
            <h2>Events That Lead and Inspire</h2>
            <p>Our exclusive events provide invaluable insights into industry practices and networking opportunities, preparing our fellows to become industry leaders.</p>
            <div className="events-buttons">
              <button onClick={() => handleHoverEvent('workshop')} className={activeEvent === 'workshop' ? 'active-button' : ''}>Interactive Workshops</button>
              <button onClick={() => handleHoverEvent('networking')} className={activeEvent === 'networking' ? 'active-button' : ''}>Networking Events</button>
              <button onClick={() => handleHoverEvent('speaker')} className={activeEvent === 'speaker' ? 'active-button' : ''}>Speaker Series</button>
            </div>
          </div>
          <div className="events-services-image">
            {activeEvent === 'workshop' && <img id="events-img" src={workshop} alt="Event" />}
            {activeEvent === 'networking' && <img id="events-img" src={networking} alt="Event" />}
            {activeEvent === 'speaker' && <img id="events-img" src={speakerSeriesImage} alt="Event" />}
          </div>
        </div>
 
        {/* Services Section */}
        <div className="events-services-section">
          <div className="events-services-image">
            {activeService === 'coaching' && <img id="services-img" src={careerCoachingImage} alt="Service" />}
            {activeService === 'resume' && <img id="services-img" src={resumeWorkshopImage} alt="Service" />}
            {activeService === 'interview' && <img id="services-img" src={interviewPrepImage} alt="Service" />}
          </div>
          <div className="events-services-content">
            <h2>Comprehensive Services for Career Advancement</h2>
            <p>We offer a range of services designed to equip students with the necessary tools for career success, from LinkedIn rebranding to expert interview preparation.</p>
            <div className="services-buttons">
              <button onClick={() => handleHoverService('coaching')} className={activeService === 'coaching' ? 'active-button' : ''}>Career Coaching</button>
              <button onClick={() => handleHoverService('resume')} className={activeService === 'resume' ? 'active-button' : ''}>Resume Workshops</button>
              <button onClick={() => handleHoverService('interview')} className={activeService === 'interview' ? 'active-button' : ''}>Interview Preparation</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
