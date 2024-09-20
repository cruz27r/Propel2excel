import React from 'react';
import './Homepage.css';
import photocollage from '../assets/images/photo-collage.png';
import KeyStatistics from '../components/KeyStatistics.js'
import ProgramComponents from '../components/ProgramComponents.js';
import StudentPlacement from '../components/StudentPlacement.js';
import EventsSection from '../components/events.js';
import CompaniesSection from '../components/CompaniesSection.js';
import MeetOurFellows from '../components/MeetOurFellows.js';
import p2e from '../assets/images/image.png';
import Footer from '../components/Footer/Footer';
import { Link } from 'react-router-dom'; // Assuming you're using react-router-dom for navigation

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="content">
        <h1 className="banner-text">
          <img src={p2e} width={150} alt="P2E Logo" /> trains and places students from underserved universities in top tech, consulting, & banking firms
          {/* Apply to P2E Button Below the Text, Inside h1 */}
          {/* <div className="apply-button-container">
            <Link to="/main-application" className="cta-button">
              Apply to P2E
            </Link>
          </div> */}
        </h1>
      </div>

      <div className="about">
        <div className="image-container1">
          <img src={photocollage} width={700} alt="Photo Collage" />
        </div>
        <div className="text">
          <h1 className="title">Who We Are</h1>
          <h3 className="about-text">
            Propel2Excel, Inc. is a non-profit organization that trains, places, and connects ambitious students at non-target universities
            to professionals in top-tier <span>tech, consulting, and banking companies</span> through our curated 4 stage "Ivy League recruiting experience." If schools like Harvard, Yale, and MIT can do it, why can't we?
          </h3>
        </div>
      </div>


      <section className="key-statistics">
        <KeyStatistics />
      </section>

      <section className="key-components">
        <ProgramComponents />
      </section>

      <section className="student-placement">
        <StudentPlacement />
      </section>

      <section className="event">
        <EventsSection />
      </section>

      <section>
        <CompaniesSection />
      </section>

      <section className="meet-our-fellows">
        <MeetOurFellows />
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Homepage;
