// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/homePage';
import EventsForReadiness from './pages/EventsForReadiness/eventsForReadiness';
import SubmitLinkedIn from './pages/SubmitLinkedIn/submitLinkedIn';
import BecomeP2E from './pages/BecomeP2E/becomeP2E';
import BecomeSpeaker from './pages/BecomeSpeaker/becomeSpeaker';
import BecomeSponsor from './pages/BecomeSponsor/becomeSponsor';
import InterviewPrep from './pages/InterviewPrep/interviewPrep';
import Partners from './pages/Partners/partners';
import Speakers from './pages/Speakers/speakers';
import FAQs from './pages/FAQs/faqs';
import './App.css';
// NavBar is imported but will not be used on the maintenance page
import NavBar from './components/NavBar/navbar';
import SubmitResume from './pages/SubmitResume/submitResume';
import MaintenancePage from './pages/Maintenance/MaintenancePage'; // Path to your MaintenancePage component

function App() {
  return (
    <Router>
      <Routes>
        {/* MaintenancePage is rendered without NavBar */}
        <Route path="/" element={<MaintenancePage />} />
        
        {/* Other pages are wrapped with NavBar */}
        <Route path="/home" element={<><NavBar /><HomePage /></>} />
        <Route path="/events-for-readiness" element={<><NavBar /><EventsForReadiness /></>} />
        <Route path="/submit-linkedin" element={<><NavBar /><SubmitLinkedIn /></>} />
        <Route path="/submit-resume" element={<><NavBar /><SubmitResume /></>} />
        <Route path="/become-p2e" element={<><NavBar /><BecomeP2E /></>} />
        <Route path="/become-speaker" element={<><NavBar /><BecomeSpeaker /></>} />
        <Route path="/become-sponsor" element={<><NavBar /><BecomeSponsor /></>} />
        <Route path="/interview-prep" element={<><NavBar /><InterviewPrep /></>} />
        <Route path="/partners" element={<><NavBar /><Partners /></>} />
        <Route path="/speakers" element={<><NavBar /><Speakers /></>} />
        <Route path="/faqs" element={<><NavBar /><FAQs /></>} />
        {/* Add additional routes if needed */}
      </Routes>
    </Router>
  );
}

export default App;
