// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
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
import MaintenancePage from './pages/Maintenance/MaintenancePage'; // Path to your MaintenancePage component

const Layout = ({ children }) => {
  const location = useLocation(); // Get the current location

  // Check if the current path is not the maintenance page
  const showNavBar = location.pathname !== "/";

  return (
    <>
      {showNavBar && <NavBar />}
      <div className="main-content">
        {children}
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Layout>
            <MaintenancePage />
          </Layout>
        } />
        <Route path="/homepage" element={
          <Layout>
            <HomePage />
          </Layout>
        } />
        <Route path="/university-partners" element={
          <Layout>
            <UniversityPartners />
          </Layout>
        } />
        <Route path="/university-partners/application" element={
          <Layout>
            <UniversityPartnersApplication />
          </Layout>
        } />
        <Route path="/corporate-partners" element={
          <Layout>
            <CorporatePartners />
          </Layout>
        } />
        <Route path="/corporate-partners/application" element={
          <Layout>
            <CorporatePartnersApplication />
          </Layout>
        } />
        <Route path="/linkedin-rebrand" element={
          <Layout>
            <LinkedInRebrand />
          </Layout>
        } />
        <Route path="/resume-rebrand" element={
          <Layout>
            <ResumeRebrand />
          </Layout>
        } />
        <Route path="/interview-prep" element={
          <Layout>
            <InterviewPrep />
          </Layout>
        } />
        <Route path="/events-for-readiness" element={
          <Layout>
            <EventsForReadiness />
          </Layout>
        } />
        <Route path="/apply-to-cohort" element={
          <Layout>
            <ApplyToCohort />
          </Layout>
        } />
        <Route path="/speakers/application" element={
          <Layout>
            <SpeakerApplication />
          </Layout>
        } />
        <Route path="/speakers" element={
          <Layout>
            <Speakers />
          </Layout>
        } />
        <Route path="/faqs" element={
          <Layout>
            <FAQs />
          </Layout>
        } />
        {/* Additional routes can be added here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
