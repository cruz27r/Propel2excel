import React from 'react';
import { Link } from 'react-router-dom';
import './homePage.css';

import photo1 from '../../assets/images/looking_over_code.jpg';
import photo2 from '../../assets/images/networking_large_table.jpg';
import photo3 from '../../assets/images/networking_table.jpg'; // Ensure this image is in your assets
import background from '../../assets/images/networking_event.jpeg';
import video1 from '../../assets/videos/test_networking_vid.mp4';

function Home() {
  return (
    <div className="App">
      <main className='banner' style={{ backgroundImage: `url(${background})` }}>
        <div className="banner-content">
          <div className="text-box">
            <h1 className="main-title">Propel2Excel</h1>
            <p className="main-description">Bridging the Ivey-league recruiting experience to ambitious students at non-target universities</p>
          </div>
          <Link to="/become-p2e" className="main-ticket-button">P2E cohort</Link>
        </div>
      </main>

      <section className="button-group">
        <Link to="/conference" className="conference-button">Who is Propel2Excel</Link>
        <Link to="/executive" className="conference-button executive">Ivy league experience</Link>
        <Link to="/labs" className="conference-button labs">Propel2Excel</Link>
      </section>

      <div className="video-section">
        <video controls>
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="p2e-description">
        <p className="p2e-text">Propel2Excel is dedicated to empowering underrepresented students in business, providing a bridge to prestigious career opportunities through comprehensive coaching and networking.</p>
      </div>

      <section className="section-service" id="linkedin-rebrand">
        <div className="text-box">
          <h2>LinkedIn & Resume Rebrand</h2>
          <p>Revamp your professional identity with our LinkedIn & Resume Rebrand service, tailored to showcase your unique strengths and career aspirations.</p>
          <Link to="/linkedin-rebrand" className="details-button">Learn More</Link>
        </div>
        <img src={photo2} alt="LinkedIn & Resume Rebrand" className="section-image" />
      </section>

      <section className="section-service" id="speaking-engagement" style={{ width: '85%', margin: '0 auto' }}>
        <div className="text-box">
          <h2>Speaking Engagement</h2>
          <p>Engage with industry leaders and gain invaluable insights through our inspiring speaking engagements, designed to motivate and open doors to new opportunities. These sessions are tailored to provide practical advice, industry-specific knowledge, and motivational stories to empower and inspire the next generation of business leaders.</p>
          <Link to="/speaking-engagement" className="details-button">Learn More</Link>
        </div>
      </section>

      <section className="section-service" id="interview-prep" style={{ flexDirection: 'row-reverse' }}>
        <div className="text-box">
          <h2>Interview Preparation</h2>
          <p>Master the art of interviewing with our personalized preparation techniques, designed to boost your confidence and performance in any interview scenario. Our program includes mock interviews, feedback sessions, and expert tips on handling tough questions, body language, and communication skills to ensure you're fully prepared for your next big opportunity.</p>
          <Link to="/interview-preparation" className="details-button">Learn More</Link>
        </div>
        <img src={photo3} alt="Interview Preparation" className="section-image" />
      </section>

      <section className="section-service" id="candidate-ready" style={{ width: '85%', margin: '0 auto' }}>
        <div className="text-box">
          <h2>Candidate Ready</h2>
          <p>Our comprehensive program ensures you are fully prepared to meet the demands of top-tier employers, making you an outstanding candidate ready for success. We focus on developing your soft skills, enhancing your business acumen, and refining your professional presentation to ensure you stand out in the competitive job market.</p>
          <Link to="/candidate-ready" className="details-button">Learn More</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
