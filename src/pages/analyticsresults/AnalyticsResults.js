import React, { useState } from "react";
import { Container, Grid } from "@mui/material";
import DataTable from "../../components/common/DataTable";
import TabSection from "../../components/common/TabSection";
import ActionInput from "../../components/common/actioninput/ActionInputField";
import ButtonComponent from "../../components/common/button/Button";
import Dropdown from "../../components/common/Dropdown";
import "./AnalyticsResults.css";
const AnalyticsResults = () => {
  const [value, setValue] = useState(0);
  const pagination = true;
  const paginationPageSize = 10;
  const paginationPageSizeSelector = [10, 20, 30, 50, 100];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
    },
    { field: "Material", resizable: false, suppressMovable: true },
    {
      field: "InventoryClassification",
      resizable: false,
      suppressMovable: true,
    },
    { field: "MaterialType", resizable: false, suppressMovable: true },
    { field: "ShipFrom", resizable: false, suppressMovable: true },
    { field: "ShipTo", resizable: false, suppressMovable: true },
    { field: "MasterLT", resizable: false, suppressMovable: true },
    { field: "DemonstratedLT", resizable: false, suppressMovable: true },
    { field: "confidencescore", resizable: false, suppressMovable: true },
    { field: "LTVariations", resizable: false, suppressMovable: true },
    { field: "Analyticsintiatedby", resizable: false, suppressMovable: true },
    { field: "ViewInputDetails", resizable: false, suppressMovable: true },
    {
      field: "FinalLTtobeupdatedinS4",
      lockPinned: true,
      suppressMovable: true,
    },
    {
      field: "Details",
      suppressMovable: true,
      cellRenderer: () => (
        <div className="btn-wrapper">
          {" "}
          <ButtonComponent label="Details" />
        </div>
      ),
      pinned: "right",
      width: 120,
      lockPinned: true,
      resizable: false,
    },
  ]);

  const [openingPeriodVariationItem] = useState([
    { field: "Supplier" },
    { field: "Material" },
    { field: "InventoryClassification" },
    { field: "MaterialType" },
    { field: "ShipFrom" },
    { field: "ShipTo" },
    { field: "OpeningPeriodvariations" },
    { field: "MasterLT" },
    { field: "DemonstratedLT" },
    { field: "confidencescore" },
    { field: "LTVariations" },
    { field: "Analyticsintiatedby" },
    {
      field: "Details",
      cellRenderer: () => (
        <div className="btn-wrapper">
          <ButtonComponent label="Details" />
        </div>
      ),
      pinned: "right",
      width: 120,
    },
  ]);

  const [openingPeriodVariationItemList] = useState([
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
      Supplier: "xyz Inc",
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
      Supplier: "xyz Inc",
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
      Supplier: "xyz Inc",
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
      Supplier: "xyz Inc",
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
      Supplier: "xyz Inc",
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
      Supplier: "xyz Inc",
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
      Supplier: "xyz Inc",
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
      Supplier: "xyz Inc",
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

  return (
    <div
      style={{
        border: "1px solid lightgrey",
        borderRadius: "6px",
        padding: "10px",
      }}
    >
      <div style={{ display:"flex", flexDirection:"column",gap:"10px"}}>
        <div
          style={{
            display: "flex"
          }}
        >
          <div style={{width:"30%"}}>
          <ActionInput icon={"search"} position={"left"}  props={{height:"40px"}}/>
          </div>
          <div style={{ width:"70%",display:"flex", justifyContent:"end"}}>
          <Dropdown 
             width ="135px"
             styles ={{ textAlign: 'right','& .MuiOutlinedInput-notchedOutline': {
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
              {value: 'High(20)', label: 'High(20)'},
              {value: 'Low(30)',label:'Low(30)'},
              {value: 'Medium(40)',label:'Medium(30)'},
              
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
  );
};

export default AnalyticsResults;
