import React, { useState } from 'react';
import './JourneyPage.css';
import ProgressSteps from '../../components/Individual_Parts/ProgressSteps';
import GuidingQuestionsOverlay from './Overlay';
import StudentAbout from '../../components/StepContent/Student/AboutP2E-Student';
import CorporatePartners from '../../components/StepContent/Student/CorporatePartnerStep';
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

  const handleChangeAnswersClick = (question) => {
    setShowOverlay(true);
    setIsChangingAnswers(true);
    // Logic to handle changing the answer for the clicked question
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
    setIsChangingAnswers(false);
  };

  const formatAnswers = () => {
    if (Object.keys(answers).length === 0) {
      return ''; // Return an empty string if no answers are selected
    }

    const formattedAnswers = Object.entries(answers).map(([question, answer]) => (
      <span key={question} onClick={() => handleChangeAnswersClick(question)}>
        {answer}
      </span>
    ));

    return (
      <>
        {userType}'s Journey: {formattedAnswers.reduce((prev, curr) => [prev, '/', curr])}
      </>
    );
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
        />
      )}

      <div className="header-button-container">
        <div className="ChangeButton">
          <button onClick={handleChangeAnswersClick}>Change Answers</button>
          <div className="AnswersDisplay">
            {formatAnswers()}
          </div>
        </div>
      </div>

      {userType !== null && (
        <div>
          <ProgressSteps
            userType={userType}
            selectedStep={selectedStep}
            onSelectStep={setSelectedStep}
            onSwitchJourney={handleSwitchJourney}
          />

          <div className="step-content">
            {userType === 'Student' && selectedStep === 1 && <StudentAbout />}
            {userType === 'Student' && selectedStep === 2 && <CorporatePartners />}
            {userType === 'Student' && selectedStep === 3 && <StudentApplication />}
            {userType === 'Buddy' && selectedStep === 1 && <PartnerAbout />}
            {userType === 'Buddy' && selectedStep === 2 && <BuddySystem />}
            {userType === 'Buddy' && selectedStep === 3 && <PartnerApplication />}
            {userType === 'Company' && selectedStep === 1 && <CompanyAbout />}
            {userType === 'Company' && selectedStep === 2 && <Talent />}
            {userType === 'Company' && selectedStep === 3 && <InvestmentPartnership />}
            {userType === 'Company' && selectedStep === 4 && <CompanyApplication />}
          </div>
        </div>
      )}
    </div>
  );
}

export default JourneyPage;
