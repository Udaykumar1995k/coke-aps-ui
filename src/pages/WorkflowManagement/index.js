import React, { useState, useEffect } from "react";
import ButtonComponent from "../../components/common/button/Button";
import Modal from "../../components/common/modal/Modal";
import ActionInput from "../../components/common/actioninput/ActionInputField";
import './index.css'
import Cards from "../../components/common/card/Card";
import DataTable from "../../components/common/datatable/DataTable";
import { WorkFlowStatus, WorkFlowStatusFooter } from "./WorkFlowStatus";
import TopSection from "../TopSection";
import { Link } from "react-router-dom";
import LeadtimeModel from "../analyticsresults/LeadTimeModal";
import WorkFlowApprovalFormData from "./WorkFlowApprovalFormData";
import { WorkFlowApproval,WorkFlowApprovalFooter } from "./WorkFLowApproverModal";
import  pendingActionItems from '../../common/pendingAction.json'
import pendingApprovalItems from '../../common/pendingApproval.json'
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
      <Modal open={showPopup} handleClose={onClosePopup} title="Current Status" action={<WorkFlowStatusFooter />} content={<WorkFlowStatus steps={stepData} state={state} />} maxWidth="md" />
    </div>
  )
}
const AnalyticsResults = ({ onhandleClick,onHandleCheckBox,regularItems }) => {
  const pagination = true;
  const paginationPageSize = 10;
  const paginationPageSizeSelector = [10, 20, 30, 50, 100];
  const onRowSelected = (params) => {
    console.log("params",params.data)
    const isChecked = params.node.selected;
    onhandleClick(isChecked);
    const selectedCheckBoxCount = params.api.getSelectedNodes().length;
    onHandleCheckBox(selectedCheckBoxCount);
  }
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
          <WorkFlowStatusModel value={response.value} />
        </div>
      ),
    },
    {
      field: "View Input Details",
      suppressMovable: true,
      cellRenderer: () => (
        <div className="btn-wrapper">
          {" "}
          <LeadtimeModel/>
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
            {/* <div style={{ width: "30%" }}>
              <ActionInput icon={"search"} position={"left"} props={{ height: "40px" }} />
            </div> */}
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

const WorkflowManagement = () => {
  const [isChecked, setChecked] = useState(false);
  const [materialTitle, setMaterialTitle] = useState("Pending Action")
  const [regularItems, setRegularItems] = useState(pendingActionItems);
  const [rowCount, setRowCount] = useState(0);
  const { formData,
          disableApprover,
          data,
          approvalCardsData,
          open,
          clear,
          disableButton,
          addComment,
          handleApproverChange,
          handleClear,
          addApprover,
          onHandleDeleteIcon,
          clearFormData,
          handleClickOpen,
          handleClose,
          onSubmitHandler
        } = WorkFlowApprovalFormData();
  const onHandleCheckBox = (count) => {
    setRowCount(count)
  }
  const onhandleClick = (checked) => {
    setChecked(checked);
  }
  const pendingApproval = (index) =>{
  setRegularItems(pendingApprovalItems)
  let title = cardData[index]["title"]
  setMaterialTitle(title)
  }
  
  const pendingAction = (index) => {
    setRegularItems(pendingActionItems);
    setMaterialTitle(cardData[index]["title"])
  }
  const closedWorkFlow = (index) =>{
    setRegularItems(pendingActionItems);
    setMaterialTitle(cardData[index]["title"])
  }
  const callBackFunction = (index,name) =>{
    const func = funcMap[name];
    if(typeof func === "function") {
      func(index);
    }
    else {
      console.log('Invalid function name');
    }
  }
  const funcMap = {
    pendingApproval: pendingApproval,
    pendingAction: pendingAction,
    closedWorkFlow: closedWorkFlow
  }
  const cardData = [{ title: "Pending Action", description: "Materials - Supplier - Plant", value: 32,name:'pendingAction' }, { title: "Pending Approval", description: "Pending Approval / Rejected by Approver", value: 28,name:"pendingApproval" }, { title: "Closed Workflow Items", value: 50,name:"closedWorkFlow" }]
  return (
    <>
      <TopSection labelList={[{ title: 'Home', path: '/landing-page' }, { title: 'Workflow Management' }]} />
      <div className="workflow-management-container">
        <div className="card-container">
          <Cards cards={cardData} callBackFunction={callBackFunction} />
        </div>
        <div>
          <h5>{materialTitle}</h5>
          <div>
            <AnalyticsResults onhandleClick={onhandleClick} onHandleCheckBox={onHandleCheckBox} regularItems={regularItems} />
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
              <Modal 
              open={open} 
              handleClose={handleClose} 
              title="Workflow Approval" 
              action={
                      <WorkFlowApprovalFooter 
                        clearFormData={clearFormData}
                        onSubmitHandler={onSubmitHandler}
                        disableButton={disableButton}
                      />
                    } 
              content={
                        <WorkFlowApproval 
                          checkBoxCount={rowCount}
                          formData={formData}
                          disableApprover={disableApprover}
                          data={data}
                          clear={clear}
                          approvalCardsData={approvalCardsData}
                          addComment={addComment}
                          handleApproverChange={handleApproverChange}
                          handleClear={handleClear}
                          addApprover={addApprover}
                          onHandleDeleteIcon={onHandleDeleteIcon}
                        />
                      } 
              maxWidth="100px"/>        
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default WorkflowManagement;
