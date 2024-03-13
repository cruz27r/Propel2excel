import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 16px;
`;

const StepContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
  position: relative;
  width: 100%;
  :after {
    content: '';
    position: absolute;
    background: #4a154b;
    height: 4px;
    width: ${({ width }) => width};
    top: calc(50% - 2px); /* Adjusted to half of the line height */
    transition: 0.4s ease;
    transform: translateY(50%);
    left: 0;
  }
`;

const StepWrapper = styled.div`
  flex: 1;
  text-align: center;
  position: relative;
  margin: 0 10px;
`;

const StepStyle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ffffff;
  border: 3px solid ${({ step }) => (step === 'completed' ? '#4A154B' : '#F3E7F3')};
  transition: 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const StepCount = styled.span`
  font-size: 19px;
  color: #f3e7f3;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const StepsLabelContainer = styled.div`
  position: absolute;
  top: 100px; /* Adjusted to provide space below the progress line */
  left: 50%;
  transform: translateX(-50%);
`;


const StepLabel = styled.span`
  font-size: 19px;
  color: #4a154b;
  @media (max-width: 600px) {
    font-size: 16px;
  }
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
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
  background: #4a154b;
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
  color: #4a154b;
  -ms-transform: scaleX(-1) rotate(-46deg);
  -webkit-transform: scaleX(-1) rotate(-46deg);
  transform: scaleX(-1) rotate(-46deg);
`;

const steps = [
  {
    label: 'Application',
    step: 1,
    description: 'This is the application step description.',
  },
  {
    label: 'Initial Coaching Session',
    step: 2,
    description: 'This is the initial coaching session step description.',
  },
  {
    label: 'Mentor Matching',
    step: 3,
    description: 'This is the mentor matching step description.',
  },
  {
    label: 'Resume Rebrand',
    step: 4,
    description: 'This is the resume rebrand step description.',
  },
  {
    label: 'LinkedIn Rebrand',
    step: 5,
    description: 'This is the LinkedIn rebrand step description.',
  },
  {
    label: 'Corporate Coach Interview Prep',
    step: 6,
    description: 'This is the corporate coach interview prep step description.',
  },
  {
    label: 'Corporate Reach Outs',
    step: 7,
    description: 'This is the corporate reach outs step description.',
  },
  {
    label: 'Matched With Job',
    step: 8,
    description: 'This is the matched with job step description.',
  },
];

const ProgressSteps = () => {
  const [activeStep, setActiveStep] = React.useState(1);

  const nextStep = () => {
    setActiveStep(activeStep + 1);
  };

  const prevStep = () => {
    setActiveStep(activeStep - 1);
  };

  const totalSteps = steps.length;

  const width = `${(100 / (totalSteps - 1)) * (activeStep - 1)}%`;

  return (
    <MainContainer>
      <StepContainer width={width}>
        {steps.map(({ step, label }) => (
          <StepWrapper key={step}>
            <StepStyle step={activeStep >= step ? 'completed' : 'incomplete'}>
              {activeStep > step ? (
                <CheckMark>L</CheckMark>
              ) : (
                <StepCount>{step}</StepCount>
              )}
            </StepStyle>
            <StepsLabelContainer>
              <StepLabel key={step}>{label}</StepLabel>
            </StepsLabelContainer>
          </StepWrapper>
        ))}
      </StepContainer>
      <ButtonsContainer>
        <ButtonStyle onClick={prevStep} disabled={activeStep === 1}>
          Previous
        </ButtonStyle>
        <ButtonStyle onClick={nextStep} disabled={activeStep === totalSteps}>
          Next
        </ButtonStyle>
      </ButtonsContainer>
      {activeStep === steps.length && (
        <p>{steps[activeStep - 1].description}</p>
      )}
    </MainContainer>
  );
};

export default ProgressSteps;
