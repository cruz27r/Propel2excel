import React, { useState, useEffect } from 'react';
import './events.css';
import eventImage from '../assets/images/conference-event.f097fa57bf13a847f4a9.jpg'; 
import speakerEventImage from '../assets/images/remotemeeting.b7fdea9dfaf8c569f04a.jpg';

const EventsSection = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2024-10-01T00:00:00');
    const currentDate = new Date();
    const difference = targetDate - currentDate;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [currentImage, setCurrentImage] = useState(eventImage);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleNetworkingButtonClick = () => {
    setCurrentImage(eventImage);
  };

  const handleSpeakerButtonClick = () => {
    setCurrentImage(speakerEventImage);
  };

  return (
    <section className="events-section">
      <div className="left-panel">
        <div className="live-cohort">
          <h2>Live Cohort</h2>
          <div className="cohort-details">
            <div className="detail">
              <i className="fas fa-user-graduate fa-2x"></i>
              <h3><span>250 </span> Students</h3>
            </div>
            <div className="detail">
              <i className="fas fa-university fa-2x"></i>
              <h3><span>60 </span> Universities (US)</h3>
            </div>
            <div className="detail">
              <i className="fas fa-chalkboard-teacher fa-2x"></i>
              <h3><span>8,000 </span> Coaches</h3>
            </div>
          </div>
        </div>
        <div className="october-applications">
          <h2 className="countdown-title">October Applications</h2>
          <div className="applications-countdown">
            <span>{timeLeft.days} <strong>D</strong></span>
            <span>{timeLeft.hours} <strong>H</strong></span>
            <span>{timeLeft.minutes} <strong>M</strong></span>
            <span>{timeLeft.seconds} <strong>S</strong></span>
          </div>
          <div className="applications-stats">
            <p className="stat1"><span className="stats-emphasis">1,200</span> within 2 months</p>
            <p className="stat2">Projected October Applications: <span className="stats-emphasis">5000</span></p>
          </div>
        </div>
      </div>
      <div className="right-panel">
        <h2>Events That Lead and Inspire</h2>
        <p>Our exclusive events provide invaluable insights into industry practices and networking opportunities, preparing our fellows to become industry leaders.</p>
        <img src={currentImage} alt="Events" />
        <div className="event-buttons">
          <button className="networking-button" onClick={handleNetworkingButtonClick}>Networking Events</button>
          <button className="speaker-button" onClick={handleSpeakerButtonClick}>Speaker Series</button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
