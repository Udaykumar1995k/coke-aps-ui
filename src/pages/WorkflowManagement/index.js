import React, { useState } from "react";
import ButtonComponent from "../../components/common/button/Button";
import Modal from "../../components/common/modal/Modal";

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
      <Modal open={open} handleClose={handleClose} title="Workflow Approval" />
    </div>
  );
};

export default WorkflowManagement;
