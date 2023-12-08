import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
//import logoImage from './assets/images/P2E_Logo.png'; // Correct path to image
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
import NavBar from './components/NavBar/navbar';
import SubmitResume from './pages/SubmitResume/submitResume';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/events-for-readiness" element={<EventsForReadiness />} />
          <Route path="/submit-linkedin" element={<SubmitLinkedIn />} />
          <Route path="/submit-resume" element={<SubmitResume />} />
          <Route path="/become-p2e" element={<BecomeP2E />} />
          <Route path="/become-speaker" element={<BecomeSpeaker />} />
          <Route path="/become-sponsor" element={<BecomeSponsor />} />
          <Route path="/interview-prep" element={<InterviewPrep />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/faqs" element={<FAQs />} />
          {/* Add additional routes if needed */}
        </Routes>

      </div>
    </Router>
  );
}

export default App;
