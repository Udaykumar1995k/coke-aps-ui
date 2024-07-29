import React, { useState } from "react";
import ButtonComponent from "../../components/common/button/Button";
import Modal from "../../components/common/modal/Modal";
import './index.css'

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
      <Modal open={open} handleClose={handleClose} title="Workflow Approval" action={<FooterButtons />} />
    </div>
  );
};

export default WorkflowManagement;
