import React from 'react';
import './App.css';
import logoImage from './assets/images/20230820_123817_0000.png'; //path to image

function App() {
  return (
    <div className="App">
      <header className="header">
        <a href="/">
          <img src={logoImage} alt="Propel2Excel Logo" className="logo" />
        </a>
        <nav className="nav-links">
          <a href="/schedule">Schedule</a>
          <a href="/submit-resume">Submit Your Resume</a>
          <a href="/become-sponsor">Become a Sponsor</a>
          <a href="/speakers">Speakers</a>
          <a href="/partners">Partners</a>
          <a href="/faqs">FAQs</a>
          <a href="/shop-merch">Shop Merch</a>
          <a href="/conference">Conference</a>
        </nav>
      </header>

      <main className='second-sticky'>
        <h1 className="main-title">The AFROTECH EXPERIENCE</h1>
        <p className="main-description">The only tech events you'll need all year.</p>
        <button className="main-ticket-button">Get Tickets</button>
      </main>

      <section className="button-group">
        <button className="conference-button">AFROTECH Conference</button>
        <button className="conference-button executive">AFROTECH Executive</button>
        <button className="conference-button labs">AFROTECH Labs</button>
      </section>

      <div className="main-info">
        <div className="conference-info">
          <h1 className="info-title">AFROTECH Conference</h1>
          <p className="info-description">A global gathering where inclusive tech companies meet diverse innovators.</p>
        </div>
        <div className="ticket-section">
          <p className="conference-date-location">NOVEMBER 1-5, 2023 | AUSTIN, TX</p>
          <a href="/tickets" className="ticket-button">Get Tickets</a>
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
        <button className="ticket-button">Get Tickets</button>

        <div className="cities">
          <h2>SEATTLE, WA</h2>
          <h2>WASHINGTON, DC</h2>
          <h2>NEW YORK, NY</h2>
        </div>

        <a href="/event-details" className="event-link">View Event Details</a>
      </div>
    </div>
  );
}

export default App;
