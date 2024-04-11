import React from 'react';
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
`;

const StepWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const StepStyle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${({ step, selected }) =>
    step === 'completed' || selected ? '#182c63' : '#f3e7f3'};
  transition: background-color 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StepCount = styled.span`
  font-size: 28px;
  color: #ffffff;
`;

const StepsLabelContainer = styled.div`
  position: absolute;
  top: 120px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 -15px;
  margin-top: 100px;
`;

const StepLabel = styled.span`
  font-size: 22px; /* Increased font size */
  font-weight: bold; /* Thicker font */
  color: #182c63;
  &:hover {
    background-color: #f3e7f3; /* Highlighting background on hover */
    border-radius: 5px; /* Optional: add border radius for rounded corners */
    padding: 5px; /* Optional: add padding for better visual effect */
  }
`;

const ButtonStyle = styled.button`
  border-radius: 4px;
  border: 0;
  background: #182c63;
  color: #ffffff;
  cursor: pointer;
  padding: 10px; /* Increased padding for larger button */
  font-size: 18px; /* Increased font size */
  font-weight: bold; /* Thicker font */
  width: 100px; /* Adjusted width for larger button */
  &:active {
    transform: scale(0.98);
  }
  &:disabled {
    background: #f3e7f3;
    color: #000000;
    cursor: not-allowed;
  }
  &:hover {
    background-color: #6e217d; /* Darker background on hover */
    color: #ffffff; /* Optional: change text color on hover */
  }
`;

const ProgressSteps = ({ userType, selectedStep, onSelectStep, onSwitchJourney }) => {
  const steps = {
    Student: ['About P2E', 'Corporate Partners', 'Application'],
    Buddy: ['About P2E', 'Buddy System', 'Application'],
    Company: ['About P2E', 'Talent', 'Investment Partnership', 'Application'],
  };

  const handleNextStep = () => {
    if (selectedStep < steps[userType].length) {
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
      <StepContainer>
        {steps[userType].map((label, index) => (
          <StepWrapper key={index}>
            <StepStyle
              step={selectedStep > index ? 'completed' : 'incomplete'}
              selected={selectedStep === index + 1}
            >
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
        {selectedStep === steps[userType].length && (
          <ButtonStyle onClick={onSwitchJourney}>Switch Journey</ButtonStyle>
        )}
        <ButtonStyle
          onClick={handleNextStep}
          disabled={selectedStep === steps[userType].length}
        >
          Next
        </ButtonStyle>
      </ButtonsContainer>
    </MainContainer>
  );
};

export default ProgressSteps;
