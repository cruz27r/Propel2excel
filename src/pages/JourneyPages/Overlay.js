import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Overlay.css';

function GuidingQuestionsOverlay({ onSelectStep, onSetUserType, onClose, isChangingAnswers, setAnswers, fromHomePage }) {
  const [userType, setUserType] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswersLocal] = useState({});
  const [questions, setQuestions] = useState([]);
  const [showQuestions, setShowQuestions] = useState(false);
  const [focusIndex, setFocusIndex] = useState(null);

  const allQuestions = [
    {
      userType: 'Student',
      questions: [
        { text: 'Where are you coming from?', options: ['NonTarget University', 'Ivey League University'] },
        { text: 'What industry are you interested in?', options: ['Tech', 'Consulting', 'Banking'] },
      ]
    },
    {
      userType: 'Buddy',
      questions: [
        { text: 'What industry are you in?', options: ['Tech', 'Consulting', 'Banking'] },
        { text: 'What company are you part of?', input: true }
      ]
    },
    {
      userType: 'Company',
      questions: [
        { text: 'What is your goal with Propel2Excel?', options: ['Talent', 'Partnership', 'Investment'] }
      ]
    }
  ];

  const handleUserTypeSelection = (type) => {
    setUserType(type);
    onSetUserType(type);
    const foundQuestions = allQuestions.find(q => q.userType === type).questions;
    setQuestions(foundQuestions);
    setQuestionIndex(0);
    setAnswersLocal({});
    setShowQuestions(true);
    setFocusIndex(0); // Focus on the selected user type question
  };

  const handleAnswerSelection = (answer) => {
    const updatedAnswers = { ...answers, [questions[questionIndex].text]: answer };
    setAnswersLocal(updatedAnswers);
    setAnswers(updatedAnswers); // Update answers in the parent component
    setFocusIndex(questionIndex); // Set the focus index to trigger the effect
    setTimeout(() => {
      setFocusIndex(null); // Reset the focus index after a delay
      if (questionIndex < questions.length - 1) {
        setQuestionIndex(questionIndex + 1);
      } else {
        setShowQuestions(false);
        onSelectStep(1);
      }
    }, 1000); // Delay for 1 second before moving to the next question
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updatedAnswers = { ...answers, [name]: value };
    setAnswersLocal(updatedAnswers);
    setAnswers(updatedAnswers); // Update answers in the parent component
  };

  const handleConfirm = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setShowQuestions(false);
      onSelectStep(1);
    }
  };

  const handleBack = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
    } else {
      setUserType(null);
      setShowQuestions(false); // Hide questions when going back to userType selection
    }
  };
  

  return (
    <div className="overlay-container">
      <div className="overlay">
        {/* Conditionally render the "Return" button if changing answers */}
        {isChangingAnswers && (
          <button className="close-button" onClick={onClose}>X</button>
        )}
        {fromHomePage && (
          <div className="back-to-home-overlay">
            <Link to="/" className="return-button">Return Home</Link>
          </div>
        )}
        {/* <h2>Welcome to Propel2Excel!</h2> */}
        {!userType && (
          <div>
            <p>Please select your Journey:</p>
            {allQuestions.map((group) => (
              <label key={group.userType}>
                <input
                  type="radio"
                  name="userType"
                  value={group.userType}
                  onChange={() => handleUserTypeSelection(group.userType)}
                />
                <div className="option-card" style={{
                  backgroundColor: group.userType === userType && focusIndex === 0 ? '#182C63' : '#fff',
                  color: group.userType === userType && focusIndex === 0 ? 'white' : '#182C63',
                  border: `2px solid ${group.userType === userType && focusIndex === 0 ? '#182C63' : '#182C63'}`,
                  transform: group.userType === userType && focusIndex === 0 ? 'scale(1.1)' : 'none',
                  transition: 'all 0.3s ease'
                }}>{group.userType}</div>
              </label>
            ))}
          </div>
        )}
        {userType && showQuestions && (
          <>
            <p>{questions[questionIndex].text}</p>
            {questions[questionIndex].hasOwnProperty('options') ? (
              <div className="options-container">
                {questions[questionIndex].options.map((option, index) => (
                  <label key={index}>
                    <input
                      type="radio"
                      name={questions[questionIndex].text}
                      value={option}
                      checked={option === answers[questions[questionIndex].text]}
                      onChange={() => handleAnswerSelection(option)}
                    />
                    <div className="option-card" style={{ 
                      backgroundColor: option === answers[questions[questionIndex].text] && focusIndex === questionIndex ? '#182C63' : '#fff',
                      color: option === answers[questions[questionIndex].text] && focusIndex === questionIndex ? 'white' : '#182C63',
                      border: `2px solid ${option === answers[questions[questionIndex].text] && focusIndex === questionIndex ? '#182C63' : '#182C63'}`,
                      transform: option === answers[questions[questionIndex].text] && focusIndex === questionIndex ? 'scale(1.1)' : 'none',
                      transition: 'all 0.3s ease'
                    }}>{option}</div>
                  </label>
                ))}
              </div>
            ) : (
              <div>
                <input
                  type="text"
                  name={questions[questionIndex].text}
                  value={answers[questions[questionIndex].text] || ''}
                  onChange={handleInputChange}
                  onKeyDown={(e) => { if (e.key === 'Enter') handleConfirm(); }} // Handle Enter/Return key press
                  required
                />
                <button onClick={handleConfirm} disabled={!answers[questions[questionIndex].text]}>
                  Confirm
                </button>
              </div>
            )}
            <button className="back-button" onClick={handleBack}>Back</button>
          </>
        )}
      </div>
    </div>
  );
}

export default GuidingQuestionsOverlay;
