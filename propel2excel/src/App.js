import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header>
        <img src="./public/logo512.png" alt="AfroTech Logo" className="logo"/>
        <nav>
          <a href="/schedule">Schedule</a>
          <a href="/submit_resume">Submit Your Resume</a>
          <a href="/become_sponsor">Become a Sponsor</a>
          <a href="/speakers">Speakers</a>
          <a href="/partners">Partners</a>
          <a href="/faqs">FAQs</a>
          <a href="/shop_merch">Shop Merch</a>
          <a href="/conference">Conference</a>
        </nav>
      </header>
      <main>
        <h1>The AFROTECH EXPERIENCE</h1>
        <p>The only tech events you'll need all year.</p>
        <button>Get Tickets</button>
      </main>
    </div>
  );
}

export default App;
