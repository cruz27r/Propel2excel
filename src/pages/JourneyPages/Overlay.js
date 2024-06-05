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
    initialQuestionIndex,
}) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(initialQuestionIndex);
    const [answersLocal, setAnswersLocal] = useState(answers || {});
    const [questions, setQuestions] = useState([]);
    const [focusIndex, setFocusIndex] = useState(null);

    const allQuestions = [
        { text: 'Please select your Journey:', options: ['Student', 'Coach', 'Company'], userTypeQuestion: true },
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

    const getQuestionsForUserType = (userType) => {
        const userTypeQuestions = allQuestions.find(q => q.userType === userType);
        if (userTypeQuestions) {
            return [allQuestions[0], ...userTypeQuestions.questions];
        }
        return [allQuestions[0]];
    };

    useEffect(() => {
        if (answers.userType) {
            setQuestions(getQuestionsForUserType(answers.userType));
        } else {
            setQuestions(getQuestionsForUserType(null));
        }
    }, [answers.userType]);

    useEffect(() => {
        setCurrentQuestionIndex(initialQuestionIndex);
    }, [initialQuestionIndex]);

    const handleUserTypeSelection = (type) => {
        const updatedAnswers = { ...answersLocal, userType: type };
        setAnswersLocal(updatedAnswers);
        setAnswers(updatedAnswers);
        onSetUserType(type);
        setQuestions(getQuestionsForUserType(type));
        setCurrentQuestionIndex(1);
        setFocusIndex(1);
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
                onClose();
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
            onClose();
        }
    };

    const handleBack = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const currentQuestion = questions[currentQuestionIndex];

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
                {currentQuestion && currentQuestion.userTypeQuestion ? (
                    <div className="question-container">
                        <p>{currentQuestion.text}</p>
                        <div className="options-container">
                            {currentQuestion.options.map((option) => (
                                <label key={option}>
                                    <input
                                        type="radio"
                                        name="userType"
                                        value={option}
                                        onChange={() => handleUserTypeSelection(option)}
                                    />
                                    <div className="option-card" style={{
                                        backgroundColor: option === answersLocal.userType && focusIndex === 0 ? '#182C63' : '#fff',
                                        color: option === answersLocal.userType && focusIndex === 0 ? 'white' : '#182C63',
                                        border: `2px solid ${option === answersLocal.userType && focusIndex === 0 ? '#182C63' : '#182C63'}`,
                                        transform: option === answersLocal.userType && focusIndex === 0 ? 'scale(1.1)' : 'none',
                                        transition: 'all 0.3s ease'
                                    }}>{option}</div>
                                </label>
                            ))}
                        </div>
                    </div>
                ) : currentQuestion ? (
                    <>
                        <p>{currentQuestion.text}</p>
                        {currentQuestion.options ? (
                            <div className="options-container">
                                {currentQuestion.options.map((option, index) => (
                                    <label key={index}>
                                        <input
                                            type="radio"
                                            name={currentQuestion.text}
                                            value={option}
                                            checked={option === answersLocal[currentQuestion.text]}
                                            onChange={() => handleAnswerSelection(option)}
                                        />
                                        <div className="option-card" style={{
                                            backgroundColor: option === answersLocal[currentQuestion.text] && focusIndex === currentQuestionIndex ? '#182C63' : '#fff',
                                            color: option === answersLocal[currentQuestion.text] && focusIndex === currentQuestionIndex ? 'white' : '#182C63',
                                            border: `2px solid ${option === answersLocal[currentQuestion.text] && focusIndex === currentQuestionIndex ? '#182C63' : '#182C63'}`,
                                            transform: option === answersLocal[currentQuestion.text] && focusIndex === currentQuestionIndex ? 'scale(1.1)' : 'none',
                                            transition: 'all 0.3s ease'
                                        }}>{option}</div>
                                    </label>
                                ))}
                            </div>
                        ) : (
                            <div className='text-input-container'>
                                <input
                                    type="text"
                                    name={currentQuestion.text}
                                    value={answersLocal[currentQuestion.text] || ''}
                                    onChange={handleInputChange}
                                    onKeyDown={(e) => { if (e.key === 'Enter') handleConfirm(); }}
                                    required
                                />
                                <button onClick={handleConfirm} disabled={!answersLocal[currentQuestion.text]}>
                                    Confirm
                                </button>
                            </div>
                        )}
                        <button className="back-button" onClick={handleBack}>Back</button>
                    </>
                ) : null}
            </div>
        </div>
    );
}

export default GuidingQuestionsOverlay;
