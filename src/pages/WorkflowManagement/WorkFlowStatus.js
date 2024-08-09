import ButtonComponent from "../../components/common/button/Button"
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import {  Close } from "@mui/icons-material";
const CustomIcon = () =>{
    let className ="MuiStepIcon-root Mui-rejected"
    let displayedIcon= <Close  style={{color:"white"}}className="MuiSvgIcon-root"/>
    return (
        <div className={className}>
            {displayedIcon}
        </div>
    )
}
const WorkFlowStatus = ({steps,state}) => {
    return(
        <div>
            <div>
                <p>Status</p>
                <span><b>Pending with Approver 1</b></span>
            </div>
            <div className="workflow-status-container">
                <div>
                    <Stepper
                        activeStep={state} orientation="vertical">
                        {steps.map((step) => (
                        <Step
                            key={step.label} expanded={true}>
                            <StepLabel StepIconComponent={step.currentState ==="rejected"?(props)=><CustomIcon  {...props} status= {step.currentState}/>: undefined}>
                                {step.label}
                            </StepLabel>
                            <StepContent > 
                                <div  style={{marginLeft:"40px"}}className="approver-status-card">
                                    <div className="workflow-header">
                                        <p>Date</p>
                                        <p>Process</p>
                                        <p>Action Performed by</p>
                                        <p>Created by</p>
                                        <p>Status</p>
                                        <p>Approval/Reject Remarks</p>
                                    </div>
                                    <div className="workflow-status">
                                        <p>{step.date}</p>
                                        <p> {step.process} </p>
                                        <p>{step.actionPerformed}</p>
                                        <p>{step.createdBy}</p>
                                        <p>{step.status}</p>
                                        <p> {step.remarks} </p>
                                    </div>
                                </div> 
                            </StepContent>
                        </Step>
                            ))
                        }
                    </Stepper>
                </div> 
            </div>

        </div>
    )
}


const WorkFlowStatusFooter = () => {
    return(
        <div className='footer-btn-wrapper'>
      <ButtonComponent
        maxWidth="170px"
        label="Back"
        bgColor="white"
        color="black"
      />
      <ButtonComponent
        maxWidth="170px"
        label="Ok"
        bgColor="black"
        color="white"
      />
    </div>
    )
}

export {WorkFlowStatus, WorkFlowStatusFooter}
