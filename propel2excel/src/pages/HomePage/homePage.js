// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './homePage.css';

//image imports
import photo1 from '../../assets/images/looking_over_code.jpg';
import photo2 from '../../assets/images/networking_large_table.jpg';
import background from '../../assets/images/zoom_in_on_laptop.jpg';

function Home() {
  return (
    <div className="App">
      <main className='second-sticky' style={{ background: `url(${background})` }}>
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
