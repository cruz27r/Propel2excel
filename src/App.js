import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/homePage';
import UniversityPartners from './pages/UniversityPartners/UniversityPartners';
import CorporatePartners from './pages/CorporatePartners/CorporatePartners';
import LinkedInRebrand from './pages/Services/LinkedInRebrand/linkedInRebrand';
import ResumeRebrand from './pages/Services/ResumeRebrand/resumeRebrand';
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

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/university-partners" element={<UniversityPartners />} />
          <Route path="/university-partners/application" element={<UniversityPartnersApplication />} />
          <Route path="/corporate-partners" element={<CorporatePartners />} />
          <Route path="/corporate-partners/application" element={<CorporatePartnersApplication />} />
          <Route path="/linkedin-rebrand" element={<LinkedInRebrand />} />
          <Route path="/resume-rebrand" element={<ResumeRebrand />} />
          <Route path="/interview-prep" element={<InterviewPrep />} />
          <Route path="/events-for-readiness" element={<EventsForReadiness />} />
          <Route path="/apply-to-cohort" element={<ApplyToCohort />} />
          <Route path="/speakers/application" element={<SpeakerApplication />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/faqs" element={<FAQs />} />
          {/* Additional routes can be added here as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
