import React, { useState } from "react";
import ButtonComponent from "../../components/common/button/Button";
import Modal from "../../components/common/modal/Modal";
import ActionInput from "../../components/common/actioninput/ActionInputField";
import './index.css'
import ApprovalCard from "./ApprovalCard";

const FooterButtons = () => {
  return (
    <div className='footer-btn-wrapper'>
      <ButtonComponent
        maxWidth="170px"
        label="Clear All"
        bgColor="white"
        color="black"
      />
      <ButtonComponent
        maxWidth="170px"
        label="Submit"
        bgColor="black"
        color="white"
      />
    </div>
  );
};

const ModalContent = () => {
  const [approvalCardsData, setApprovalCardsData] = useState([
    { name: "Level1", label: "Level 1" },
  ]);

  const addApprover = () => {
    if (approvalCardsData.length < 5) {
      const newApprover = {
        name: `Level${approvalCardsData.length + 1}`,
        label: `Level ${approvalCardsData.length + 1}`,
      };
      setApprovalCardsData([...approvalCardsData, newApprover]);
    }
  };

  return (
    <>

      <div className='approval-items-wrapper '>
        <label style={{ marginTop: '8px', fontSize: '14px' }}>No.of Line Items for Approval
        </label><ActionInput props={{ height: "30px", maxWidth: "70px", value: '4' }} />
      </div>
      <div className='approval-wrapper'>
        <div className='approver-header'>
          <label className='label-size'>Level</label>
          <label className='label-size' style={{ marginLeft: '10px' }}>Approver Name</label>
          <label className='label-size' style={{ marginLeft: '85px' }}>Email ID</label>
        </div>
        {approvalCardsData && approvalCardsData.map((approver, index) => (
          <ApprovalCard key={index} approver={approver} />
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '80px' }}>
        <ButtonComponent
          maxWidth="170px"
          label="Add Approver"
          bgColor="white"
          color="black"
          onClick={addApprover}
        /></div>
      <div><label style={{ fontSize: '14px' }}>Comments</label> <ActionInput props={{ height: "65px", maxWidth: "400px" }} placeholder='Kindly check the Lead time and approve.' /></div>
    </>
  )
};

const WorkflowManagement = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ButtonComponent
        maxWidth="170px"
        label="Send for Approval"
        bgColor="black"
        onClick={handleClickOpen}
      />
      <Modal open={open} handleClose={handleClose} title="Workflow Approval" action={<FooterButtons />} content={<ModalContent />} />
    </div>
  );
};

export default WorkflowManagement;
