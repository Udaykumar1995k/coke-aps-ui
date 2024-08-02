import React, { useState } from "react";
import ButtonComponent from "../../components/common/button/Button";
import Modal from "../../components/common/modal/Modal";
import ActionInput from "../../components/common/actioninput/ActionInputField";
import './index.css'
import ApprovalCard from "./ApprovalCard";
import Cards from "../../components/common/card/Card";
import Dropdown from "../../components/common/Dropdown";
import DataTable from "../../components/common/datatable/DataTable";
const AnalyticsResults = () => {
  const pagination = true;
  const paginationPageSize = 10;
  const paginationPageSizeSelector = [10, 20, 30, 50, 100];
  
  const [regularItems] = useState([
    {
      Supplier: "Abc Inc",
      Material: "Material Y",
      InventoryClassification: "Material",
      MaterialType: "A",
      ShipFrom: "Ingredients",
      ShipTo: "Helsinki",
      MasterLT: "Ballina",
      DemonstratedLT: "6 days",
      confidencescore: "60 days",
      LTVariations: "60 days",
      Analyticsintiatedby: "90%",
      ViewInputDetails: "High",
      FinalLTtobeupdatedinS4: "Admin",
      Details: <ButtonComponent label="Details" />,
    },
    {
      Supplier: "Abc Inc",
      Material: "Material Y",
      InventoryClassification: "Material",
      MaterialType: "A",
      ShipFrom: "Ingredients",
      ShipTo: "Helsinki",
      MasterLT: "Ballina",
      DemonstratedLT: "6 days",
      confidencescore: "60 days",
      LTVariations: "60 days",
      Analyticsintiatedby: "90%",
      ViewInputDetails: "High",
      FinalLTtobeupdatedinS4: "Admin",
      Details: <ButtonComponent label="Details" />,
    },
    {
      Supplier: "Abc Inc",
      Material: "Material Y",
      InventoryClassification: "Material",
      MaterialType: "A",
      ShipFrom: "Ingredients",
      ShipTo: "Helsinki",
      MasterLT: "Ballina",
      DemonstratedLT: "6 days",
      confidencescore: "60 days",
      LTVariations: "60 days",
      Analyticsintiatedby: "90%",
      ViewInputDetails: "High",
      FinalLTtobeupdatedinS4: "Admin",
      Details: <ButtonComponent label="Details" />,
    },
    {
      Supplier: "Abc Inc",
      Material: "Material Y",
      InventoryClassification: "Material",
      MaterialType: "A",
      ShipFrom: "Ingredients",
      ShipTo: "Helsinki",
      MasterLT: "Ballina",
      DemonstratedLT: "6 days",
      confidencescore: "60 days",
      LTVariations: "60 days",
      Analyticsintiatedby: "90%",
      ViewInputDetails: "High",
      FinalLTtobeupdatedinS4: "Admin",
      Details: <ButtonComponent label="Details" />,
    },
    {
      Supplier: "Abc Inc",
      Material: "Material Y",
      InventoryClassification: "Material",
      MaterialType: "A",
      ShipFrom: "Ingredients",
      ShipTo: "Helsinki",
      MasterLT: "Ballina",
      DemonstratedLT: "6 days",
      confidencescore: "60 days",
      LTVariations: "60 days",
      Analyticsintiatedby: "90%",
      ViewInputDetails: "High",
      FinalLTtobeupdatedinS4: "Admin",
      Details: <ButtonComponent label="Details" />,
    },
    {
      Supplier: "Abc Inc",
      Material: "Material Y",
      InventoryClassification: "Material",
      MaterialType: "A",
      ShipFrom: "Ingredients",
      ShipTo: "Helsinki",
      MasterLT: "Ballina",
      DemonstratedLT: "6 days",
      confidencescore: "60 days",
      LTVariations: "60 days",
      Analyticsintiatedby: "90%",
      ViewInputDetails: "High",
      FinalLTtobeupdatedinS4: "Admin",
      Details: <ButtonComponent label="Details" />,
    },
    {
      Supplier: "Abc Inc",
      Material: "Material Y",
      InventoryClassification: "Material",
      MaterialType: "A",
      ShipFrom: "Ingredients",
      ShipTo: "Helsinki",
      MasterLT: "Ballina",
      DemonstratedLT: "6 days",
      confidencescore: "60 days",
      LTVariations: "60 days",
      Analyticsintiatedby: "90%",
      ViewInputDetails: "High",
      FinalLTtobeupdatedinS4: "Admin",
      Details: <ButtonComponent label="Details" />,
    },
    {
      Supplier: "Abc Inc",
      Material: "Material Y",
      InventoryClassification: "Material",
      MaterialType: "A",
      ShipFrom: "Ingredients",
      ShipTo: "Helsinki",
      MasterLT: "Ballina",
      DemonstratedLT: "6 days",
      confidencescore: "60 days",
      LTVariations: "60 days",
      Analyticsintiatedby: "90%",
      ViewInputDetails: "High",
      FinalLTtobeupdatedinS4: "Admin",
      Details: <ButtonComponent label="Details" />,
    },
    {
      Supplier: "Abc Inc",
      Material: "Material Y",
      InventoryClassification: "Material",
      MaterialType: "A",
      ShipFrom: "Ingredients",
      ShipTo: "Helsinki",
      MasterLT: "Ballina",
      DemonstratedLT: "6 days",
      confidencescore: "60 days",
      LTVariations: "60 days",
      Analyticsintiatedby: "90%",
      ViewInputDetails: "High",
      FinalLTtobeupdatedinS4: "Admin",
      Details: <ButtonComponent label="Details" />,
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
    { field: "MasterLT", resizable: false, suppressMovable: true, unSortIcon: true },
    { field: "DemonstratedLT", resizable: false, suppressMovable: true, unSortIcon: true },
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
      field: "Details",
      suppressMovable: true,
      cellRenderer: () => (
        <div className="btn-wrapper">
          {" "}
          <ButtonComponent  type="secondary" label="Details" />
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
  const cardData =[{title:"Pending Action", description:"Materials - Supplier - Plant", value:32},{title:"Pending Approval",  description:"Pending Approval / Rejected by Approver",value:28},{title:"Closed Workflow Items", value:50}]
  return (
    <div className="workflow-management-container">
      <div className="card-container">
        <Cards cards={cardData}/>
      </div>
      <div>  
        <h5>Pending Action</h5>  
        <div>
          <AnalyticsResults/>
        </div>
        <p>Remarks for Acceptance / Rejection*</p>
        <ActionInput className="text-input" placeholder="Enter the Remarks" props={{ height:"45px", maxWidth:"250px"}} />
        <div  className="approval-item-container">
        <div  style={{width:"30%", marginTop:'20px'}}>
          <ButtonComponent maxWidth="100px" label="Back" bgColor="white" color="black"/>
        </div>
        <div className="approval-item-container button-alignment">
            <ButtonComponent type="primary" maxWidth="300px" label="Reject" />
            <ButtonComponent
          maxWidth="170px"
          label="Send for Approval"
          bgColor="black"
          onClick={handleClickOpen}
        />
        <Modal open={open} handleClose={handleClose} title="Workflow Approval" action={<FooterButtons />} content={<ModalContent />} />        </div>
        </div>
        
      </div> 
    </div>
  );
};

export default WorkflowManagement;
