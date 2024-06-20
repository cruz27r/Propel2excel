import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/homePage';
import HomePageJourney from './pages/HomePage/backup/Journey';
import JourneyContent from './pages/JourneyPages/JourneyPage';
import CorporatePartners from './pages/CorporatePartners/CorporatePartners';
import NavBar from './components/NavBar/navbar';
import MaintenanceCover from './MaintenanceCover';
import './App.css';
import MainApplication from './pages/MainApplication/MainApplication';
import HiringBoard from './components/HiringBoard/HiringBoard';
import CareerTips from './components/CareerTips/Tips';

function App() {
  // Initialize login state based on localStorage and sessionStorage
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true' && sessionStorage.getItem('isSessionActive') === 'true');
  const [isMaintenanceMode, setIsMaintenanceMode] = useState(localStorage.getItem('isMaintenanceMode') === 'true');
  const navBarRef = useRef(null);

  const handleLogin = (username, password) => {
    if (username === 'Propel' && password === 'p2eDev') {
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true');
      sessionStorage.setItem('isSessionActive', 'true');
      setIsMaintenanceMode(false);
      localStorage.setItem('isMaintenanceMode', 'false');
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('isSessionActive');
  };

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

  useEffect(() => {
    // Clear sessionStorage when the window is closed
    const handleBeforeUnload = () => {
      sessionStorage.removeItem('isSessionActive');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <Router className="app-container">
      {isMaintenanceMode || !isLoggedIn ? (
        <MaintenanceCover onLogin={handleLogin} />
      ) : (
        <>
          <NavBar ref={navBarRef} isLoggedIn={isLoggedIn} onLogout={handleLogout} />
          <div className="main-content">
            <Routes>
              <Route path="/original" element={<HomePage />} />
              <Route path="/" element={<HomePageJourney isLoggedIn={isLoggedIn} onLogin={handleLogin} />} />
              <Route path="/journeyContent" element={<JourneyContent />} />
              <Route path="/corporate-partners" element={<CorporatePartners />} />
              <Route path="/main-application" element={<MainApplication />} />
              <Route path="/hiring-board" element={<HiringBoard />} />
              <Route path="/career-tips" element={<CareerTips />} />
            </Routes>
          </div>
        </>
      )}
    </Router>
  );
}

export default App;
