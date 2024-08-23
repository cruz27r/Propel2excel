import React from 'react';
import './Homepage.css';
import photocollage from '../assets/images/photo-collage.png';
import ProgramComponents from '../components/ProgramComponents.js';
import StudentPlacement from '../components/StudentPlacement.js';
import EventsSection from '../components/events.js';
import CompaniesSection from '../components/CompaniesSection.js';
import MeetOurFellows from '../components/MeetOurFellows.js';
import p2e from '../assets/images/image.png';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="content">
        <h1 className='banner-text'>
          <img src={p2e} width={150} alt="P2E Logo" /> places underrepresented talent at top tech, consulting, and banking companies
        </h1>
      </div>

      <div className='about'>
        <div className='image-container1'>
            <img src={photocollage} width={700} alt="Photo Collage" />
        </div>
        <div className='text'>
            <h1 className='title'>Who We Are</h1>
            <h3 className='about-text'>
              Propel2Excel is a non-profit organization that places and connects ambitious students at non-targeted universities
              to professionals in top tier <span>tech, consulting, and banking companies</span> - through the "Ivy League recruiting
              experience".
            </h3>
        </div>
      </div>

      <section className='key-components'>
        <ProgramComponents/>
      </section>

      <section className='student-placement'>
        <StudentPlacement />
      </section>

      <section className='event'>
        <EventsSection />
      </section>

      <section>
        <CompaniesSection/>
      </section>

      <section className='meet-our-fellows'>
        <MeetOurFellows />
      </section>
      
    </div>
  );
};

export default Homepage;
