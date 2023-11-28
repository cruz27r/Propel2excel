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
            <p className="main-description">Bringing Ivy league recruiting experience to schools.</p>
          </div>
          <Link to="/tickets" className="main-ticket-button">Get Tickets</Link>
        </div>
      </main>

      <section className="button-group">
        <Link to="/conference" className="conference-button">AFROTECH Conference</Link>
        <Link to="/executive" className="conference-button executive">AFROTECH Executive</Link>
        <Link to="/labs" className="conference-button labs">AFROTECH Labs</Link>
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
            <p>Description 1</p>
            <p>Description 2</p>
            <p>Description 3</p>
          </div>
        </div>
      </section>

      <section className="section-mission">
        <div className="section-content">
          <div className="text-box">
            <p>Description 1</p>
            <p>Description 2</p>
            <p>Description 3</p>
          </div>
          <img src={photo2} alt="P2E Mission" className="section-image" />
        </div>
      </section>

      <section className="section-focus">
        <div className="section-content">
          <img src={photo1} alt="P2E and UMB" className="section-image" />
          <div className="text-box">
            <p>Description 1</p>
            <p>Description 2</p>
            <p>Description 3</p>
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
