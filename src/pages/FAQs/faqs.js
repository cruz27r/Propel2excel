import React, { useState } from 'react';
import './faqs.css';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the registration process?",
      answer: "You can register through our online portal or at the event itself.",
    },
    {
      question: "Are there any discounts available?",
      answer: "Early bird registrants will receive a 10% discount. Group discounts are also available.",
    },
    {
      question: "Will the sessions be recorded?",
      answer: "Yes, sessions will be recorded and available for attendees after the event.",
    },
    // Add more FAQs as needed...
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <ul className="faq-list">
        {faqs.map((faq, index) => (
          <li key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className="arrow">{activeIndex === index ? '−' : '+'}</span>
            </button>
            <div className="faq-answer">
              {activeIndex === index && <p>{faq.answer}</p>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FAQ;
