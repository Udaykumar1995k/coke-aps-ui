import React, { useState } from "react";
import ButtonComponent from "../../../components/common/button/Button";
import Modal from "../../../components/common/modal/Modal";
import ActionInput from "../../../components/common/actioninput/ActionInputField";
import './index.css'
import Cards from "../../../components/common/card/Card";
import DataTable from "../../../components/common/datatable/DataTable";
import TopSection from "../TopSection";
import LeadtimeModel from "../analyticsresults/LeadTimeModal";
import WorkFlowApprovalFormData from "./WorkFlowApprovalFormData";
import { WorkFlowApproval,WorkFlowApprovalFooter } from "./WorkFLowApproverModal";
import  pendingActionItems from '../../../common/pendingAction.json'
import pendingApprovalItems from '../../../common/pendingApproval.json'
import commonFields from '../../../common/commonfields.json'
import ConfidenceScoreModal from "../analyticsresults/ConfidenceScore";
import WorkFlowStatusModel  from './WorkFlowStatus'
const AnalyticsResults = ({ onhandleClick,onHandleCheckBox,regularItems,regularItemsData }) => {
  const pagination = true;
  const paginationPageSize = 10;
  const paginationPageSizeSelector = [10, 20, 30, 50, 100];
  const onRowSelected = (params) => {
    const isChecked = params.node.selected;
    onhandleClick(isChecked);
    const selectedCheckBoxCount = params.api.getSelectedNodes().length;
    onHandleCheckBox(selectedCheckBoxCount);
  }
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
  const { formData,disableApprover,data,approvalCardsData,open,clear,disableButton,addComment,handleApproverChange,
          handleClear,addApprover,onHandleDeleteIcon,clearFormData,handleClickOpen,handleClose,onSubmitHandler
        } = WorkFlowApprovalFormData();

  const CurrentStatuscellRenderer =  (response) => (
    <div >
      <WorkFlowStatusModel value={response.value} />
    </div>
      );

  const viewInputRender = () =>(
      <div className="btn-wrapper">
            {" "}
            <LeadtimeModel/>
      </div>
      );
  const ltToBeUpdated = (response) =>(
    <div>
        <ActionInput icon={"edit"} position={"right"} props={{ height: "10px",value:response.value }} width="80px" />
      </div>

  );
  const renderConfidenceModal =(response) =>(
    <div>
          {" "}
          <ConfidenceScoreModal value={response.value}/>
        </div>
  )
  const commonTableFieldNames = [
    commonFields["headerCheckboxSelection"],
    commonFields["Supplier"],
    commonFields["Material"],
    commonFields["InventoryClassification"],
    commonFields["ShipFrom"],
    commonFields["ShipTo"],
    commonFields["MasterLeadTime"],
    commonFields["DemonstratedLeadTime"],
    {
    ...commonFields["Confidencescore"],
    cellRenderer:renderConfidenceModal
    },
    commonFields["LeadTimeVariations"],
    commonFields["Analyticsintiatedby"],
    commonFields["ResultsUpdatedat"],
    commonFields["avgMdedialLeadTime"],
    commonFields["recommondedRange"],
    commonFields["confidenceLevel"],
    {
    ...commonFields["FinalLTtobeupdatedinS4"],
    cellRenderer:ltToBeUpdated
    },
    {
      ...commonFields["viewInputDetails"],
      cellRenderer:viewInputRender
    }
  ]
  const pendingActionFields = [
    ...commonTableFieldNames,
    commonFields["pendingForApprovalSince"],  

  ]
  const [regularItemsData,setregularItemsData] = useState(pendingActionFields);

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
    let pendingApprovalFields = [
      ...commonTableFieldNames,
      {
        ...commonFields["CurrentStatus"],
        cellRenderer:CurrentStatuscellRenderer,
      },
      commonFields["rejectReason"]
      
    ]
    
    setregularItemsData(pendingApprovalFields)
  }
  
  const pendingAction = (index) => {
    setRegularItems(pendingActionItems);
    setMaterialTitle(cardData[index]["title"])
    setregularItemsData(pendingActionFields)

    }

  const closedWorkFlow = (index) =>{
    setRegularItems(pendingActionItems);
    setMaterialTitle(cardData[index]["title"])
    setregularItemsData(pendingActionFields)
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
            <AnalyticsResults onhandleClick={onhandleClick} onHandleCheckBox={onHandleCheckBox} regularItems={regularItems} regularItemsData={regularItemsData}/>
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
