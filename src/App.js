import React, { useState, useEffect, useRef } from 'react';
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
import NavBar from './components/NavBar/navbar';
import './App.css';
import MaintenancePage from './pages/Maintenance/MaintenancePage';
import Students from './pages/MeetOurStudents/students';
import MainApplication from './pages/MainApplication/MainApplication';
import HiringBoard from './components/HiringBoard/HiringBoard';
import CareerTips from './components/CareerTips/Tips';
import StudentsPage from './pages/MeetOurStudents/students';

function App() {
  const [isLoggedIn=true, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const navBarRef = useRef(null);

  const handleLogin = (username, password) => {
    if (username === 'Propel' && password === 'p2eDev') {
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true');
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  useEffect(() => {
    const adjustMainContentPadding = () => {
      const navBarHeight = navBarRef.current ? navBarRef.current.offsetHeight : 0;
      document.documentElement.style.setProperty('--navbar-height', `${navBarHeight}px`);
    };

    adjustMainContentPadding();
    window.addEventListener('resize', adjustMainContentPadding);

    return () => {
      window.removeEventListener('resize', adjustMainContentPadding);
    };
  }, []);

  return (
    <Router className="app-container">
      <NavBar ref={navBarRef} isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <div className="main-content">
        <Routes>
          <Route path="/original" element={<HomePage />} />
          <Route path="/" element={<HomePageJourney isLoggedIn={isLoggedIn} onLogin={handleLogin} />} />
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
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/maintenance" element={<MaintenancePage />} />
          <Route path="/students" element={<Students />} />
          <Route path="/main-application" element={<MainApplication />} />
          <Route path="/hiring-board" element={<HiringBoard />} />
          <Route path="/career-tips" element={<CareerTips />} />
          <Route path="/oldStudents" element={<StudentsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
