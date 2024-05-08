import React, { useState, useEffect } from 'react';
import './ProgressSteps.css';

const ProgressSteps = ({
    userType,
    onSelectStep,
    answers,
    onAnswerClick,  // Handles individual answer clicks
    onChangeAnswers, // New prop to handle the request to change answers
}) => {
    const [currentStep, setCurrentStep] = useState(0);

    const stepsByUserType = {
        Student: ["About P2E", "Corporate Partners", "Application"],
        Buddy: ["About P2E", "Buddy System", "Application"],
        Company: ["About P2E", "Talent", "Investment Partnership", "Application"]
    };

    const steps = userType ? stepsByUserType[userType] : [];

    useEffect(() => {
        setCurrentStep(0);
    }, [userType]);

    const handleStepClick = (index) => {
        setCurrentStep(index);
        onSelectStep(index + 1);
    };

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
            onSelectStep(currentStep + 2);
        }
    };

    const handlePrev = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
            onSelectStep(currentStep);
        }
    };

    const formatAnswers = () => {
        if (!answers || Object.keys(answers).length === 0) {
            return null;
        }

        const userTypeDisplay = (
            <span key="userType" className="user-type-journey" onClick={() => onAnswerClick('userType')}>
                {userType}'s Journey&nbsp;-&nbsp;
            </span>
        );

        const answerElements = Object.entries(answers).map(([question, answer]) => (
            <span key={question} onClick={() => onAnswerClick(question)}>
                {answer}
            </span>
        ));

        return [userTypeDisplay, ...answerElements];
    };

    return (
        <div className="steps-container">
            <div className="row">
                <div className="answers-container">
                <button className="button" onClick={onChangeAnswers}>Change Answers</button>
                    {formatAnswers()}
                </div>
                <div className="steps-area">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`step ${index === currentStep ? 'active-step' : ''}`}
                            onClick={() => handleStepClick(index)}
                        >
                            {step}
                        </div>
                    ))}
                </div>
            </div>
            <div className="row">
                <button className="button" onClick={handlePrev} disabled={currentStep === 0}>Prev</button>
                <button className="button" onClick={handleNext} disabled={currentStep === steps.length - 1}>Next</button>
            </div>
        </div>
    );
};

export default ProgressSteps;
