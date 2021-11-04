import styled from 'styled-components';
import React from 'react';
import Stepper from 'react-stepper-horizontal'

const DEFAULT_STEPS = ['Bryan','At','Retool'];
const DEFAULT_COLORS = ['#CC0000'];


const HorizontalStepper = ({ triggerQuery, model, modelUpdate }) => {
  if (!(model.steps && typeof model.steps === 'object' && model.steps.length) ) { model['steps'] = DEFAULT_STEPS; }
  if (!(model.colors && typeof model.colors === 'object' && model.colors.length) ) { model['colors'] = DEFAULT_COLORS; }
  if (!(typeof model.active_step === 'number' && model.active_step > -1) ) { model['active_step'] = 0; }
  
  return (
    <StepperContainer>
      <Stepper 
        steps={ model.steps.map(s=>{return {title: s}}) } 
        activeStep={ model.active_step }
      />
    </StepperContainer>
  );
}

const StepperContainer = styled.div`
  width: 100%;
`

export default Retool.connectReactComponent(HorizontalStepper);