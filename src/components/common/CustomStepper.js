import React from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';

const CustomStepper = ({ activeStep, steps }) => {
    return (
        <div>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => (
                    <Step key={index}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
};

export default CustomStepper;

