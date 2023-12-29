import React, { useState } from 'react';
import './interviewPrep.css';
import interviewTipsImage from '../../../assets/images/networking_table.jpg'; // Update the path to your image
import bannerImage from '../../../assets/images/networking_table.jpg'; // Update the path to your static banner image

function InterviewPrep() {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (index) => {
    setExpandedSections(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  const tips = [
    {
      title: "Understand the Job Description",
      content: "Make sure you thoroughly understand the job description and how your skills match the requirements.",
      image: interviewTipsImage
    },
    {
      title: "Research the Company",
      content: "Investigate the company's background and the industry to show your interest and preparation during the interview.",
      image: interviewTipsImage
    },
    {
      title: "Prepare Your Questions",
      content: "Prepare thoughtful questions for your interviewer, showing your interest in the role and your strategic thinking skills.",
      image: interviewTipsImage
    },
    {
      title: "Dress Appropriately",
      content: "Dress for success. Ensure your attire is appropriate for the company culture and the position you're applying for.",
      image: interviewTipsImage
    },
    {
      title: "Practice Your Answers",
      content: "Practice your responses to common interview questions, but be prepared to adapt your answers to the conversation.",
      image: interviewTipsImage
    },
    {
      title: "Understand the Job Description",
      content: "Make sure you thoroughly understand the job description and how your skills match the requirements.",
      image: interviewTipsImage
    },
    {
      title: "Research the Company",
      content: "Investigate the company's background and the industry to show your interest and preparation during the interview.",
      image: interviewTipsImage
    },
    {
      title: "Prepare Your Questions",
      content: "Prepare thoughtful questions for your interviewer, showing your interest in the role and your strategic thinking skills.",
      image: interviewTipsImage
    },
    {
      title: "Dress Appropriately",
      content: "Dress for success. Ensure your attire is appropriate for the company culture and the position you're applying for.",
      image: interviewTipsImage
    },
    {
      title: "Practice Your Answers",
      content: "Practice your responses to common interview questions, but be prepared to adapt your answers to the conversation.",
      image: interviewTipsImage
    },
    // Add more tips as needed...
  ];

  return (
    <div className="interview-prep-container">
      <div className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
          <h1 className="banner-title">Interview Preparation</h1>
      </div>

      <div className="page-description">
        <p>
          Preparing for an interview can be daunting, but with the right guidance, you can approach it with confidence. This page serves as a starting point for those looking to prepare effectively for their interviews. Learn about essential pre-interview preparations, how different fields have varying requirements, and how to tailor your approach accordingly.
        </p>
        <p>
          Discover key strategies for researching and preparing for your specific role, understand common mistakes and tendencies to avoid, and learn about potential deal breakers in interviews. Our comprehensive guide will equip you with the knowledge to make a great impression and excel in your interviews.
        </p>
      </div>

      {tips.map((tip, index) => (
        <div key={index} className="content-section">
          <div className="section-header" onClick={() => toggleSection(index)}>
            <h2>{tip.title}</h2>
            <div className={`arrow ${expandedSections[index] ? 'up' : 'down'}`}>&#9662;</div>
          </div>
          {expandedSections[index] && (
            <div className="section-content">
              <img src={tip.image} alt="Interview Tips" className="content-image" />
              <p>{tip.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default InterviewPrep;
