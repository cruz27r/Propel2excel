// src/MeetOurFellows.js
import React, { useState } from 'react';
import './MeetOurFellows.css';

const MeetOurFellows = () => {
  const videos = [
    "https://www.youtube.com/embed/9Pj04Vr0GFo?rel=0",
    "https://www.youtube.com/embed/9Pj04Vr0GFo?rel=0",
    "https://www.youtube.com/embed/9Pj04Vr0GFo?rel=0",
    // Add more YouTube video URLs as needed
  ];

  const testimonials = [
    {
      name: 'IB Associate @ BOA',
      testimonial:
        "I am incredibly grateful for this program and I know if other students had this opportunity they'd feel the same way. I wish Propel2Excel existed sooner, I have already gotten so much value from it in my first financial state of the program like P2E extends to all. It has raised my competencies as well.",
    },
    {
      name: 'Analyst @ Capital One',
      testimonial:
        "Propel2Excel's Buddy System provided me with the guidance and support I needed to secure a role at Capital One. The mentorship was invaluable.",
    },
    {
      name: 'IB Associate @ BOA',
      testimonial:
        "I am incredibly grateful for this program and I know if other students had this opportunity they'd feel the same way. I wish Propel2Excel existed sooner, I have already gotten so much value from it in my first financial state of the program like P2E extends to all. It has raised my competencies as well.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? videos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === videos.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="vid">
      <div className="content-1">
        <h1 className="heroSection-text">Become A Fellow</h1>
      </div>
      <h2 className="title">Meet Our Fellows</h2>

      <div className="video-carousel">
        <button className="arrow left-arrow" onClick={goToPrevious} aria-label="Previous Video">
          <i className="fa-solid fa-chevron-left"></i>
        </button>

        <div className="video-container">
          <iframe
            src={videos[currentIndex]}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={`Meet Our Fellows Video ${currentIndex + 1}`}
          ></iframe>
        </div>

        <button className="arrow right-arrow" onClick={goToNext} aria-label="Next Video">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>

      <div className="testimonials-section">
        <h2 className="title">Testimonials from Speaker Series Volunteers</h2>
        <div className="testimonials">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial" key={index}>
              <p className="testimonial-text">"{testimonial.testimonial}"</p>
              <p className="testimonial-name">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurFellows;
