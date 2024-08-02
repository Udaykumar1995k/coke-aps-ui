import React, { useState } from "react";
import DataTable from "../../components/common/datatable/DataTable";
import ActionInput from "../../components/common/actioninput/ActionInputField";
import ButtonComponent from "../../components/common/button/Button";
import Dropdown from "../../components/common/Dropdown";
import "./AnalyticsResults.css";
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
