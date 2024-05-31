import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Overlay.css';

function GuidingQuestionsOverlay({
    onSelectStep,
    onSetUserType,
    onClose,
    isChangingAnswers,
    answers,
    setAnswers,
    fromHomePage,
    questionIndex,
}) {
    const [userType, setUserType] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(questionIndex || 0);
    const [answersLocal, setAnswersLocal] = useState({});
    const [questions, setQuestions] = useState([]);
    const [showQuestions, setShowQuestions] = useState(false);
    const [focusIndex, setFocusIndex] = useState(null);

    const allQuestions = [
        {
            userType: 'Student',
            questions: [
                { text: 'Where are you coming from?', options: ['NonTarget University', 'Ivy League University'] },
                { text: 'What industry are you interested in?', options: ['Tech', 'Consulting', 'Banking'] },
            ]
        },
        {
            userType: 'Coach',
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

    useEffect(() => {
        if (questionIndex !== null) {
            setCurrentQuestionIndex(questionIndex);
        }
    }, [questionIndex]);

    useEffect(() => {
        if (userType) {
            const foundQuestions = allQuestions.find(q => q.userType === userType).questions;
            setQuestions(foundQuestions);
            setAnswersLocal(answers);
            setCurrentQuestionIndex(questionIndex);
            setShowQuestions(true);
        }
    }, [userType, questionIndex]);

    const handleUserTypeSelection = (type) => {
        setUserType(type);
        onSetUserType(type);
        const foundQuestions = allQuestions.find(q => q.userType === type).questions;
        setQuestions(foundQuestions);
        setCurrentQuestionIndex(0);
        setAnswersLocal({});
        setShowQuestions(true);
        setFocusIndex(0);
    };

    const handleAnswerSelection = (answer) => {
        const updatedAnswers = { ...answersLocal, [questions[currentQuestionIndex].text]: answer };
        setAnswersLocal(updatedAnswers);
        setAnswers(updatedAnswers);
        setFocusIndex(currentQuestionIndex);
        setTimeout(() => {
            setFocusIndex(null);
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
            } else {
                setShowQuestions(false);
                onSelectStep(1);
            }
        }, 1000);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        const updatedAnswers = { ...answersLocal, [name]: value };
        setAnswersLocal(updatedAnswers);
        setAnswers(updatedAnswers);
    };

    const handleConfirm = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setShowQuestions(false);
            onSelectStep(1);
        }
    };

    const handleBack = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        } else {
            setUserType(null);
            setShowQuestions(false);
        }
    };

    return (
        <div className="overlay-container">
            <div className="overlay">
                {isChangingAnswers && (
                    <button className="close-button" onClick={onClose}>X</button>
                )}
                {fromHomePage && (
                    <div className="back-to-home-overlay">
                        <Link to="/" className="return-button">Return Home</Link>
                    </div>
                )}
                {!userType && (
                    <div className="question-container">
                        <p>Please select your Journey:</p>
                        <div className="options-container">
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
                    </div>
                )}
                {userType && showQuestions && (
                    <>
                        <p>{questions[currentQuestionIndex].text}</p>
                        {questions[currentQuestionIndex].hasOwnProperty('options') ? (
                            <div className="options-container">
                                {questions[currentQuestionIndex].options.map((option, index) => (
                                    <label key={index}>
                                        <input
                                            type="radio"
                                            name={questions[currentQuestionIndex].text}
                                            value={option}
                                            checked={option === answersLocal[questions[currentQuestionIndex].text]}
                                            onChange={() => handleAnswerSelection(option)}
                                        />
                                        <div className="option-card" style={{
                                            backgroundColor: option === answersLocal[questions[currentQuestionIndex].text] && focusIndex === currentQuestionIndex ? '#182C63' : '#fff',
                                            color: option === answersLocal[questions[currentQuestionIndex].text] && focusIndex === currentQuestionIndex ? 'white' : '#182C63',
                                            border: `2px solid ${option === answersLocal[questions[currentQuestionIndex].text] && focusIndex === currentQuestionIndex ? '#182C63' : '#182C63'}`,
                                            transform: option === answersLocal[questions[currentQuestionIndex].text] && focusIndex === currentQuestionIndex ? 'scale(1.1)' : 'none',
                                            transition: 'all 0.3s ease'
                                        }}>{option}</div>
                                    </label>
                                ))}
                            </div>
                        ) : (
                            <div className='text-input-container'>
                                <input
                                    type="text"
                                    name={questions[currentQuestionIndex].text}
                                    value={answersLocal[questions[currentQuestionIndex].text] || ''}
                                    onChange={handleInputChange}
                                    onKeyDown={(e) => { if (e.key === 'Enter') handleConfirm(); }}
                                    required
                                />
                                <button onClick={handleConfirm} disabled={!answersLocal[questions[currentQuestionIndex].text]}>
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
