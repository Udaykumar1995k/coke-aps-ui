import React, { useState, useEffect } from "react";
import ButtonComponent from "../../components/common/button/Button";
import Modal from "../../components/common/modal/Modal";
import ActionInput from "../../components/common/actioninput/ActionInputField";
import './index.css'
import ApprovalCard from "./ApprovalCard";
import Cards from "../../components/common/card/Card";
import DataTable from "../../components/common/datatable/DataTable";
import { WorkFlowStatus, WorkFlowStatusFooter } from "./WorkFlowStatus";
import TopSection from "../TopSection";
import { Link } from "react-router-dom";

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
      <Modal open={showPopup} handleClose={onClosePopup} title="Current Status" action={<WorkFlowStatusFooter />} content={<WorkFlowStatus steps={stepData} state={state} />} maxWidth="lg" />
    </div>
  )
}
const AnalyticsResults = ({ onhandleClick,onHandleCheckBox }) => {
  const pagination = true;
  const paginationPageSize = 10;
  const paginationPageSizeSelector = [10, 20, 30, 50, 100];

  const onRowSelected = (params) => {
    const isChecked = params.node.selected;
    onhandleClick(isChecked);
    const selectedCheckBoxCount = params.api.getSelectedNodes().length;
    onHandleCheckBox(selectedCheckBoxCount);


  }
  const [regularItems] = useState([
    {
      Supplier: "Abc Inc",
      Material: "Material Y",
      InventoryClassification: "Material",
      MaterialType: "A",
      ShipFrom: "Ingredients",
      ShipTo: "Helsinki",
      MasterLeadTime: "40 Days",
      DemonstratedLeadTime: "60 Days",
      confidencescore: "60 days",
      LTVariations: "60 days",
      Analyticsintiatedby: "90%",
      ViewInputDetails: "High",
      FinalLTtobeupdatedinS4: "Admin",
      Details: <ButtonComponent label="Details" />,
      CurrentStatus: "Rejected by approver2",
    },
    {
      Supplier: "Abc Inc",
      Material: "Material Y",
      InventoryClassification: "Material",
      MaterialType: "A",
      ShipFrom: "Ingredients",
      ShipTo: "Helsinki",
      MasterLeadTime: "45 Days",
      DemonstratedLeadTime: "60 Days",
      confidencescore: "60 days",
      LTVariations: "60 days",
      Analyticsintiatedby: "90%",
      ViewInputDetails: "High",
      FinalLTtobeupdatedinS4: "Admin",
      Details: <ButtonComponent label="Details" />,
      CurrentStatus: "Rejected by approver2",

    },
    {
      Supplier: "Abc Inc",
      Material: "Material Y",
      InventoryClassification: "Material",
      MaterialType: "A",
      ShipFrom: "Ingredients",
      ShipTo: "Helsinki",
      MasterLeadTime: "40 Days",
      DemonstratedLeadTime: "60 Days",
      confidencescore: "60 days",
      LTVariations: "60 days",
      Analyticsintiatedby: "90%",
      ViewInputDetails: "High",
      FinalLTtobeupdatedinS4: "Admin",
      Details: <ButtonComponent label="Details" />,
      CurrentStatus: "Rejected by approver2",
    },
    {
      Supplier: "Abc Inc",
      Material: "Material Y",
      InventoryClassification: "Material",
      MaterialType: "A",
      ShipFrom: "Ingredients",
      ShipTo: "Helsinki",
      MasterLeadTime: "40 Days",
      DemonstratedLeadTime: "60 Days",
      confidencescore: "60 days",
      LTVariations: "60 days",
      Analyticsintiatedby: "90%",
      ViewInputDetails: "High",
      FinalLTtobeupdatedinS4: "Admin",
      Details: <ButtonComponent label="Details" />,
      CurrentStatus: "Rejected by approver2",
    },
    {
      Supplier: "Abc Inc",
      Material: "Material Y",
      InventoryClassification: "Material",
      MaterialType: "A",
      ShipFrom: "Ingredients",
      ShipTo: "Helsinki",
      MasterLeadTime: "40 Days",
      DemonstratedLeadTime: "60 Days",
      confidencescore: "60 days",
      LTVariations: "60 days",
      Analyticsintiatedby: "90%",
      ViewInputDetails: "High",
      FinalLTtobeupdatedinS4: "Admin",
      Details: <ButtonComponent label="Details" />,
      CurrentStatus: "Rejected by approver2",
    },
    {
      Supplier: "Abc Inc",
      Material: "Material Y",
      InventoryClassification: "Material",
      MaterialType: "A",
      ShipFrom: "Ingredients",
      ShipTo: "Helsinki",
      MasterLeadTime: "40 Days",
      DemonstratedLeadTime: "60 Days",
      confidencescore: "60 days",
      LTVariations: "60 days",
      Analyticsintiatedby: "90%",
      ViewInputDetails: "High",
      FinalLTtobeupdatedinS4: "Admin",
      Details: <ButtonComponent label="Details" />,
      CurrentStatus: "Rejected by approver2",
    },
    {
      Supplier: "Abc Inc",
      Material: "Material Y",
      InventoryClassification: "Material",
      MaterialType: "A",
      ShipFrom: "Ingredients",
      ShipTo: "Helsinki",
      MasterLeadTime: "40 Days",
      DemonstratedLeadTime: "60 Days",
      confidencescore: "60 days",
      LTVariations: "60 days",
      Analyticsintiatedby: "90%",
      ViewInputDetails: "High",
      FinalLTtobeupdatedinS4: "Admin",
      Details: <ButtonComponent label="Details" />,
      CurrentStatus: "Rejected by approver2",
    },
    {
      Supplier: "Abc Inc",
      Material: "Material Y",
      InventoryClassification: "Material",
      MaterialType: "A",
      ShipFrom: "Ingredients",
      ShipTo: "Helsinki",
      MasterLeadTime: "40 Days",
      DemonstratedLeadTime: "60 Days",
      confidencescore: "60 days",
      LTVariations: "60 days",
      Analyticsintiatedby: "90%",
      ViewInputDetails: "High",
      FinalLTtobeupdatedinS4: "Admin",
      Details: <ButtonComponent label="Details" />,
      CurrentStatus: "Rejected by approver2",
    },
    {
      Supplier: "Abc Inc",
      Material: "Material Y",
      InventoryClassification: "Material",
      MaterialType: "A",
      ShipFrom: "Ingredients",
      ShipTo: "Helsinki",
      MasterLeadTime: "40 Days",
      DemonstratedLeadTime: "60 Days",
      confidencescore: "60 days",
      LTVariations: "60 days",
      Analyticsintiatedby: "90%",
      ViewInputDetails: "High",
      FinalLTtobeupdatedinS4: "Admin",
      Details: <ButtonComponent label="Details" />,
      CurrentStatus: "Rejected by approver2",
    },
  ]);

  const [regularItemsData] = useState([
    {
      headerCheckboxSelection: true,
      checkboxSelection: true,
      pinned: "left",
      width: 50,
      lockPinned: true,
      suppressMovable: true,
    },
    {
      field: "Supplier",
      sortable: true,
      lockPinned: true,
      resizable: false,
      filterParams: {
        filterOptions: ["contains", "startsWith", "endsWith"],
        defaultOption: "startsWith",
      },
      filter: "agColumnFilter",
      suppressMovable: true,
      unSortIcon: true
    },
    { field: "Material", resizable: false, suppressMovable: true, unSortIcon: true },
    {
      field: "InventoryClassification",
      resizable: false,
      suppressMovable: true,
      unSortIcon: true
    },
    { field: "MaterialType", resizable: false, suppressMovable: true, unSortIcon: true },
    { field: "ShipFrom", resizable: false, suppressMovable: true, unSortIcon: true },
    { field: "ShipTo", resizable: false, suppressMovable: true, unSortIcon: true },
    { field: "MasterLeadTime", resizable: false, suppressMovable: true, unSortIcon: true },
    { field: "DemonstratedLeadTime", resizable: false, suppressMovable: true, unSortIcon: true },
    { field: "confidencescore", resizable: false, suppressMovable: true, unSortIcon: true },
    { field: "LTVariations", resizable: false, suppressMovable: true, unSortIcon: true },
    { field: "Analyticsintiatedby", resizable: false, suppressMovable: true, unSortIcon: true },
    { field: "ViewInputDetails", resizable: false, suppressMovable: true, unSortIcon: true },
    {
      field: "FinalLTtobeupdatedinS4",
      lockPinned: true,
      suppressMovable: true,
      unSortIcon: true
    },
    {
      field: "CurrentStatus", resizable: false, suppressMovable: true, unSortIcon: true,
      cellRenderer: (response) => (
        <div >
          {console.log("response", response)}
          <WorkFlowStatusModel value={response.value} />
        </div>
      ),
    },
    {
      field: "Details",
      suppressMovable: true,
      cellRenderer: () => (
        <div className="btn-wrapper">
          {" "}
          <ButtonComponent type="secondary" label="Details" />
        </div>
      ),
      pinned: "right",
      width: 120,
      lockPinned: true,
      resizable: false,
    },

  ]);

  return (
    <div>
      <div
        style={{
          border: "1px solid lightgrey",
          borderRadius: "6px",
          padding: "10px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div
            style={{
              display: "flex"
            }}
          >
            <div style={{ width: "30%" }}>
              <ActionInput icon={"search"} position={"left"} props={{ height: "40px" }} />
            </div>
          </div>
          <div>
            <DataTable
              columns={regularItemsData}
              rows={regularItems}
              pagination={pagination}
              paginationPageSize={paginationPageSize}
              paginationPageSizeSelector={paginationPageSizeSelector}
              enableCheckbox={true}
              onRowSelected={onRowSelected}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
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

const ModalContent = ({checkBoxCount}) => {
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
  const onHandleDeleteIcon = (index) =>{
    const newData = approvalCardsData.filter((data,i) => i!==index && data)
    setApprovalCardsData(newData);
  }

  return (
    <>
      <ApprovalCard 
      approver={approvalCardsData}  
      checkBoxCount={checkBoxCount}
      props={{addApprover:addApprover,
      deleteApprover:onHandleDeleteIcon }}/>

    </>
  )
};

const WorkflowManagement = () => {
  const [isChecked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const [rowCount, setRowCount] = useState(0);
  const onHandleCheckBox = (count) => {
    setRowCount(count)
  }
  const onhandleClick = (checked) => {
    setChecked(checked);
  }
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const cardData = [{ title: "Pending Action", description: "Materials - Supplier - Plant", value: 32 }, { title: "Pending Approval", description: "Pending Approval / Rejected by Approver", value: 28 }, { title: "Closed Workflow Items", value: 50 }]
  return (
    <>
      <TopSection labelList={[{ title: 'Home', path: '/landing-page' }, { title: 'Workflow Management' }]} />
      <div className="workflow-management-container">
        <div className="card-container">
          <Cards cards={cardData} />
        </div>
        <div>
          <h5>Pending Action</h5>
          <div>
            <AnalyticsResults onhandleClick={onhandleClick} onHandleCheckBox={onHandleCheckBox} />
          </div>
          <p>Remarks for Acceptance / Rejection*</p>
          <ActionInput className="text-input" placeholder="Enter the Remarks" props={{ height: "45px", maxWidth: "250px", disabled: !isChecked }} />
          <div className="approval-item-container">
            <div style={{ width: "30%", marginTop: '20px' }}>
              <ButtonComponent maxWidth="100px" label="Back" bgColor="white" color="black" />
            </div>
            <div className="approval-item-container button-alignment">
              <ButtonComponent type="primary" maxWidth="300px" label="Reject" disabled={!isChecked} />
              <ButtonComponent disabled={!isChecked}
                maxWidth="170px"
                label="Send for Approval"
                bgColor="black"
                onClick={handleClickOpen}
              />
              <Modal open={open} handleClose={handleClose} title="Workflow Approval" action={<FooterButtons />} content={<ModalContent checkBoxCount={rowCount} />} maxWidth="sm"/>        </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default WorkflowManagement;
