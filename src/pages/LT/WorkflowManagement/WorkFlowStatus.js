import React, { useState, useEffect } from "react";
import ButtonComponent from "../../../components/common/button/Button"
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import {  Close } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Modal from "../../../components/common/modal/Modal";
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


const WorkFlowStatusFooter = (props) => {
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
        onClick={props.onClosePopup}
      />
    </div>
    )
}

const WorkFlowStatusModel = (props) => {

    const [state, setState] = useState('');
    const [showPopup, setPopUp] = useState(false);
    const stepData = [
      { label: "WorkFlow Creations", date: "15-July-2024", process: "WorkFlow Initiated", actionPerformed: "Sam Arnold", createdBy: "15-July-2024 13:30:00", status: "Initiated", remarks: " - -", currentState: "completed", completed: true },
      { label: "Level1 Approval", date: "16-July-2024", process: "Approved approver", actionPerformed: "Sam Arnold", createdBy: "15-July-2024 13:30:00", status: "Initiated", remarks: " - -", currentState: "completed", completed: true },
      { label: "Level2 Approval", date: "17-July-2024", process: "Rejected", actionPerformed: "Sam Arnold", createdBy: "15-July-2024 13:30:00", status: "Initiated", remarks: " - -", currentState: "rejected", completed: true },
      { label: "WorkFlow Reintiated", date: "18-July-2024", process: "WorkFlow Reinitiated", actionPerformed: "Sam Arnold", createdBy: "15-July-2024 13:30:00", status: "Initiated", remarks: " - -", currentState: "pending", completed: true }
  
    ]
    useEffect(() => {
      let currentState = stepData.findIndex(data => data.currentState === "pending")
      if (currentState !== -1) {
        setState(currentState)
      }
      else {
        setState(stepData.length)
      }
      // eslint-disable-next-line
    }, []);
    const onhandlePopup = () => {
      setPopUp(true)
    }
    const onClosePopup = () => {
      setPopUp(false)
    }
    return (
      <div >
        <Link style={{ color: "black" }} href="#" onClick={onhandlePopup}>{props.value}</Link>
        <Modal open={showPopup} handleClose={onClosePopup} title="Current Status" action={<WorkFlowStatusFooter  onClosePopup={onClosePopup}/>} content={<WorkFlowStatus steps={stepData} state={state} />} maxWidth="md" />
      </div>
    )
  }

  export default WorkFlowStatusModel