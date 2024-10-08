import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import InputSelection from "../../pages/LT/RunLTAnalytics/InputSelection/InputSelection";
import { StepButton } from "@mui/material";
import RunAnalytics from "../../pages/LT/RunLTAnalytics/RunAnalytics/RunAnalytics";

const stepStyle = {
  width: "100%",
  padding: "20px 10px",
  maxWidth: "650px",
  margin: "0 auto",
  "& .Mui-active": {
    "&.MuiSvgIcon-root": {
      color: "#000",
    },
  },
  "& .Mui-completed": {
    "&.MuiSvgIcon-root": {
      color: "gray !important",
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
              sx={{ "& .MuiStepLabel-label": { marginTop: "5px !important" }, cursor: 'default' }}
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
            handleClose={props.handleClose}
            showModal={props.showModal}
            handleAddRows={props.handleAddRows}
            rows={props.rows}
            delRowHandler={props.delRowHandler}
            handleExcludeDateChange={props.handleExcludeDateChange}
            clearAllExcludeModal={props.clearAllExcludeModal}
            submitExcludeModalHandler={props.submitExcludeModalHandler}
            isDisabled={props.isDisabled}
          />
        ) :  (
          <RunAnalytics 
            runAnalyticsData={props.runAnalyticsData}
            handleRunAnalyticsChange={props.handleRunAnalyticsChange}
            showTable={props.showTable}
          />
        )}
      </div>
    </Box>
  );
};

export default StepperComp;
