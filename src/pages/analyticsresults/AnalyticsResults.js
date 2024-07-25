import React, { useState } from 'react';
import { Container, Grid } from '@mui/material';
import DataTable from '../../components/common/DataTable';
import TabSection from '../../components/common/TabSection';
import ActionInput from '../../components/common/actioninput/ActionInputField';
import ButtonComponent from '../../components/common/button/Button';
import './AnalyticsResults.css'
import AnalyticsResultsTab from './AnalyticsResultsTab';
const AnalyticsResults = () => {
  const [value, setValue] = useState(0);
  const pagination = true;
  const paginationPageSize = 10;
  const paginationPageSizeSelector = [10, 20, 30, 50, 100];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [regularItems] = useState([
    { Supplier: "Abc Inc", Material: "Material Y", InventoryClassification: 'Material', MaterialType: 'A', ShipFrom: 'Ingredients', ShipTo: 'Helsinki', MasterLT: 'Ballina', DemonstratedLT: '6 days', confidencescore: '60 days', LTVariations: '60 days', Analyticsintiatedby: '90%', ViewInputDetails: 'High', FinalLTtobeupdatedinS4: 'Admin', Details: <ButtonComponent label='Details' /> },
    { Supplier: "Abc Inc", Material: "Material Y", InventoryClassification: 'Material', MaterialType: 'A', ShipFrom: 'Ingredients', ShipTo: 'Helsinki', MasterLT: 'Ballina', DemonstratedLT: '6 days', confidencescore: '60 days', LTVariations: '60 days', Analyticsintiatedby: '90%', ViewInputDetails: 'High', FinalLTtobeupdatedinS4: 'Admin', Details: <ButtonComponent label='Details' /> },
    { Supplier: "Abc Inc", Material: "Material Y", InventoryClassification: 'Material', MaterialType: 'A', ShipFrom: 'Ingredients', ShipTo: 'Helsinki', MasterLT: 'Ballina', DemonstratedLT: '6 days', confidencescore: '60 days', LTVariations: '60 days', Analyticsintiatedby: '90%', ViewInputDetails: 'High', FinalLTtobeupdatedinS4: 'Admin', Details: <ButtonComponent label='Details' /> },
    { Supplier: "Abc Inc", Material: "Material Y", InventoryClassification: 'Material', MaterialType: 'A', ShipFrom: 'Ingredients', ShipTo: 'Helsinki', MasterLT: 'Ballina', DemonstratedLT: '6 days', confidencescore: '60 days', LTVariations: '60 days', Analyticsintiatedby: '90%', ViewInputDetails: 'High', FinalLTtobeupdatedinS4: 'Admin', Details: <ButtonComponent label='Details' /> },
    { Supplier: "Abc Inc", Material: "Material Y", InventoryClassification: 'Material', MaterialType: 'A', ShipFrom: 'Ingredients', ShipTo: 'Helsinki', MasterLT: 'Ballina', DemonstratedLT: '6 days', confidencescore: '60 days', LTVariations: '60 days', Analyticsintiatedby: '90%', ViewInputDetails: 'High', FinalLTtobeupdatedinS4: 'Admin', Details: <ButtonComponent label='Details' /> },
    { Supplier: "Abc Inc", Material: "Material Y", InventoryClassification: 'Material', MaterialType: 'A', ShipFrom: 'Ingredients', ShipTo: 'Helsinki', MasterLT: 'Ballina', DemonstratedLT: '6 days', confidencescore: '60 days', LTVariations: '60 days', Analyticsintiatedby: '90%', ViewInputDetails: 'High', FinalLTtobeupdatedinS4: 'Admin', Details: <ButtonComponent label='Details' /> },
    { Supplier: "Abc Inc", Material: "Material Y", InventoryClassification: 'Material', MaterialType: 'A', ShipFrom: 'Ingredients', ShipTo: 'Helsinki', MasterLT: 'Ballina', DemonstratedLT: '6 days', confidencescore: '60 days', LTVariations: '60 days', Analyticsintiatedby: '90%', ViewInputDetails: 'High', FinalLTtobeupdatedinS4: 'Admin', Details: <ButtonComponent label='Details' /> },
    { Supplier: "Abc Inc", Material: "Material Y", InventoryClassification: 'Material', MaterialType: 'A', ShipFrom: 'Ingredients', ShipTo: 'Helsinki', MasterLT: 'Ballina', DemonstratedLT: '6 days', confidencescore: '60 days', LTVariations: '60 days', Analyticsintiatedby: '90%', ViewInputDetails: 'High', FinalLTtobeupdatedinS4: 'Admin', Details: <ButtonComponent label='Details' /> },
    { Supplier: "Abc Inc", Material: "Material Y", InventoryClassification: 'Material', MaterialType: 'A', ShipFrom: 'Ingredients', ShipTo: 'Helsinki', MasterLT: 'Ballina', DemonstratedLT: '6 days', confidencescore: '60 days', LTVariations: '60 days', Analyticsintiatedby: '90%', ViewInputDetails: 'High', FinalLTtobeupdatedinS4: 'Admin', Details: <ButtonComponent label='Details' /> },
  ]);

  const [regularItemsData] = useState([
    {
      headerCheckboxSelection: true,
      checkboxSelection: true,
      pinned: 'left',
      width: 50,
      lockPinned: true
    },
    { field: "Supplier", lockPinned: true, resizable: false },
    { field: "Material", resizable: false },
    { field: "InventoryClassification", resizable: false },
    { field: "MaterialType", resizable: false },
    { field: "ShipFrom", resizable: false },
    { field: "ShipTo", resizable: false },
    { field: "MasterLT", resizable: false },
    { field: "DemonstratedLT", resizable: false },
    { field: "confidencescore", resizable: false },
    { field: "LTVariations", resizable: false },
    { field: "Analyticsintiatedby", resizable: false },
    { field: "ViewInputDetails", resizable: false },
    { field: "FinalLTtobeupdatedinS4", lockPinned: true },
    { field: "Details", cellRenderer: () => <div className='btn-wrapper'> <ButtonComponent label="Details" /></div>, pinned: 'right', width: 120, lockPinned: true, resizable: false },
  ]);

  const [openingPeriodVariationItem] = useState([

    { field: "Supplier" },
    { field: "Material" },
    { field: "InventoryClassification" },
    { field: "MaterialType" },
    { field: "ShipFrom" },
    { field: "ShipTo" },
    { field: 'OpeningPeriodvariations' },
    { field: "MasterLT" },
    { field: "DemonstratedLT" },
    { field: "confidencescore" },
    { field: "LTVariations" },
    { field: "Analyticsintiatedby" },
    { field: "Details", cellRenderer: () => <div className='btn-wrapper'><ButtonComponent label="Details" /></div>, pinned: 'right', width: 120 },
  ]);

  const [openingPeriodVariationItemList] = useState([
    { Supplier: "Abc Inc", Material: "Material Y", InventoryClassification: 'Material', MaterialType: 'A', ShipFrom: 'Ingredients', ShipTo: 'Helsinki', MasterLT: 'Ballina', DemonstratedLT: '6 days', confidencescore: '60 days', LTVariations: '60 days', Analyticsintiatedby: '90%', ViewInputDetails: 'High', FinalLTtobeupdatedinS4: 'Admin', Details: <ButtonComponent label='Details' /> },
    { Supplier: "xyz Inc", Material: "Material Y", InventoryClassification: 'Material', MaterialType: 'A', ShipFrom: 'Ingredients', ShipTo: 'Helsinki', MasterLT: 'Ballina', DemonstratedLT: '6 days', confidencescore: '60 days', LTVariations: '60 days', Analyticsintiatedby: '90%', ViewInputDetails: 'High', FinalLTtobeupdatedinS4: 'Admin', Details: <ButtonComponent label='Details' /> },
    { Supplier: "xyz Inc", Material: "Material Y", InventoryClassification: 'Material', MaterialType: 'A', ShipFrom: 'Ingredients', ShipTo: 'Helsinki', MasterLT: 'Ballina', DemonstratedLT: '6 days', confidencescore: '60 days', LTVariations: '60 days', Analyticsintiatedby: '90%', ViewInputDetails: 'High', FinalLTtobeupdatedinS4: 'Admin', Details: <ButtonComponent label='Details' /> },
    { Supplier: "xyz Inc", Material: "Material Y", InventoryClassification: 'Material', MaterialType: 'A', ShipFrom: 'Ingredients', ShipTo: 'Helsinki', MasterLT: 'Ballina', DemonstratedLT: '6 days', confidencescore: '60 days', LTVariations: '60 days', Analyticsintiatedby: '90%', ViewInputDetails: 'High', FinalLTtobeupdatedinS4: 'Admin', Details: <ButtonComponent label='Details' /> },
    { Supplier: "xyz Inc", Material: "Material Y", InventoryClassification: 'Material', MaterialType: 'A', ShipFrom: 'Ingredients', ShipTo: 'Helsinki', MasterLT: 'Ballina', DemonstratedLT: '6 days', confidencescore: '60 days', LTVariations: '60 days', Analyticsintiatedby: '90%', ViewInputDetails: 'High', FinalLTtobeupdatedinS4: 'Admin', Details: <ButtonComponent label='Details' /> },
    { Supplier: "xyz Inc", Material: "Material Y", InventoryClassification: 'Material', MaterialType: 'A', ShipFrom: 'Ingredients', ShipTo: 'Helsinki', MasterLT: 'Ballina', DemonstratedLT: '6 days', confidencescore: '60 days', LTVariations: '60 days', Analyticsintiatedby: '90%', ViewInputDetails: 'High', FinalLTtobeupdatedinS4: 'Admin', Details: <ButtonComponent label='Details' /> },
    { Supplier: "xyz Inc", Material: "Material Y", InventoryClassification: 'Material', MaterialType: 'A', ShipFrom: 'Ingredients', ShipTo: 'Helsinki', MasterLT: 'Ballina', DemonstratedLT: '6 days', confidencescore: '60 days', LTVariations: '60 days', Analyticsintiatedby: '90%', ViewInputDetails: 'High', FinalLTtobeupdatedinS4: 'Admin', Details: <ButtonComponent label='Details' /> },
    { Supplier: "xyz Inc", Material: "Material Y", InventoryClassification: 'Material', MaterialType: 'A', ShipFrom: 'Ingredients', ShipTo: 'Helsinki', MasterLT: 'Ballina', DemonstratedLT: '6 days', confidencescore: '60 days', LTVariations: '60 days', Analyticsintiatedby: '90%', ViewInputDetails: 'High', FinalLTtobeupdatedinS4: 'Admin', Details: <ButtonComponent label='Details' /> },
    { Supplier: "xyz Inc", Material: "Material Y", InventoryClassification: 'Material', MaterialType: 'A', ShipFrom: 'Ingredients', ShipTo: 'Helsinki', MasterLT: 'Ballina', DemonstratedLT: '6 days', confidencescore: '60 days', LTVariations: '60 days', Analyticsintiatedby: '90%', ViewInputDetails: 'High', FinalLTtobeupdatedinS4: 'Admin', Details: <ButtonComponent label='Details' /> },
  ]);


  return (
    <Container maxWidth="lg" >
      <AnalyticsResultsTab />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TabSection label={["Regular Items", "Opening Period Variation Items", "Recent Contract Updates Items"]} value={value} handleChange={handleChange} count={[12, 999, 23]} />
        </Grid>
        <Grid item xs={4}> <ActionInput icon={'search'} position={'left'} /></Grid>
        <Grid item xs={12}>
          {value === 0 && (
            <DataTable columns={regularItemsData} rows={regularItems} pagination={pagination} paginationPageSize={paginationPageSize} paginationPageSizeSelector={paginationPageSizeSelector} enableCheckbox={true} />
          )}
          {value === 1 && (
            <DataTable columns={openingPeriodVariationItem} rows={openingPeriodVariationItemList} pagination={pagination} paginationPageSize={paginationPageSize} paginationPageSizeSelector={paginationPageSizeSelector} enableCheckbox={false} />
          )}
          {value === 2 && (
            <DataTable columns={openingPeriodVariationItem} rows={openingPeriodVariationItemList} pagination={pagination} paginationPageSize={paginationPageSize} paginationPageSizeSelector={paginationPageSizeSelector} enableCheckbox={false} />)}
        </Grid>
      </Grid>
    </Container>
  )
};

export default AnalyticsResults;
