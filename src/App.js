import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/navbar.js';
import Homepage from './pages/Homepage.js';
import MainApplication from './pages/MainApplication/MainApplication';
import HiringBoard from './components/HiringBoard/HiringBoard';
import CareerTips from './components/CareerTips/Tips';
import MaintenanceCover from './MaintenanceCover';
import Footer from './components/Footer/Footer.js';
import Fellow from './pages/Fellow';
import Volunteer from './pages/Volunteer.js';
import Partners from './pages/Partners.js';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    if (username === 'Propel' && password === 'p2eDev') {
      setIsLoggedIn(true);
      sessionStorage.setItem('isLoggedIn', 'true');
    } else {
      alert('Incorrect username or password');
    }
  };

  useEffect(() => {
    const loggedIn = sessionStorage.getItem('isLoggedIn');
    if (loggedIn) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <AppRoutes isLoggedIn={isLoggedIn} onLogin={handleLogin} />
        <Footer />
      </div>
    </Router>
  );
};

const AppRoutes = ({ isLoggedIn, onLogin }) => {
  const location = useLocation();

  if (!isLoggedIn && location.pathname === '/') {
    return <MaintenanceCover onLogin={onLogin} />;
  }

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/students" element={<div>Students Page</div>} />
      <Route path="/volunteer" element={<Volunteer />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/hiring-board" element={<HiringBoard />} />
      <Route path="/career-tips" element={<CareerTips />} />
      <Route path="/main-application" element={<MainApplication />} />
      <Route path="/fellow" element={<Fellow />} />
    </Routes>
  );
};

export default App;
