import React, { useState } from 'react';
import './programcomponents.css';
import speakingEngagement from '../assets/images/speaking-engagement.jpg';
import linkedinRebrand from '../assets/images/linkedin-rebrand.jpg';
import candidateReadiness from '../assets/images/candidate readiness.jpg';
import interviewPrep from '../assets/images/interview prep.jpg';

const ProgramComponents = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(null); // New state to track direction

  const infoBlocks = [
    {
      title: '#1 - Speaking Engagements',
      details: 'Professional speaking engagements foster partnerships with non-target universities and provide industry insights.',
      image: speakingEngagement,
      content: (
        <>
          <div className='focus-box'>
            <h2 className='list-title'>Our Focus</h2>
            <ul className='list'>
              <li>Hosting speaking engagements with industry leaders.</li>
              <li>Fostering professional partnerships.</li>
              <li>Providing valuable industry insights.</li>
            </ul>
          </div>
          <div className='importance-box'>
            <h2 className='list-title'>Importance</h2>
            <p>Engaging with industry professionals helps students gain valuable insights, build networks, and better understand their chosen fields.</p>
          </div>
        </>
      )
    },
    {
      title: '#2 - Resume Rebrand',
      details: 'Experts with over 10 years of experience optimize students\' resumes to give them the best chances for success.',
      image: linkedinRebrand,
      content: (
        <>
          <div className='focus-box'>
            <h2 className='list-title'>Our Focus</h2>
            <ul className='list'>
              <li>LinkedIn profile optimization for professional appearance and completeness.</li>
              <li>Highlighting skills, accomplishments, and experiences relevant to target industries.</li>
            </ul>
          </div>
          <div className='importance-box'>
            <h2 className='list-title'>Importance</h2>
            <p>Optimized LinkedIn profiles and resumes increase students' visibility to potential employers and improve their chances of securing job opportunities.</p>
          </div>
        </>
      )
    },
    {
      title: '#3 - Interview Preparation',
      details: 'Students receive mock interviews and feedback from current professionals to enhance their readiness.',
      image: interviewPrep,
      content: (
        <>
          <div className='focus-box'>
            <h2 className='list-title'>Our Focus</h2>
            <ul className='list'>
              <li>Mock Interviews and personalized feedback.</li>
              <li>Training on effective communication and storytelling.</li>
            </ul>
          </div>
          <div className='importance-box'>
            <h2 className='list-title'>Importance</h2>
            <p>Interview preparation is essential for showcasing one's skills and experiences, demonstrating fit for the role, and ultimately securing the job or internship.</p>
          </div>
        </>
      )
    },
    {
      title: '#4 - Candidate Readiness',
      details: 'Experts with over 10 years of experience optimize students\' LinkedIn profiles and resumes.',
      image: candidateReadiness,
      content: (
        <>
          <div className='focus-box'>
            <h2 className='list-title'>Our Focus</h2>
            <p>Create the most attractive candidates for the most superior opportunities in tech, consulting, and banking.</p>
          </div>
          <div className='importance-box'>
            <h2 className='list-title'>Importance</h2>
            <p>Eliminate the gap in recruiting ambitious students at non-target universities.</p>
          </div>
        </>
      )
    }
  ];

  const handleNext = () => {
    if ('vibrate' in navigator) navigator.vibrate(50); // Haptic feedback
    setDirection('right'); // Set direction
    setTimeout(() => {
      setActiveIndex((activeIndex + 1) % infoBlocks.length);
    }, 300); // Adjust this delay to match the CSS transition duration
  };

  const handlePrev = () => {
    if ('vibrate' in navigator) navigator.vibrate(50); // Haptic feedback
    setDirection('left'); // Set direction
    setTimeout(() => {
      setActiveIndex((activeIndex - 1 + infoBlocks.length) % infoBlocks.length);
    }, 300); // Adjust this delay to match the CSS transition duration
  };

  return (
    <section className="program-components">
      <div className="title-with-arrows">
        {/* Left Arrow with Wrapper */}
        <div className="arrow-wrapper">
          <div className="arrow left" onClick={handlePrev}>
            <span>&lt;</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="section-title">Our Ivy League Recruiting Process</h1>

        {/* Right Arrow with Wrapper */}
        <div className="arrow-wrapper">
          <div className="arrow right" onClick={handleNext}>
            <span>&gt;</span>
          </div>
        </div>
      </div>

      <div className="components-container">
        <div className={`left-column slide-${direction}`}>
          <div className={`info-block active`}>
            <h3>{infoBlocks[activeIndex].title}</h3>
            <p>{infoBlocks[activeIndex].details}</p>
            <div className='img-box'>
              <img 
                src={infoBlocks[activeIndex].image} 
                alt={infoBlocks[activeIndex].title} 
                className='info-image visible'
              />
            </div>
          </div>
        </div>

        <div className={`right-column slide-${direction}`}>
          <div className='focus-box'>
            <h2 className='list-title'>Our Focus</h2>
            <ul className='list'>
              {infoBlocks[activeIndex].content.props.children[0].props.children[1].props.children}
            </ul>
          </div>
          <div className='importance-box'>
            <h2 className='list-title'>Importance</h2>
            <p>{infoBlocks[activeIndex].content.props.children[1].props.children[1]}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramComponents;
