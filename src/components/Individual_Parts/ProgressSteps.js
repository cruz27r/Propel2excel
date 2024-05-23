import React, { useState, useEffect } from 'react';
import './ProgressSteps.css';

const ProgressSteps = ({
    userType,
    selectedStep,
    onSelectStep,
    answers,
    onAnswerClick,
    onChangeAnswers,
}) => {
    const stepsByUserType = {
        Student: ["About P2E", "Coaches Represented", "Application"],
        Buddy: ["About P2E", "Buddy System", "Application"],
        Company: ["About P2E", "Talent", "Investment Partnership", "Application"]
    };

    const steps = userType ? stepsByUserType[userType] : [];

    const [currentStep, setCurrentStep] = useState(selectedStep - 1);

    useEffect(() => {
        setCurrentStep(selectedStep - 1);
    }, [selectedStep]);

    const handleStepClick = (index) => {
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

    const formatAnswers = () => {
        if (!answers || Object.keys(answers).length === 0) {
            return null;
        }

        const userTypeDisplay = (
            <span key="userType" className="user-type-journey" onClick={() => onAnswerClick('userType')}>
                {userType}'s Journey&nbsp;-&nbsp;
            </span>
        );

        const answerElements = Object.entries(answers)
            .filter(([_, answer]) => answer) // Filter out empty answers
            .map(([question, answer], index) => (
                <span key={question} onClick={() => onAnswerClick(question, index)} data-index={index}>
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
                    {formatAnswers() && (
                        <div className="formatted-answers">
                            {formatAnswers()}
                        </div>
                    )}
                </div>
                <div className="steps-area">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`step ${index === selectedStep - 1 ? 'active-step' : ''}`}
                            onClick={() => handleStepClick(index)}
                        >
                            {step}
                        </div>
                    ))}
                </div>
            </div>
            <div className="row">
                <button className="button" onClick={handlePrev} disabled={selectedStep === 1}>Prev</button>
                <button className="button" onClick={handleNext} disabled={selectedStep === steps.length}>Next</button>
            </div>
        </div>
    );
};

export default ProgressSteps;
