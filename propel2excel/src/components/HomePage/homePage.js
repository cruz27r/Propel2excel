// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'; // Make sure to import your stylesheet

function Home() {
  return (
    <div className="App">
      <main className='second-sticky'>
        <h1 className="main-title">The AFROTECH EXPERIENCE</h1>
        <p className="main-description">The only tech events you'll need all year.</p>
        <Link to="/tickets" className="main-ticket-button">Get Tickets</Link>
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
          <source src="path_to_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="event-details">
        <h1>AFROTECH Executive</h1>
        <p>Our multi-city event series empowers corporate executives, investors, and tech moguls.</p>
        <Link to="/event-details" className="ticket-button">Get Tickets</Link>

        <div className="cities">
          <h2>SEATTLE, WA</h2>
          <h2>WASHINGTON, DC</h2>
          <h2>NEW YORK, NY</h2>
        </div>

        <Link to="/event-details" className="event-link">View Event Details</Link>
      </div>
    </div>
  );
}

export default Home;
