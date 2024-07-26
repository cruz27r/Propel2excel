import React from 'react';
import './Homepage.css';
import photocollage from '../assets/images/photo-collage.png';
import ProgramComponents from '../components/ProgramComponents';
import StudentPlacement from '../components/StudentPlacement';
import EventsSection from '../components/events';
import CompaniesSection from '../components/CompaniesSection';
import Footer from '../components/Footer/Footer';
import MeetOurFellows from '../components/MeetOurFellows.js';
// import './fontAwesome';
import p2e from '../assets/images/image.png'


const Homepage = () => {
  return (
    <div className="homepage">
      <div className="content">
        <h1 className='banner-text'><img src={p2e} width={150}></img> places underrepresented talent at top tech, consulting, and banking companies</h1>
        {/* <div className="image-container">
            <img src={groupImage} alt="Group" />
        </div> */}
      </div>
      <div className='about'>
        <div className='image-container1'>
            <img src={photocollage} width={700}></img>
        </div>
        <div className='text'>
            <h1 className='title'>Who We Are</h1>
            <h3 className='about-text'>Propel2Excel is a non-profit organization that places and connects ambitious students at non-targeted universities
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
      {/* <section>
        <MeetOurFellows/>
      </section> */}
      <section className='event'>
      <EventsSection />
      </section>
      <section>
        <CompaniesSection/>
      </section>
      {/* <div className='become'>
        <button>Become a Fellow</button>
        <button>Become a Volunteer</button>
        <button>Become a Partner</button>
      </div> */}
      <section>
        <Footer/>
      </section>
    </div>
  );
  
};

export default Homepage;
