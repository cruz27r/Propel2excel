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
  const [questionIndex, setQuestionIndex] = useState(0); // New state to track question index

  const industryInterest = answers['What industry are you interested in?'] || 'Tech'; // Default to 'Tech' if not answered

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
    // When changing answers, set fromHomePage to false
    setFromHomePage(false);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
    setIsChangingAnswers(false);
    // When closing the overlay, set fromHomePage back to true
    setFromHomePage(true);
  };

  const handleAnswerClick = (question) => {
    setShowOverlay(true);
    setIsChangingAnswers(true);
    // Specify the question associated with the clicked answer
    setFromHomePage(false);
    // Logic to handle opening the overlay with the specific question
  };

  const formatAnswers = () => {
    if (Object.keys(answers).length === 0) {
      return ''; // Return an empty string if no answers are selected
    }

    const formattedAnswers = Object.entries(answers).map(([question, answer]) => (
      <span key={question} onClick={() => handleAnswerClick(question)}>
        {answer}
      </span>
    ));

    return (
      <>
        {userType}'s Journey: {formattedAnswers.reduce((prev, curr) => [prev, '/', curr])}
      </>
    );
  };

  const handlePreviousStep = () => {
    if (selectedStep > 0) {
      setSelectedStep((prevStep) => prevStep - 1);
    }
  };

  const handleNextStep = () => {
    // Check the max step based on userType
    const maxStep = (userType === 'Student' || userType === 'Buddy') ? 3 : 4;
    if (selectedStep < maxStep) {
      setSelectedStep((prevStep) => prevStep + 1);
    }
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
          fromHomePage={fromHomePage} // Pass the value of fromHomePage to the overlay
          questionIndex={questionIndex} // Pass the questionIndex state
        />
      )}

      <div className="header-button-container">
        <div className="ChangeButton">
          {/* <button onClick={handleChangeAnswersClick}>Change Answers</button> */}
          <div className="AnswersDisplay">
            {/* {formatAnswers()} */}
          </div>
        </div>
      </div>

      {userType !== null && (
        <div>
          <ProgressSteps
            userType={userType}
            selectedStep={selectedStep}
            onSelectStep={handleSelectStep}
            onSwitchJourney={handleSwitchJourney}
            answers={answers}
            onAnswerClick={handleAnswerClick}
            onChangeAnswers={handleChangeAnswersClick} // Passing the function to handle answer changes
          />

          <div className="step-content">
            {userType === 'Student' && selectedStep === 1 && <StudentAbout />}
            {userType === 'Student' && selectedStep === 2 && (
              <>
                {console.log("Passing selectedCategory to CorporatePartnersPage:", industryInterest)}
                <CorporatePartnersPage selectedCategory={industryInterest} />
              </>
            )}
            {userType === 'Student' && selectedStep === 3 && <StudentApplication />}
            {userType === 'Buddy' && selectedStep === 1 && <PartnerAbout />}
            {userType === 'Buddy' && selectedStep === 2 && <BuddySystem />}
            {userType === 'Buddy' && selectedStep === 3 && <PartnerApplication />}
            {userType === 'Company' && selectedStep === 1 && <CompanyAbout />}
            {userType === 'Company' && selectedStep === 2 && <Talent />}
            {userType === 'Company' && selectedStep === 3 && <InvestmentPartnership />}
            {userType === 'Company' && selectedStep === 4 && <CompanyApplication />}
          </div>

          <div className="navigation-buttons">
            <button className="button" onClick={handlePreviousStep} disabled={selectedStep === 0}>
              Previous
            </button>
            <button className='button'
              onClick={handleNextStep}
              disabled={
                (userType === 'Student' && selectedStep === 3) ||
                (userType === 'Buddy' && selectedStep === 3) ||
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
