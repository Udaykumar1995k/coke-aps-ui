import "./AnalyticsResults.css";
import ActionInput from "../../components/common/actioninput/ActionInputField";
import ButtonComponent from "../../components/common/button/Button";
import TabSection from "../../components/common/TabSection";
import Dropdown from "../../components/common/Dropdown";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import TopSection from "../TopSection";
import Graph from "../../components/Graph/Graph";
import Modal from "../../components/common/modal/Modal";
import SortIcon from '@mui/icons-material/Sort';
import { IconButton } from "@mui/material";
import ResultsGraph from "../../components/Graph/ResultsGraph";
import { Popper } from "@mui/material"
import { WorkFlowApproval,WorkFlowApprovalFooter } from "../WorkflowManagement/WorkFLowApproverModal";
import WorkFlowApprovalFormData from "../WorkflowManagement/WorkFlowApprovalFormData";
const AnalyticsResultsTab = (props) => {
  const [value, setValue] = useState(0);
  const [show, setShow] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
        setAnchorEl(anchorEl? null:event.currentTarget)
    }
    const { formData:WorkFlowFormData,
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
    const handPopperClose = () =>{
        setAnchorEl(null)
    }
  const openPopper = Boolean(anchorEl)
  const { state } = useLocation();
  console.log("stateData", state);
  const [formData, setFormData] = useState({
    supplier: "",
    material: "",
    shipFrom: "",
    shipTo: "",
  });
  const handleFormData = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleDrillDown = () => {
    setShow(true);
  };

  return (
    <div>
      <TopSection
        labelList={[
          { title: "Home", path: "/landing-page" },
          { title: "Analytics Results", path: "/analytics-results" },
          { title: "Results" },
        ]}
      />
      <div className="analytic-results-tab">
        <div className="analytic-results">
          
          <div className="result-item">
            <span className="analytics-text">
              Period Consider for Analytics
            </span>
            <p>{state?.periodOfAnalytics}</p>
          </div>
          <div className="result-item">
            <span className="analytics-text">Analytics Initiated by</span>
            <p>{state?.analayticsInitiatedBy}</p>
          </div>
          <div className="result-item">
            <span className="analytics-text">Analytics Run Unique ID</span>
            <p>{state?.analyticsRunId}</p>
          </div>
        </div>
        <div className="input-details">
          <p>
            {/* <Link style={{ color: "black" }} to="#"> */}
            <span style={{textDecoration:"underline", cursor:"pointer"}}>Click Here</span>
            {/* </Link>{" "} */}
             &nbsp;to View the Complete Input Details
          </p>
        </div>
      </div>
      <div className="material-tab-container">
          <div className="main-section">
            <div  className="tab-part tab-section"> 
              <TabSection
                style={{ maxWidth: "450px", marginBottom: "30px", width: "100%" }}
                label={["Regular Items", "Advance PO Items"]}
                value={value}
                handleChange={handleChange}
                count={[12, 999]}
              />
              <div style={{display:"flex", gap:"10px", justifyContent:"space-between"}}>
                <IconButton onClick={handleClick}>
                  <SortIcon/>
                </IconButton>
                <Dropdown
                    width="220px"
                    options={[
                      { value: "In Last 1 Year", label: "In Last 1 Year" },
                      { value: "In Last 2 Year", label: "In Last 2 Year" },
                    ]}
                  />
              </div>
              {!show?( 
                <div>
                  <ResultsGraph 
                  labels={['Jan','Feb','March','April','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']}
                  pData = {[2400, 1398, 9800, 3908, 4800, 3800, 4300,2400, 1398, 9800, 3908, 4800, 3800]}
                  />
                </div>
                ):""}
              <div className="analytic-results" >
            <div className="flex-direction-column" >
              {show?<Graph/>: ""}
              {
                !show? 
                  (
                    <Popper open={openPopper} anchorEl={anchorEl} placement="bottom-start">
                  <div > 
                  <div className="material-tab-container analytic-results-tab material-items-container" >
                    <div className="result-item material-items" >
                      <span>Supplier</span>
                      <Dropdown
                        width="200px"
                        formHeight="42px"
                        label="Select Supplier"
                        value={formData.supplier}
                        name="supplier"
                        options={[
                          { value: "ireland", label: "CPS Balina" },
                          { value: "india", label: "CPS Hyderabad" },
                        ]}
                        handleChange={handleFormData}
                      />
                      <span>Material</span>
                      <Dropdown
                        width="200px"
                        formHeight="42px"
                        label="Select Material"
                        value={formData.material}
                        name="material"
                        options={[
                          { value: "Material1", label: "Material1" },
                          { value: "Material2", label: "Material2" },
                        ]}
               
                        handleChange={handleFormData}
                      />
                      <span>Ship From</span>
                      <Dropdown
                        width="200px"
                        formHeight="42px"
                        label="Select Ship From"
                        value={formData.shipFrom}
                        name="shipFrom"
                        options={[
                          { value: "Location1", label: "India" },
                          { value: "Location2", label: "Ireland" },
                        ]}
                        handleChange={handleFormData}
                      />
                      <span>Ship To</span>
                      <Dropdown
                        width="200px"
                        formHeight="42px"
                        label="Select Ship To"
                        value={formData.shipTo}
                        name="shipTo"
                        options={[
                          { value: "Location1", label: "India" },
                          { value: "Location2", label: "Ireland" },
                        ]}
                        handleChange={handleFormData}
                      />
                      <div style={{ display: "flex", justifyContent: "center" }}>
                        <ButtonComponent
                          type="secondary"
                          label="Ok"
                          maxWidth="80px"
                          onClick={handPopperClose}
                        />
                      </div>
                    </div>
                  </div>
                  </div>
                  </Popper>
                  ): ""
              }
            </div>
          </div>
              <div
                style={{ paddingLeft: "12px", padding:"10px" }}
                className="analytic-results result-margin" >
                  <p>Variance (Actual vs</p>
                  <Dropdown
                    width="230px"
                    options={[
                      { value: "Median", label: "Median" },
                      { value: "Mean", label: "Mean" },
                      { value: "Quartiles", label: "Quartiles" },
                      { value: "75th Percentiles", label: "75th Percentiles" },
                      { value: "80th Percentiles", label: "80th Percentiles" },
                      { value: "90th Percentiles", label: "95th Percentiles" },
                    ]}
                  />
                  <p>10%</p>
              </div> 
            </div>
            {!show ? (
              
          <div
            className="recomonded-values-container result-margin"
          >
              <p className="analytics-text">Mean </p>
              <p className="analytics-text">Median </p>
              <p className="analytics-text">Quartiles </p>
              <p className="analytics-text">75th Percentiles </p>
              <p className="analytics-text">80th Percentiles </p>
              <p className="analytics-text">90th Percentiles </p>
              <p className="analytics-text">COV</p>
            <h5>Recommondation:</h5>
            <div className="analytic-results recomonded-values-group">
              <span>Recomonded values:</span>
              <span className="text-alignment">57-60</span>
            </div>
            <div className="analytic-results recomonded-values-group">
              <span>Confidence Level:</span>
              <span className="text-alignment">High Likely(70%)</span>
            </div>
            <div className="analytic-results recomonded-values-group">
              <span>Reccomondation Based on</span>
              <span className="text-alignment">
                Advance Pos (60% of Total Pos)
              </span>
            </div>
          </div>
        ) :""}
          </div> 
        </div>
      {!show && (
        <div className="analytic-results-tab result-margin" style={{padding: '20px 10px'}}>
          <div className="analytic-results">
            <div className="result-item">
              <span>
                Final LT to Be Updated in S4
              </span>
              <ActionInput
                className="text-input"
                props={{ height: "35px", maxWidth: "250px" }}
              />
            </div>
            <div className="result-item">
              <span>
                Remarks for Acceptance/ Rejection
              </span>
              <ActionInput
                className="text-input"
                props={{ height: "35px", maxWidth: "250px" }}
              />
            </div>
          </div>
        </div>
      )}
      <div className="analytic-results result-margin">
        <div className="analytic-results" style={{ width: "30%" }}>
          <ButtonComponent
            type="primary"
            maxWidth="80px"
            label="Back"
            onClick={() => setShow(false)}
          />
        </div>
        {!show && (
          <div className="analytic-results button-alignment">
            <ButtonComponent
              bgColor="lightgrey"
              color="black"
              maxWidth="80px"
              label="Reject"
            />
            <ButtonComponent
              type="primary"
              maxWidth="300px"
              label="Drilldown to Components"
              onClick={handleDrillDown}
            />
            <ButtonComponent
              type="secondary"
              maxWidth="180px"
              label="Send for Approval"
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
                          checkBoxCount="1"
                          formData={WorkFlowFormData}
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
                    />
            
          </div>
        )}
      </div>
    </div>
  );
};

export default AnalyticsResultsTab;
