import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './homePage.css';

import photo1 from '../../assets/images/company-office-headshots-hartford-connecticut.jpg';
import photo2 from '../../assets/images/networking_large_table.jpg';
import photo3 from '../../assets/images/networking_table.jpg';
import logoImage from '../../assets/images/Propel2excel-Banner-textAsset 2.png';
import background from '../../assets/images/4x/Banner-Collage-new1Asset 2@4x.png';
import video1 from '../../assets/videos/test_networking_vid.mp4';
import workshopImage from '../../assets/images/looking_over_code.jpg';
import networkingImage from '../../assets/images/looking_over_code.jpg';
import speakerSeriesImage from '../../assets/images/looking_over_code.jpg';
import careerCoachingImage from '../../assets/images/looking_over_code.jpg';
import resumeWorkshopImage from '../../assets/images/looking_over_code.jpg';
import interviewPrepImage from '../../assets/images/looking_over_code.jpg';

function Home() {
  const [activeEvent, setActiveEvent] = useState('');

  const handleHoverEvent = (eventName) => {
    setActiveEvent(eventName);
  };

  return (
    <div className="App">
      <div className="banner-container">
          <img src={background} alt="Banner" className="banner-image" />
      </div>

      <div className="p2e-description">
        <div className="header-container">
          <h2>Our Mission</h2>
          <Link to="/apply-to-cohort" className="details-button">Cohort Application</Link>
        </div>
        <p className="p2e-text">Propel2Excel is a six-month coaching program led by corporate professionals from Tier 1 companies, for ambitious students at non-target schools to secure competitive internships & careers at top tier tech, consulting, and banking companies.</p>
      </div>

      {/* Corporate Logos Section */}
      <section className="corporate-logos">
        <img src={photo2} alt="Networking at a large table" />
        <div className="corporate-text-box">
          <h2>Discover Our Corporate Network</h2>
          <p>At Propel2Excel, we have established strong partnerships with industry giants such as Google, Microsoft, and Amazon. These collaborations create unique opportunities for our participants, from internships to job placements. Our corporate network offers invaluable insights and mentorship from experienced professionals in these renowned companies.</p>
          <Link to="/corporate-partners" className="details-button">Discover Our Corporate Network</Link>
        </div>
      </section>

      {/* Career Coach Section */}
      <section className="coach-section">
        <div className="coach-text-box">
          <h2>And Connect with a Career Coach</h2>
          <p>Our 1-on-1 coaching program focuses on specific career fields, offering interview preparation, LinkedIn rebranding, and more. Our coaches are dedicated to helping students excel in their chosen paths. Additionally, students gain insights and introductions to senior leadership within their respective companies, paving the way for successful careers.</p>
          <Link to="/coach" className="details-button">Connect with a Career Coach</Link>
        </div>
        <video src={video1} autoPlay muted loop playsInline />
      </section>

      {/* Mentorship Section */}
      <section className="mentors-section">
        <img src={photo3} alt="Networking around a table" />
        <div className="mentor-text-box">
          <h2>Meet Our Mentors</h2>
          <p>Our mentorship program is the heart of Propel2Excel. Experienced mentors from leading firms offer weekly coaching, guiding students in their career journeys. Beyond group coaching, students can request private 1-on-1 meetings with mentors for personalized advice. Our mentors play a crucial role in bringing students to 80% of speaking engagements and ensuring progress in LinkedIn and resume rebranding.</p>
          <Link to="/mentors" className="details-button">Meet Our Mentors</Link>
        </div>
      </section>

      {/* Events Section */}
      <section className="events-services-section">
        <div className="events-services-content">
          <h2>Events That Lead and Inspire</h2>
          <p>Our exclusive events provide invaluable insights into industry practices and networking opportunities, preparing our fellows to become industry leaders.</p>
          <ul className="events-services-bullets">
            <li onMouseOver={() => handleHoverEvent('workshop')} className={activeEvent === 'workshop' ? 'active' : ''}>Interactive Workshops</li>
            <li onMouseOver={() => handleHoverEvent('networking')} className={activeEvent === 'networking' ? 'active' : ''}>Networking Events</li>
            <li onMouseOver={() => handleHoverEvent('speaker')} className={activeEvent === 'speaker' ? 'active' : ''}>Speaker Series</li>
          </ul>
        </div>
        <div className="events-services-image">
          <img id="events-img" src={workshopImage} alt="Event" />
        </div>
      </section>

      {/* Services Section */}
      <section className="events-services-section">
        <div className="events-services-content">
          <h2>Comprehensive Services for Career Advancement</h2>
          <p>We offer a range of services designed to equip students with the necessary tools for career success, from LinkedIn rebranding to expert interview preparation.</p>
          <ul className="events-services-bullets">
            <li onMouseOver={() => handleHoverEvent('coaching')} className={activeEvent === 'coaching' ? 'active' : ''}>Career Coaching</li>
            <li onMouseOver={() => handleHoverEvent('resume')} className={activeEvent === 'resume' ? 'active' : ''}>Resume Workshops</li>
            <li onMouseOver={() => handleHoverEvent('interview')} className={activeEvent === 'interview' ? 'active' : ''}>Interview Preparation</li>
          </ul>
        </div>
        <div className="events-services-image">
          <img id="services-img" src={careerCoachingImage} alt="Service" />
        </div>
      </section>

    </div>
  );
}

export default Home;