import React, { useState } from "react";
import DataTable from "../../components/common/datatable/DataTable";
import ActionInput from "../../components/common/actioninput/ActionInputField";
import ButtonComponent from "../../components/common/button/Button";
import Dropdown from "../../components/common/Dropdown";
import { useNavigate } from "react-router-dom";
import "./AnalyticsResults.css";
import results from '../../common/results.json'
import { ConfidenceScore, ConfidenceScoreFooter } from "./ConfidenceScore";
import Modal from "../../components/common/modal/Modal";

const ConfidenceScoreModal = (props) =>{
  const [showPopup, setPopUp]  = useState(false);
  const onhandlePopup = () =>{
    setPopUp(true)
    }
 const onClosePopup = () =>{
    setPopUp(false)
  }
  return(
  <div>
    <span  href="#" style={{textDecoration:"underline",cursor:"pointer"}} onClick={onhandlePopup}>{props.value}</span>
    <Modal  open={showPopup} handleClose={onClosePopup} content={<ConfidenceScore/>} action={<ConfidenceScoreFooter />} />
    </div>
    )
}
const AnalyticsResults = () => {
  const pagination = true;
  const paginationPageSize = 10;
  const paginationPageSizeSelector = [10, 20, 30, 50, 100];
  const navigate = useNavigate();
 
  const [regularItems] = useState(results);

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
    { field: "DemonstratedLeadTime", resizable: false, suppressMovable: true, unSortIcon: true,
    cellRenderer: (response) => (
      <div>
        {" "}
        <span style={{textDecoration:"underline", cursor:"pointer"}} onClick={()=>navigate('/material_details',{state:response.data})} >{response.value}</span>
      </div>
    )
   },
    { field: "confidencescore", resizable: false, suppressMovable: true, unSortIcon: true,
      cellRenderer: (response) =>(
        <div>
          {" "}
          <ConfidenceScoreModal value={response.value}/>
        </div>
      )
    },
    { field: "LeadTimeVariations", resizable: false, suppressMovable: true, unSortIcon: true },
    { field: "Analyticsintiatedby", resizable: false, suppressMovable: true, unSortIcon: true },
    { field: "ResultsUpdatedat", resizable: false, suppressMovable: true, unSortIcon: true },
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
          <div style={{ width: "70%", display: "flex", justifyContent: "end" }}>
            <Dropdown
              width="135px"
              styles={{
                textAlign: 'right', '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none',
                },
                '& .MuiSelect-icon': {
                  display: 'none',
                },
                '& .MuiInputLabel-root': {
                  transform: 'none',
                },
                '& .MuiInputLabel-root.MuiInputLabel-shrink': {
                  transform: 'none',

                }
              }}
              options={[
                { value: 'High(20)', label: 'High(20)' },
                { value: 'Low(30)', label: 'Low(30)' },
                { value: 'Medium(40)', label: 'Medium(30)' },

              ]}

            />
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
    <div style={{marginTop:'20px'}}>        
    <ButtonComponent
    maxWidth="100px"
    label="Back"
    bgColor="white"
    color="black"
  />
</div>
</div>
  );
};

export default AnalyticsResults;
