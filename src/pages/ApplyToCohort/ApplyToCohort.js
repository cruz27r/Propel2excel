import React from 'react';
import './ApplyToCohort.css'; // Importing the CSS file
// Placeholder paths for image and video
import exampleImage from '../../assets/images/zoom_in_on_laptop.jpg';
import exampleVideo from '../../assets/videos/test_networking_vid.mp4';

// Component for mission statement and service overview
const ServiceOverview = () => {
  return (
    <div className="service-overview">
      <h2>About Propel2Excel</h2>
      <p className="mission-statement">
        Propel2Excel is dedicated to empowering underrepresented students in business, aged 16-25, by providing a unique six-month coaching program. Our mission is to bridge the gap between potential and opportunity, offering access to invaluable resources, connections, and knowledge that pave the way for successful careers within the Fortune 100. We believe in nurturing talent and opening doors to opportunities that transform futures.
      </p>

      <img src={exampleImage} alt="About Propel2Excel" className="overview-image" />

      <h2>Our Services and Fellowship Program</h2>

      <section className="service">
        <h3>Speaking Engagements</h3>
        <p>Our speaking engagements connect fellows with industry leaders, providing a platform for inspiration, networking, and real-world insights. These engagements are pivotal in offering direct exposure to successful business practices and diverse professional experiences, helping fellows to expand their understanding and horizons.</p>
      </section>

      <section className="service">
        <h3>LinkedIn & Resume Rebrand</h3>
        <p>With the digital footprint being a key factor in career advancement, our LinkedIn & Resume Rebrand service ensures fellows present themselves effectively to potential employers. This comprehensive rebranding focuses on highlighting each fellow's unique strengths and accomplishments, making them stand out in the competitive job market.</p>
      </section>

      <section className="service">
        <h3>Interview Preparation</h3>
        <p>Our interview preparation sessions are tailored to build confidence and competence. Through mock interviews, personalized feedback, and strategy development, fellows are equipped with the skills needed to excel in high-stakes interview situations, significantly enhancing their chances of securing coveted positions.</p>
      </section>

      <video src={exampleVideo} controls className="overview-video" />
    </div>
  );
};

// Component for application form
const ApplicationForm = () => {
  return (
    <form className="application-form">
      <h2>Application for Propel2Excel Cohort</h2>
      <label>
        Full Name:
        <input type="text" name="fullName" required />
      </label>
      <label>
        Email Address:
        <input type="email" name="email" required />
      </label>
      <label>
        Current Academic Standing (GPA):
        <input type="text" name="gpa" required />
      </label>
      <label>
        Describe any leadership positions you have held:
        <textarea name="leadership" />
      </label>
      <label>
        List any business certifications you possess:
        <textarea name="certifications" />
      </label>
      <label>
        What are your short-term career goals (next 6-12 months)?
        <textarea name="shortTermGoals" />
      </label>
      <label>
        What do you hope to achieve by joining Propel2Excel?
        <textarea name="programGoals" />
      </label>
      <button type="submit">Submit Application</button>
    </form>
  );
};

// Main component for the Apply to Cohort page
const ApplyToCohort = () => {
  return (
    <div className="apply-to-cohort">
      <ServiceOverview />
      <ApplicationForm />
    </div>
  );
};

export default ApplyToCohort;
