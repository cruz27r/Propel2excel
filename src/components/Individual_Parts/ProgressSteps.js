import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './ProgressSteps.css';

const ProgressSteps = ({
    userType,
    selectedStep,
    onSelectStep,
    answers,
    onAnswerClick,
    openOverlayWithQuestion,
}) => {
    const stepsByUserType = {
        Student: ["About P2E", "Coaches Represented", "Application"],
        Coach: ["About P2E", "Coaching System", "Application"],
        Company: ["About P2E", "Talent", "Investment Partnership", "Application"]
    };

    const steps = userType ? stepsByUserType[userType] : [];

    const [currentStep, setCurrentStep] = useState(selectedStep - 1);
    const [displayedAnswers, setDisplayedAnswers] = useState([]);
    const [showAnswers, setShowAnswers] = useState(false);

    useEffect(() => {
        setCurrentStep(selectedStep - 1);
    }, [selectedStep]);

    useEffect(() => {
        setDisplayedAnswers(formatAnswers());
    }, [answers, userType]);

    const handleStepSelection = (index) => {
        onSelectStep(index + 1);
    };

    const handleNext = () => {
        if (selectedStep < steps.length) {
            onSelectStep(selectedStep + 1);
        }
    };

    const handlePrev = () => {
        if (selectedStep > 1) {
            onSelectStep(selectedStep - 1);
        }
    };

    const handleAnswerClick = (question, index) => {
        onAnswerClick(question, index);
        openOverlayWithQuestion(index);
    };

    const formatAnswers = () => {
        if (!answers || Object.keys(answers).length === 0) {
            return null;
        }

        const userTypeDisplay = (
            <span key="userType" className="user-type-journey" onClick={() => handleAnswerClick('userType', 0)}>
                {userType}'s Journey&nbsp;-&nbsp;
            </span>
        );

        const filteredAnswers = Object.entries(answers).filter(([question]) => question !== 'userType');

        const answerElements = filteredAnswers.map(([question, answer], index) => (
            <span key={question} onClick={() => handleAnswerClick(question, index + 1)} data-index={index + 1}>
                {answer}
            </span>
        ));

        return [userTypeDisplay, ...answerElements];
    };

    const toggleAnswers = () => {
        setShowAnswers(!showAnswers);
    };

    return (
        <div className="steps-container">
            <div className="row">
                <div className="answers-container">
                    <button className="show-answers-button" onClick={toggleAnswers}>
                        {showAnswers ? 'Hide Answers' : 'Show Answers'}
                    </button>
                    <div className={`formatted-answers ${showAnswers ? 'show' : 'hide'}`}>
                        {displayedAnswers}
                    </div>
                </div>
                <div className="steps-area">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`step ${index === selectedStep - 1 ? 'active-step' : ''}`}
                            onClick={() => handleStepSelection(index)}
                        >
                            {step}
                        </div>
                    ))}
                </div>
            </div>
            <div className="button-container">
                <button className="button" onClick={handlePrev} disabled={selectedStep === 1}>Prev</button>
                <button className="button" onClick={handleNext} disabled={selectedStep === steps.length}>Next</button>
            </div>
        </div>
    );
};

ProgressSteps.propTypes = {
    userType: PropTypes.string.isRequired,
    selectedStep: PropTypes.number.isRequired,
    onSelectStep: PropTypes.func.isRequired,
    answers: PropTypes.object.isRequired,
    onAnswerClick: PropTypes.func.isRequired,
    openOverlayWithQuestion: PropTypes.func.isRequired,
};

export default ProgressSteps;
