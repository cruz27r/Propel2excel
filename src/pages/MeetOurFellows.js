import React from 'react';
import './MeetOurFellows.css';

const MeetOurFellows = () => {
  const videos = [
    "https://www.youtube.com/embed/9Pj04Vr0GFo?rel=0", // This should be the only source for the video
  ];

  return (
    <section className='vid'>
        <div className='content-1'>
            <h1 className="heroSection-text">Become A Fellow</h1>
        </div>
        <h2 className='title'>Meet Our Fellows</h2>
        
        <div className="video-carousel"> 
          {videos.map((video, index) => (
            <div className="video-container" key={index}>
              <iframe 
                src={video}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                title={`Meet Our Fellows Video ${index + 1}`}
              ></iframe>
            </div>
          ))}
        </div>
    </section>
  );
};

export default MeetOurFellows;
