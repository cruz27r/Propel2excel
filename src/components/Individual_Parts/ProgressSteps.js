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
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }
  :after {
    content: '';
    position: absolute;
    background: #4a154b;
    height: 4px;
    width: ${({ width }) => width};
    top: 50%;
    transition: 0.4s ease;
    transform: translateY(-50%);
    left: 0;
  }
`;

const StepWrapper = styled.div`
  position: relative;
  z-index: 1;
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
  top: 66px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StepLabel = styled.span`
  font-size: 19px;
  color: #4a154b;
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
  -ms-transform: scaleX(-1) rotate(-46deg); /* IE 9 */
  -webkit-transform: scaleX(-1) rotate(-46deg); /* Chrome, Safari, Opera */
  transform: scaleX(-1) rotate(-46deg);
`;

const ProgressSteps = ({ onUpdate }) => {
  const [userType, setUserType] = React.useState('student');
  const [activeStep, setActiveStep] = React.useState(1);

  useEffect(() => {
    // Notify the parent component about updates
    onUpdate(userType, activeStep);
  }, [userType, activeStep, onUpdate]);

  const nextStep = () => setActiveStep((prev) => prev + 1);
  const prevStep = () => setActiveStep((prev) => prev - 1);
  const switchJourney = () => {
    const nextUserType = userType === 'student' ? 'partner' : userType === 'partner' ? 'company' : 'student';
    setUserType(nextUserType);
    setActiveStep(1);
  };

  // Simplified for brevity, but you'd map over your userType specific steps here
  const steps = {
    student: ["About P2E", "Corporate Partners", "Application"],
    partner: ["About P2E", "Buddy System", "Application"],
    company: ["About P2E", "Talent", "Investment Partnership", "Application"]
  };

  const totalSteps = steps[userType].length;
  const width = `${(100 / totalSteps) * activeStep}%`;

  return (
    <MainContainer>
      <StepContainer width={width}>
        {steps[userType].map((label, index) => (
          <StepWrapper key={index}>
            <StepStyle step={activeStep > index ? 'completed' : 'incomplete'}>
              <StepCount>{index + 1}</StepCount>
            </StepStyle>
            <StepsLabelContainer>
              <StepLabel>{label}</StepLabel>
            </StepsLabelContainer>
          </StepWrapper>
        ))}
      </StepContainer>
      <ButtonsContainer>
        <ButtonStyle onClick={prevStep} disabled={activeStep === 1}>Previous</ButtonStyle>
        {activeStep === totalSteps && (
          <ButtonStyle onClick={switchJourney}>Switch Journey</ButtonStyle>
        )}
        <ButtonStyle onClick={nextStep} disabled={activeStep === totalSteps}>Next</ButtonStyle>
      </ButtonsContainer>
    </MainContainer>
  );
};

export default ProgressSteps;
