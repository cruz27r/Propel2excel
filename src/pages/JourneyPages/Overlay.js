import React, { useState } from 'react';
import './Overlay.css';

function GuidingQuestionsOverlay({ onSelectStep, onSetUserType, onClose, isChangingAnswers, setAnswers }) {
  const [userType, setUserType] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswersLocal] = useState({});
  const [questions, setQuestions] = useState([]);
  const [showQuestions, setShowQuestions] = useState(false);

  const allQuestions = [
    {
      userType: 'Student',
      questions: [
        { text: 'Where are you coming from?', options: ['Ivey League University', 'NonTarget University'] },
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
  };

  const handleAnswerSelection = (answer) => {
    const updatedAnswers = { ...answers, [questions[questionIndex].text]: answer };
    setAnswersLocal(updatedAnswers);
    setAnswers(updatedAnswers); // Update answers in the parent component
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setShowQuestions(false);
      onSelectStep(1);
    }
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
          <button className="return-button" onClick={onClose}>Return</button>
        )}
        <h2>Welcome to Propel2Excel!</h2>
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
                <div className="option-card">{group.userType}</div>
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
                      checked={answers[questions[questionIndex].text] === option}
                      onChange={(e) => handleAnswerSelection(e.target.value)}
                    />
                    <div className="option-card">{option}</div>
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
                  required
                />
                <button onClick={handleConfirm} disabled={!answers[questions[questionIndex].text]}>
                  Confirm
                </button>
              </div>
            )}
            <button className="back-button" onClick={handleBack}>&#8592; Back</button>
          </>
        )}
      </div>
    </div>
  );
}

export default GuidingQuestionsOverlay;
