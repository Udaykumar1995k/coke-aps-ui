import React, { useCallback, useState } from 'react';
import { Container, Grid } from '@mui/material';
import DataTable from '../../components/common/datatable/DataTable';
import ActionInput from '../../components/common/actioninput/ActionInputField';
import ButtonComponent from '../../components/common/button/Button';
import './AnalyticsResults.css'

const AnalyticsResults = () => {
  const pagination = true;
  const paginationPageSize = 10;
  const paginationPageSizeSelector = [10, 20, 30, 50, 100];

  const isRowSelectable = useCallback((param) => { return param.data.Supplier === 'xyz Inc' }, [])

  const [regularItems] = useState([
    { Supplier: "Abc Inc", Material: "Material Y", InventoryClassification: 'Material', MaterialType: 'A', ShipFrom: 'Ingredients', ShipTo: 'Helsinki', MasterLT: 'Ballina', DemonstratedLT: '6 days', confidencescore: '60 days', LTVariations: '60 days', Analyticsintiatedby: '90%', ViewInputDetails: 'High', FinalLTtobeupdatedinS4: 'Admin', Details: <ButtonComponent label='Details' /> },
    { Supplier: "xyz Inc", Material: "Material Y", InventoryClassification: 'Material', MaterialType: 'A', ShipFrom: 'Ingredients', ShipTo: 'Helsinki', MasterLT: 'Ballina', DemonstratedLT: '6 days', confidencescore: '60 days', LTVariations: '60 days', Analyticsintiatedby: '90%', ViewInputDetails: 'High', FinalLTtobeupdatedinS4: 'Admin', Details: <ButtonComponent label='Details' /> },
    { Supplier: "xyz Inc", Material: "Material Y", InventoryClassification: 'Material', MaterialType: 'A', ShipFrom: 'Ingredients', ShipTo: 'Helsinki', MasterLT: 'Ballina', DemonstratedLT: '6 days', confidencescore: '60 days', LTVariations: '60 days', Analyticsintiatedby: '90%', ViewInputDetails: 'High', FinalLTtobeupdatedinS4: 'Admin', Details: <ButtonComponent label='Details' /> },
    { Supplier: "xyz Inc", Material: "Material Y", InventoryClassification: 'Material', MaterialType: 'A', ShipFrom: 'Ingredients', ShipTo: 'Helsinki', MasterLT: 'Ballina', DemonstratedLT: '6 days', confidencescore: '60 days', LTVariations: '60 days', Analyticsintiatedby: '90%', ViewInputDetails: 'High', FinalLTtobeupdatedinS4: 'Admin', Details: <ButtonComponent label='Details' /> },
    { Supplier: "Abc Inc", Material: "Material Y", InventoryClassification: 'Material', MaterialType: 'A', ShipFrom: 'Ingredients', ShipTo: 'Helsinki', MasterLT: 'Ballina', DemonstratedLT: '6 days', confidencescore: '60 days', LTVariations: '60 days', Analyticsintiatedby: '90%', ViewInputDetails: 'High', FinalLTtobeupdatedinS4: 'Admin', Details: <ButtonComponent label='Details' /> },
    { Supplier: "pqr Inc", Material: "Material Y", InventoryClassification: 'Material', MaterialType: 'A', ShipFrom: 'Ingredients', ShipTo: 'Helsinki', MasterLT: 'Ballina', DemonstratedLT: '6 days', confidencescore: '60 days', LTVariations: '60 days', Analyticsintiatedby: '90%', ViewInputDetails: 'High', FinalLTtobeupdatedinS4: 'Admin', Details: <ButtonComponent label='Details' /> },
    { Supplier: "Abc Inc", Material: "Material Y", InventoryClassification: 'Material', MaterialType: 'A', ShipFrom: 'Ingredients', ShipTo: 'Helsinki', MasterLT: 'Ballina', DemonstratedLT: '6 days', confidencescore: '60 days', LTVariations: '60 days', Analyticsintiatedby: '90%', ViewInputDetails: 'High', FinalLTtobeupdatedinS4: 'Admin', Details: <ButtonComponent label='Details' /> },
    { Supplier: "pqr Inc", Material: "Material Y", InventoryClassification: 'Material', MaterialType: 'A', ShipFrom: 'Ingredients', ShipTo: 'Helsinki', MasterLT: 'Ballina', DemonstratedLT: '6 days', confidencescore: '60 days', LTVariations: '60 days', Analyticsintiatedby: '90%', ViewInputDetails: 'High', FinalLTtobeupdatedinS4: 'Admin', Details: <ButtonComponent label='Details' /> },
    { Supplier: "xyz Inc", Material: "Material Y", InventoryClassification: 'Material', MaterialType: 'A', ShipFrom: 'Ingredients', ShipTo: 'Helsinki', MasterLT: 'Ballina', DemonstratedLT: '6 days', confidencescore: '60 days', LTVariations: '60 days', Analyticsintiatedby: '90%', ViewInputDetails: 'High', FinalLTtobeupdatedinS4: 'Admin', Details: <ButtonComponent label='Details' /> },
  ]);

  const [regularItemsData] = useState([
    {
      headerCheckboxSelection: true,
      checkboxSelection: true,
      showDisabledCheckboxes: true,
      pinned: 'left',
      width: 50,
      lockPinned: true,
      suppressMovable: true,
      resizable: false,
    },
    {
      field: "Supplier", sortable: true, lockPinned: true, resizable: false, filterParams: {
        filterOptions: ["contains", "startsWith", "endsWith"],
        defaultOption: "startsWith",
      }, filter: "agColumnFilter", suppressMovable: true, unSortIcon: true
    },
    { field: "Material", resizable: false, suppressMovable: true, unSortIcon: true },
    { field: "InventoryClassification", resizable: false, suppressMovable: true, unSortIcon: true },
    { field: "MaterialType", resizable: false, suppressMovable: true, unSortIcon: true },
    { field: "ShipFrom", resizable: false, suppressMovable: true, unSortIcon: true },
    { field: "ShipTo", resizable: false, suppressMovable: true, unSortIcon: true },
    { field: "MasterLT", resizable: false, suppressMovable: true },
    { field: "DemonstratedLT", resizable: false, suppressMovable: true, unSortIcon: true },
    { field: "confidencescore", resizable: false, suppressMovable: true, unSortIcon: true },
    { field: "LTVariations", resizable: false, suppressMovable: true, unSortIcon: true },
    { field: "Analyticsintiatedby", resizable: false, suppressMovable: true, unSortIcon: true },
    { field: "ViewInputDetails", resizable: false, suppressMovable: true, unSortIcon: true },
    { field: "FinalLTtobeupdatedinS4", lockPinned: true, suppressMovable: true, unSortIcon: true },
    { field: "Details", suppressMovable: true, cellRenderer: () => <div className='btn-wrapper'> <ButtonComponent label="Details" /></div>, pinned: 'right', width: 120, lockPinned: true, resizable: false },
  ]);

  return (
    <>
      <Container maxWidth='lg'>
        <div className='analytics-result-container'>
          <Grid container spacing={2}>
            <Grid item xs={4}> <ActionInput icon={'search'} position={'left'} width='300px' /></Grid>
            <Grid item xs={12}>
              <DataTable columns={regularItemsData} rows={regularItems} pagination={pagination} paginationPageSize={paginationPageSize} paginationPageSizeSelector={paginationPageSizeSelector} isRowSelectable={isRowSelectable} />
            </Grid>
          </Grid>
        </div>
        <ButtonComponent
          maxWidth="100px"
          label="Back"
          bgColor="white"
          color="black"
        />
      </Container>
    </>
  )
};

export default AnalyticsResults;
