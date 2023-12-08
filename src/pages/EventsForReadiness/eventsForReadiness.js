import React, { useState } from 'react';
import './eventsForReadiness.css';

function EventsForReadiness() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [events, setEvents] = useState(new Array(15).fill(null).map((_, index) => ({
    id: index,
    name: `Event ${index + 1}`,
    date: `2023-12-${String(index + 1).padStart(2, '0')}`,
    time: `10:00 AM`,
    about: `Learn the key skills for your industry at Event ${index + 1}.`,
    focus: `Focusing on the latest trends, Event ${index + 1} helps you succeed and prepare for future opportunities.`,
    expanded: false
  })));

  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (username === 'P2E' && password === 'propel2excel!') {
      setLoggedIn(true);
    } else {
      alert('Incorrect username or password');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const toggleEventDetails = (id) => {
    setEvents(events.map(event =>
      event.id === id ? { ...event, expanded: !event.expanded } : event
    ));
  };

  return (
    <div className="events-readiness-container">
      <h1>Events for Readiness</h1>
      {loggedIn ? (
        <>
          <button onClick={handleLogout} className="logout-btn">Log Out</button>
          <div className="events-chart">
            {events.map((event) => (
              <div key={event.id} className="event">
                <div className="event-details">
                  <strong>{event.name}</strong>
                  <span>{event.date}</span>
                  <span>{event.time}</span>
                </div>
                <button className={`expand-btn ${event.expanded ? 'expanded' : ''}`} onClick={() => toggleEventDetails(event.id)}>
                  {event.expanded ? '−' : '+'}
                </button>
                <div className={`event-extra ${event.expanded ? 'show' : ''}`}>
                    <p><strong>About:</strong> {event.about}</p>
                    <p><strong>Focus:</strong> {event.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="login-section">
          <h2>Admin Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required />
            </div>
            <div className="form-group">
              <button type="submit" className="login-btn">Login</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default EventsForReadiness;
