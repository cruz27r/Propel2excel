import React, { useState } from 'react';
import './MeetOurFellows.css';
// import ivanavid from '../assets/videos/0721 (1).mp4'

const MeetOurFellows = () => {
  const videos = [
    // ivanavid,
  ];


  return (
    <section className='vid'>
        <div className='content-1'>
            <h1 className="heroSection-text">Become A Fellow</h1>
        </div>
        <h2 className='title'>Meet Our Fellows</h2>
        <div className="video-carousel"> 
      {/* <button className="arrow left-arrow" onClick={goToPrevious}>
      <i class="fa-solid fa-less-than"></i>

      </button> */}
      <div className="video-container">
        <video src={videos} controls />
      </div>
      {/* <button className="arrow right-arrow" onClick={goToNext}>
      <i class="fa-solid fa-greater-than"></i>
      
      </button> */}
    </div>
    </section>

  );
};

export default MeetOurFellows;
