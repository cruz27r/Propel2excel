import React, { useEffect } from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 16px;
`;

const StepContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
  position: relative;

  :before {
    content: '';
    position: absolute;
    background: #f3e7f3;
    height: 4px;
    width: 10%;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }

  :after {
    content: '';
    position: absolute;
    background: #182c63;
    height: 4px;
    width: ${({ width }) => width};
    top: 50%;
    transition: 0.4s ease;
    transform: translateY(-50%);
    left: 0;
    visibility: ${({ showLine }) => (showLine ? 'visible' : 'hidden')};
  }

  :nth-child(2)::after {
    content: '';
    position: absolute;
    background: #182c63;
    height: 4px;
    width: 33.333%;
    top: 50%;
    transition: 0.4s ease;
    transform: translateY(-50%);
    left: 33.333%;
    visibility: ${({ showSecondLine }) => (showSecondLine ? 'visible' : 'hidden')};
  }

  :nth-child(3)::after {
    content: '';
    position: absolute;
    background: #182c63;
    height: 4px;
    width: 33.333%;
    top: 50%;
    transition: 0.4s ease;
    transform: translateY(-50%);
    left: 66.666%;
    visibility: ${({ showThirdLine }) => (showThirdLine ? 'visible' : 'hidden')};
  }
`;

const StepWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const StepStyle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #ffffff;
  border: 3px solid ${({ step }) => (step === 'completed' ? '#182c63' : '#f3e7f3')};
  transition: 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StepCount = styled.span`
  font-size: 28px;
  color: #182c63;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const StepsLabelContainer = styled.div`
  position: absolute;
  top: 120px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StepLabel = styled.span`
  font-size: 19px;
  color: #182c63;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 -15px;
  margin-top: 100px;
`;

const ButtonStyle = styled.button`
  border-radius: 4px;
  border: 0;
  background: #182c63;
  color: #ffffff;
  cursor: pointer;
  padding: 8px;
  width: 90px;
  :active {
    transform: scale(0.98);
  }
  :disabled {
    background: #f3e7f3;
    color: #000000;
    cursor: not-allowed;
  }
`;

const CheckMark = styled.div`
  font-size: 26px;
  font-weight: 600;
  color: #182c63;
  -ms-transform: scaleX(-1) rotate(-46deg); /* IE 9 */
  -webkit-transform: scaleX(-1) rotate(-46deg); /* Chrome, Safari, Opera */
  transform: scaleX(-1) rotate(-46deg);
`;

const ProgressSteps = ({ userType, selectedStep, onSelectStep, onSwitchJourney }) => {
    const steps = {
      Student: ['About P2E', 'Corporate Partners', 'Application'],
      Buddy: ['About P2E', 'Buddy System', 'Application'],
      Company: ['About P2E', 'Talent', 'Investment Partnership', 'Application'],
    };
  
    const totalSteps = steps[userType].length;
    const width = `${(100 / totalSteps) * selectedStep}%`;
    const showLine = selectedStep > 1;
    const showSecondLine = selectedStep > 2;
    const showThirdLine = selectedStep > 3 && totalSteps > 3;
  
    const handleNextStep = () => {
      if (selectedStep < totalSteps) {
        onSelectStep(selectedStep + 1);
      }
    };
  
    const handlePreviousStep = () => {
      if (selectedStep > 1) {
        onSelectStep(selectedStep - 1);
      }
    };
  
    return (
      <MainContainer>
        <StepContainer
          width={width}
          showLine={showLine}
          showSecondLine={showSecondLine}
          showThirdLine={showThirdLine}
        >
          {steps[userType].map((label, index) => (
            <StepWrapper key={index}>
              <StepStyle step={selectedStep > index ? 'completed' : 'incomplete'}>
                {selectedStep > index && <CheckMark>&#10003;</CheckMark>}
                <StepCount>{index + 1}</StepCount>
              </StepStyle>
              <StepsLabelContainer>
                <StepLabel>{label}</StepLabel>
              </StepsLabelContainer>
            </StepWrapper>
          ))}
        </StepContainer>
        <ButtonsContainer>
          <ButtonStyle onClick={handlePreviousStep} disabled={selectedStep === 1}>
            Previous
          </ButtonStyle>
          {selectedStep === totalSteps && (
            <ButtonStyle onClick={onSwitchJourney}>Switch Journey</ButtonStyle>
          )}
          <ButtonStyle onClick={handleNextStep} disabled={selectedStep === totalSteps}>
            Next
          </ButtonStyle>
        </ButtonsContainer>
      </MainContainer>
    );
  };
  
  export default ProgressSteps;
