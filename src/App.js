// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/homePage';
import UniversityPartners from './pages/UniversityPartners/UniversityPartners';
import CorporatePartners from './pages/CorporatePartners/CorporatePartners';
import LinkedInRebrand from './pages/Services/LinkedInRebrand/LinkedInRebrand';
import ResumeRebrand from './pages/Services/ResumeRebrand/ResumeRebrand';
import InterviewPrep from './pages/Services/InterviewPrep/interviewPrep';
import EventsForReadiness from './pages/Services/EventsForReadiness/eventsForReadiness';
import ApplyToCohort from './pages/ApplyToCohort/ApplyToCohort';
import Speakers from './pages/Speakers/speakers';
import FAQs from './pages/FAQs/faqs';
import UniversityPartnersApplication from './pages/UniversityPartners/UniversityPartnersApplication';
import CorporatePartnersApplication from './pages/CorporatePartners/CorporatePartnersApplication';
import SpeakerApplication from './pages/Speakers/SpeakersApplication';
import NavBar from './components/NavBar/navbar';
import './App.css';
import MaintenancePage from './pages/Maintenance/MaintenancePage'; // Path to your MaintenancePage component

function App() {
  return (
    <Router>
      <Routes>
        {/* MaintenancePage is rendered without NavBar */}
        <Route path="/maintenance" element={<MaintenancePage />} />

        {/* Other pages are wrapped with NavBar */}
        <Route path="/" element={<><NavBar /><HomePage /></>} />
        <Route path="/university-partners" element={<><NavBar /><UniversityPartners /></>} />
        <Route path="/university-partners/application" element={<><NavBar /><UniversityPartnersApplication /></>} />
        <Route path="/corporate-partners" element={<><NavBar /><CorporatePartners /></>} />
        <Route path="/corporate-partners/application" element={<><NavBar /><CorporatePartnersApplication /></>} />
        <Route path="/linkedin-rebrand" element={<><NavBar /><LinkedInRebrand /></>} />
        <Route path="/resume-rebrand" element={<><NavBar /><ResumeRebrand /></>} />
        <Route path="/interview-prep" element={<><NavBar /><InterviewPrep /></>} />
        <Route path="/events-for-readiness" element={<><NavBar /><EventsForReadiness /></>} />
        <Route path="/apply-to-cohort" element={<><NavBar /><ApplyToCohort /></>} />
        <Route path="/speakers/application" element={<><NavBar /><SpeakerApplication /></>} />
        <Route path="/speakers" element={<><NavBar /><Speakers /></>} />
        <Route path="/faqs" element={<><NavBar /><FAQs /></>} />
        {/* Additional routes can be added here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
