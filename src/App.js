// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/homePage';
import HomePageJourney from './pages/HomePage/backup/Journey';
import JourneyContent from './pages/JourneyPages/JourneyPage';
import UniversityPartners from './pages/UniversityPartners/UniversityPartners';
import CorporatePartners from './pages/CorporatePartners/CorporatePartners';
import LinkedInRebrand from './pages/Services/LinkedInRebrand/LinkedInRebrand';
import ResumeRebrand from './pages/Services/ResumeRebrand/ResumeRebrand';
import InterviewPrep from './pages/Services/InterviewPrep/interviewPrep';
import EventsForReadiness from './pages/EventsForReadiness/eventsForReadiness';
import ApplyToCohort from './pages/ApplyToCohort/ApplyToCohort';
import Speakers from './pages/Speakers/speakers';
import FAQs from './pages/FAQs/faqs';
import UniversityPartnersApplication from './pages/UniversityPartners/UniversityPartnersApplication';
import CorporatePartnersApplication from './pages/CorporatePartners/CorporatePartnersApplication';
import SpeakerApplication from './pages/Speakers/SpeakersApplication';
import NavBar from './components/NavBar/navbar';
import './App.css';
import MaintenancePage from './pages/Maintenance/MaintenancePage';
import Students from './pages/MeetOurStudents/students';
import MainApplication from './pages/MainApplication/MainApplication';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/journey" element={<HomePageJourney />} />
          <Route path="/journeyContent" element={<JourneyContent />} />
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
          <Route path="/maintenance" element={<MaintenancePage />} />
          <Route path="/students" element={<Students />} />
          <Route path="/main-application" element={<MainApplication />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
