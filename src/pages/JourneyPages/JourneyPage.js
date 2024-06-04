import React, { useState } from 'react';
import './JourneyPage.css';
import ProgressSteps from '../../components/Individual_Parts/ProgressSteps';
import GuidingQuestionsOverlay from './Overlay';
import StudentAbout from '../../components/StepContent/Student/AboutP2E-Student';
import CorporatePartnersPage from '../../pages/CorporatePartners/CorporatePartners';
import StudentApplication from '../../components/StepContent/Student/Application-Student';
import PartnerAbout from '../../components/StepContent/Partner/AboutP2E-Partner';
import BuddySystem from '../../components/StepContent/Partner/BuddySystem';
import PartnerApplication from '../../components/StepContent/Partner/Application-Partner';
import CompanyAbout from '../../components/StepContent/Company/AboutP2E-Company';
import Talent from '../../components/StepContent/Company/Talent';
import InvestmentPartnership from '../../components/StepContent/Company/InvestmentPartnership';
import CompanyApplication from '../../components/StepContent/Company/Application-Company';

function JourneyPage() {
    const [showOverlay, setShowOverlay] = useState(true);
    const [isChangingAnswers, setIsChangingAnswers] = useState(false);
    const [selectedStep, setSelectedStep] = useState(0);
    const [userType, setUserType] = useState(null);
    const [answers, setAnswers] = useState({});
    const [fromHomePage, setFromHomePage] = useState(true); // Default value is true when loaded from homepage
    const [initialQuestionIndex, setInitialQuestionIndex] = useState(0);

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

    const handleSelectStep = (step) => {
        setShowOverlay(false);
        setSelectedStep(step);
    };

    const handleSetUserType = (type) => {
        setUserType(type);
        setSelectedStep(1);
    };

    const handleSwitchJourney = (newUserType) => {
        setUserType(newUserType);
        setSelectedStep(1);
    };

    const handleChangeAnswersClick = () => {
        setShowOverlay(true);
        setIsChangingAnswers(true);
        setFromHomePage(false);
    };

    const handleCloseOverlay = () => {
        setShowOverlay(false);
        setIsChangingAnswers(false);
        setFromHomePage(true);
    };

    const handleAnswerClick = (question, index) => {
        setShowOverlay(true);
        setIsChangingAnswers(true);
        setFromHomePage(false);
        setInitialQuestionIndex(index + 1); // Adjusting to match the question index
    };

    const handlePreviousStep = () => {
        if (selectedStep > 0) {
            setSelectedStep((prevStep) => prevStep - 1);
        }
    };

    const handleNextStep = () => {
        const maxStep = (userType === 'Student' || userType === 'Coach') ? 3 : 4;
        if (selectedStep < maxStep) {
            setSelectedStep((prevStep) => prevStep + 1);
        }
    };

    const openOverlayWithQuestion = (index) => {
        setShowOverlay(true);
        setInitialQuestionIndex(index);
    };

    return (
        <div className="JourneyPageContainer">
            {showOverlay && (
                <GuidingQuestionsOverlay
                    onSelectStep={handleSelectStep}
                    onSetUserType={handleSetUserType}
                    onClose={handleCloseOverlay}
                    isChangingAnswers={isChangingAnswers}
                    answers={answers}
                    setAnswers={setAnswers}
                    fromHomePage={fromHomePage}
                    initialQuestionIndex={initialQuestionIndex}
                />
            )}

            {userType !== null && (
                <div>
                    <ProgressSteps
                        userType={userType}
                        selectedStep={selectedStep}
                        onSelectStep={handleSelectStep}
                        answers={answers}
                        onAnswerClick={handleAnswerClick}
                        onChangeAnswers={handleChangeAnswersClick}
                        openOverlayWithQuestion={openOverlayWithQuestion} // Pass the function to open the overlay
                    />

                    <div className="step-content">
                        {userType === 'Student' && selectedStep === 1 && <StudentAbout />}
                        {userType === 'Student' && selectedStep === 2 && <CorporatePartnersPage selectedCategory={answers['What industry are you interested in?'] || 'Tech'} />}
                        {userType === 'Student' && selectedStep === 3 && <StudentApplication />}
                        {userType === 'Coach' && selectedStep === 1 && <PartnerAbout />}
                        {userType === 'Coach' && selectedStep === 2 && <BuddySystem />}
                        {userType === 'Coach' && selectedStep === 3 && <PartnerApplication />}
                        {userType === 'Company' && selectedStep === 1 && <CompanyAbout />}
                        {userType === 'Company' && selectedStep === 2 && <Talent />}
                        {userType === 'Company' && selectedStep === 3 && <InvestmentPartnership />}
                        {userType === 'Company' && selectedStep === 4 && <CompanyApplication />}
                    </div>

                    <div className="navigation-buttons">
                        <button className="button" onClick={handlePreviousStep} disabled={selectedStep === 0}>
                            Previous
                        </button>
                        <button className="button"
                            onClick={handleNextStep}
                            disabled={
                                (userType === 'Student' && selectedStep === 3) ||
                                (userType === 'Coach' && selectedStep === 3) ||
                                (userType === 'Company' && selectedStep === 4)
                            }
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default JourneyPage;
