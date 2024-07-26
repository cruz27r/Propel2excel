// src/VideoCarousel.js
import React, { useState } from 'react';
import './MeetOurFellows.css';
import ivanavid from '../assets/videos/0721 (1).mp4'

const MeetOurFellows = () => {
  const videos = [
    ivanavid,
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
    <section className='vid'>
        <h2 className='title'>Meet Our Fellows</h2>
        <div className="video-carousel"> 
      <button className="arrow left-arrow" onClick={goToPrevious}>
      <i class="fa-solid fa-less-than"></i>

      </button>
      <div className="video-container">
        <video src={videos[currentIndex]} controls />
      </div>
      <button className="arrow right-arrow" onClick={goToNext}>
      <i class="fa-solid fa-greater-than"></i>
      
      </button>
    </div>
    </section>

  );
};

export default MeetOurFellows;
