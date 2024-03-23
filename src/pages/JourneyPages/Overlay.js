import React, { useState } from 'react';
import './Overlay.css';

function GuidingQuestionsOverlay({ onSelectStep, onSetUserType, onClose }) {
  const [userType, setUserType] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [questions, setQuestions] = useState([]);
  const [showQuestions, setShowQuestions] = useState(false);

  const allQuestions = [
    {
      userType: 'student',
      questions: [
        { text: 'Where are you coming from?', options: ['ivey', 'nonTarget'] },
        { text: 'What industry are you interested in?', options: ['tech', 'consulting', 'banking'] },
      ]
    },
    {
      userType: 'partner',
      questions: [
        { text: 'What industry are you in?', options: ['tech', 'consulting', 'banking'] },
        { text: 'What company are you part of?', input: true }
      ]
    },
    {
      userType: 'company',
      questions: [
        { text: 'What is your goal with Propel2Excel?', options: ['talent', 'partnership', 'investment'] }
      ]
    }
  ];

  const handleUserTypeSelection = (type) => {
    setUserType(type);
    onSetUserType(type);
    const foundQuestions = allQuestions.find(q => q.userType === type).questions;
    setQuestions(foundQuestions);
    setQuestionIndex(0);
    setAnswers({});
    setShowQuestions(true);
  };

  const handleAnswerSelection = (answer) => {
    setAnswers({ ...answers, [questions[questionIndex].text]: answer });
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setShowQuestions(false);
      onSelectStep(userType);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAnswers({ ...answers, [name]: value });
  };

  const handleConfirm = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setShowQuestions(false);
      onSelectStep(userType);
    }
  };

  const handleBack = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
    } else {
      setUserType(null);
      setQuestions([]);
    }
  };

  return (
    <div className="overlay-container">
      <div className="overlay">
        <h2>Welcome to Propel2Excel!</h2>
        {!userType && (
          <div>
            <p>Please select your user type:</p>
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
                />
                {questions[questionIndex].input && <button onClick={handleConfirm}>Confirm</button>}
              </div>
            )}
            <button onClick={handleBack}>Back</button>
          </>
        )}
      </div>
    </div>
  );
}

export default GuidingQuestionsOverlay;
