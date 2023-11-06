import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logoImage from './assets/images/20230820_123817_0000.png'; //path to image
import Home from './components/HomePage/homePage';
import Schedule from './pages/Schedule/schedule';
import SubmitResume from './pages/Resume Submission/resumeSubmission';
import BecomeSponsor from './pages/Sponsors/sponsors';
import Speakers from './pages/Speakers/speakers';
import Partners from './pages/Partners/partners';
import FAQs from './pages/FAQs/faqs';
import Conference from './pages/Conference/conference';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <Link to="/">
            <img src={logoImage} alt="Company Logo" className="logo" />
          </Link>
          <nav className="nav-links">
            {/* Using Link component for client-side routing */}
            <Link to="/schedule">Schedule</Link>
            <Link to="/submit-resume">Submit Your Resume</Link>
            <Link to="/become-sponsor">Become a Sponsor</Link>
            <Link to="/speakers">Speakers</Link>
            <Link to="/partners">Partners</Link>
            <Link to="/faqs">FAQs</Link>
            <Link to="/conference">Conference</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/submit-resume" element={<SubmitResume />} />
          <Route path="/become-sponsor" element={<BecomeSponsor />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/conference" element={<Conference />} />
          {/* Add additional routes if needed */}
        </Routes>

      </div>
    </Router>
  );
}

export default App;
