import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import InputSelection from "../../pages/RunLTAnalytics/InputSelection/InputSelection";
import { StepButton } from "@mui/material";
import RunAnalytics from "../../pages/RunLTAnalytics/RunAnalytics/RunAnalytics";
import ViewResult from "../../pages/RunLTAnalytics/ViewResult/ViewResult";

const stepStyle = {
  width: "100%",
  padding: "20px 10px",
  maxWidth: "650px",
  margin: "0 auto",
  "& .Mui-active": {
    "&.MuiStepIcon-root": {
      color: "#000",
    },
  },
  "& .Mui-completed": {
    "&.MuiStepIcon-root": {
      color: "gray",
    },
  },
};

const StepperComp = (props) => {
  return (
    <Box>
      <Stepper
        nonLinear
        activeStep={props.activeStep}
        alternativeLabel
        sx={stepStyle}
      >
        {props.steps.map((step, index) => (
          <Step key={index}>
            <StepButton
              sx={{ "& .MuiStepLabel-label": { marginTop: "5px !important" } }}
              onClick={props.handleStep(index)}
            >
              {step.label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {props.activeStep === 0 ? (
          <InputSelection
            handleChange={props.handleChange}
            formData={props.formData}
            handleDateChange={props.handleDateChange}
            scheduleAnalyticsRun={props.scheduleAnalyticsRun}
          />
        ) : props.activeStep === 1 ? (
          <RunAnalytics />
        ) : (
          <ViewResult />
        )}
      </div>
    </Box>
  );
};

export default StepperComp;