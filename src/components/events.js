import React, { useState } from 'react';
import './events.css';
import eventImage from '../assets/images/conference-event.f097fa57bf13a847f4a9.jpg'; 
import speakerEventImage from '../assets/images/remotemeeting.b7fdea9dfaf8c569f04a.jpg';

const EventsSection = () => {
  const [currentImage, setCurrentImage] = useState(eventImage);

  const handleNetworkingButtonClick = () => {
    setCurrentImage(eventImage);
  };

  const handleSpeakerButtonClick = () => {
    setCurrentImage(speakerEventImage);
  };

  return (
    <section className="events-section">
      <div className="left-panel">
        <div className="apply-reminder">
          <h2>Get Involved with Propel2Excel Events</h2>
          <p>
            Propel2Excel connects ambitious students with professionals in top-tier industries.
            Be a part of our exclusive events to gain invaluable industry insights and mentorship
            opportunities. Apply now to join our program and participate in these transformative events!
          </p>
          <a href="/main-application" className="cta-button">Apply Now</a> {/* Apply button */}
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
