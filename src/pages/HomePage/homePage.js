import React from 'react';
import { Link } from 'react-router-dom';
import './homePage.css';

import photo1 from '../../assets/images/looking_over_code.jpg';
import photo2 from '../../assets/images/networking_large_table.jpg';
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

      <div className="main-info">
        <div className="conference-info">
          <h1 className="info-title">AFROTECH Conference</h1>
          <p className="info-description">A global gathering where inclusive tech companies meet diverse innovators.</p>
        </div>
        <div className="ticket-section">
          <p className="conference-date-location">NOVEMBER 1-5, 2023 | AUSTIN, TX</p>
          <Link to="/tickets" className="ticket-button">Get Tickets</Link>
        </div>
      </div>

      <div className="video-container">
        <video controls>
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <section className="section-p2e-summary">
        <div className="section-content">
          <img src={photo1} alt="P2E Summary" className="section-image" />
          <div className="text-box">
            <p>Unlocking Business Potential: Propel2Excel's unique approach equips young talents with the skills and networks necessary for thriving in today's competitive business landscape.</p>
            <p>From Classroom to Boardroom: Our program transforms academic excellence into real-world success, focusing on underrepresented students aged 16-25.</p>
            <p>Pathway to Prestige: Propel2Excel alumni have successfully secured positions at leading companies, including Google, Microsoft, and Amazon, through our intensive six-month program.</p>
          </div>
        </div>
      </section>

      <section className="section-mission">
        <div className="section-content">
          <div className="text-box">
            <p>Empowerment through Education: Propel2Excel aims to bridge the gap in business leadership, emphasizing representation and diversity.</p>
            <p>Inspirational Coaching: Our team comprises current and former employees of top-tier companies, providing unparalleled mentorship and guidance.</p>
            <p>A Legacy of Leadership: Our mission is to cultivate the next generation of diverse business leaders and entrepreneurs, changing the face of Fortune 100 companies.</p>
          </div>
          <img src={photo2} alt="P2E Mission" className="section-image" />
        </div>
      </section>

      <section className="section-focus">
        <div className="section-content">
          <img src={photo1} alt="P2E and UMB" className="section-image" />
          <div className="text-box">
            <p>Comprehensive Curriculum: Propel2Excel covers everything from internship readiness to mastering the intricacies of the job market.</p>
            <p>Customizable Learning: We value input from our students and staff, allowing for additional topics to cater to specific needs and interests.</p>
            <p>Measuring Success: Our rigorous Measure of Success (MOS) system in each tier ensures progress and tangible outcomes for all participants.</p>
          </div>
        </div>
      </section>

      <div className="brand-section">
        <div className="brand-content">
          <h1 className="brand-title">About AFROTECH</h1>
          <p className="brand-description">AFROTECH is a transformative experience that connects leaders in tech and culture. We inspire with stories of innovation and success.</p>
        </div>
        <div className="brand-photos">
          <img src={photo1} alt="AFROTECH Brand" className="brand-photo brand-photo1" />
          <img src={photo2} alt="AFROTECH Brand" className="brand-photo brand-photo2" />
        </div>
      </div>

    </div>
  );
}

export default Home;
