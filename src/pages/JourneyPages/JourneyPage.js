import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './JourneyPage.css';

import ProgressSteps from '../../components/Individual_Parts/ProgressSteps';

import BannerImage from '../../assets/images/speaker-event.jpg';

// Import step components
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

import GuidingQuestionsOverlay from './Overlay';

function JourneyPage() {
  const [showOverlay, setShowOverlay] = useState(true);
  const [selectedStep, setSelectedStep] = useState(0);
  const [userType, setUserType] = useState(null);

  const handleSelectStep = (step) => {
    setShowOverlay(false);
    setSelectedStep(step);
  };

  const handleSetUserType = (type) => {
    setUserType(type);
    setSelectedStep(0);
  };

  const handleSwitchJourney = (newUserType) => {
    setUserType(newUserType);
    setSelectedStep(0);
  };

  const handleUpdate = (updatedUserType, updatedStep) => {
    setUserType(updatedUserType);
    setSelectedStep(updatedStep);
  };
  
  const userTypeDisplay = userType ? `${userType.charAt(0).toUpperCase() + userType.slice(1)}'s Journey` : '';


  return (
    <div className="JourneyPageContainer">
      {showOverlay && (
        <GuidingQuestionsOverlay
          onSelectStep={handleSelectStep}
          onSetUserType={handleSetUserType}
          onClose={() => setShowOverlay(false)}
        />
      )}

        <div className="header-button-container">
            <h2 className="journey-header">{userTypeDisplay}</h2>
            <div className="ChangeButton">
                <button onClick={() => setShowOverlay(true)}>Change Answers</button>
            </div>
        </div>


      {userType !== null && (
        <div>
          <ProgressSteps
            userType={userType}
            selectedStep={selectedStep}
            onSwitchJourney={handleSwitchJourney}
            onUpdate={handleUpdate}
          />

          <div className="step-content">
            {userType === 'student' && selectedStep === 1 && <StudentAbout />}
            {userType === 'student' && selectedStep === 2 && <CorporatePartners />}
            {userType === 'student' && selectedStep === 3 && <StudentApplication />}
            
            {userType === 'partner' && selectedStep === 1 && <PartnerAbout />}
            {userType === 'partner' && selectedStep === 2 && <BuddySystem />}
            {userType === 'partner' && selectedStep === 3 && <PartnerApplication />}
            
            {userType === 'company' && selectedStep === 1 && <CompanyAbout />}
            {userType === 'company' && selectedStep === 2 && <Talent />}
            {userType === 'company' && selectedStep === 3 && <InvestmentPartnership />}
            {userType === 'company' && selectedStep === 4 && <CompanyApplication />}
          </div>
        </div>
      )}
    </div>
  );
}

export default JourneyPage;
