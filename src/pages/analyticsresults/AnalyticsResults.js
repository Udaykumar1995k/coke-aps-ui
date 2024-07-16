import React, { useState } from 'react';
import { Container, Grid } from '@mui/material';
import DataTable from '../../components/common/DataTable';
import TabSection from '../../components/common/TabSection';
import SearchInput from '../../components/common/SearchInputField';
import ButtonComponent from '../../components/common/button/Button';
import './AnalyticsResults.css'


const regularItem = [
  { field: 'Supplier', label: 'Supplier', width: 100 },
  { field: 'Material', label: 'Material', width: 100 },
  {
    field: 'InventoryClassification',
    headerName: 'Inventory Classification',
    width: 80,
  },
  {
    field: 'MaterialType',
    headerName: 'Material Type',
    width: 130,
  },
  {
    field: 'ShipFrom',
    headerName: 'Ship From',
    width: 130,
  },

  {
    field: 'ShipTo',
    headerName: 'Ship To',
    width: 130,
  },
  {
    field: 'MasterLT',
    headerName: 'Master LT',
    width: 100,
  },
  {
    field: 'DemonstratedLT',
    headerName: 'Demon strated LT',
    width: 100,
  },
  {
    field: 'confidencescore',
    headerName: 'Confidence score',
    width: 100,
  },
  {
    field: 'LTVariations',
    headerName: 'LT Variations',
    width: 100,
  },
  {
    field: 'Analyticsintiatedby',
    headerName: 'Analytics intiated by',
    width: 100,
  },
  {
    field: 'ViewInputDetails',
    headerName: 'View Input Details',
  },
  {
    field: 'Details',
    headerName: 'Details',
    renderCell: () => <ButtonComponent label='Details' />,
    // cellClassName: 'sticky-col',
  },

];

const openingPeriodVariationItems = [
  { field: 'Supplier', headerName: 'Supplier', width: 100 },
  { field: 'Material', headerName: 'Material', width: 100 },
  {
    field: 'InventoryClassification',
    headerName: 'Inventory Classification',
    width: 90,
  },
  {
    field: 'MaterialType',
    headerName: 'Material Type',
    width: 90,
  },
  {
    field: 'ShipFrom',
    headerName: 'Ship From',
    width: 100,
  },

  {
    field: 'ShipTo',
    headerName: 'Ship To',
    width: 100,
  },

  {
    field: 'OpeningPeriodvariations',
    headerName: 'Opening Period variations',
    width: 90,
  },

  {
    field: 'MasterLT',
    headerName: 'Master LT',
    width: 90,
  },
  {
    field: 'DemonstratedLT',
    headerName: 'Demon strated LT',
    width: 100,
  },
  {
    field: 'confidencescore',
    headerName: 'Conffieldence score',
    width: 100,
  },
  {
    field: 'LTVariations',
    headerName: 'LT Variations',
    width: 100,
  },
  {
    field: 'Analyticsintiatedby',
    headerName: 'Analytics intiated by',
    width: 100,
  },
  {
    field: 'Details',
    headerName: 'Details',
    renderCell: () => <ButtonComponent label='Details' />,
    // cellClassName: 'sticky-col',
  },

];

const recentContractUpdateItems = [
  { field: 'Supplier', headerName: 'Supplier', width: 100 },
  { field: 'Material', headerName: 'Material', width: 100 },
  {
    field: 'InventoryClassification',
    headerName: 'Inventory Classification',
    width: 70,
  },
  {
    field: 'MaterialType',
    headerName: 'Material Type',
    width: 120,
  },
  {
    field: 'ShipFrom',
    headerName: 'Ship From',
    width: 100,
  },

  {
    field: 'ShipTo',
    headerName: 'Ship To',
    width: 100,
  },
  {
    field: 'ChangeinContractLT',
    headerName: 'Change in Contract LT',
    width: 100,
  },
  {
    field: 'ContractUpdatedon',
    headerName: 'Contract Updated on',
    width: 100,
  },
  {
    field: 'MasterLT',
    headerName: 'Master LT',
    width: 100,
  },
  {
    field: 'DemonstratedLT',
    headerName: 'Demon strated LT',
    width: 100,
  },
  {
    field: 'confidencescore',
    headerName: 'Conffieldence score',
    width: 100,
  },
  {
    field: 'LTVariations',
    headerName: 'LT Variations',
    width: 100,
  },
  {
    field: 'Analyticsintiatedby',
    headerName: 'Analytics intiated by',
    width: 100,
  },
  {
    field: 'Details',
    headerName: 'Details',
    renderCell: () => <ButtonComponent label='Details' />,
    //  cellClassName: 'sticky-col',
  },

];
function createDataForFirstTab(Supplier, Material, InventoryClassification, MaterialType, ShipFrom, ShipTo, MasterLT, DemonstratedLT, confidencescore, LTVariations, Analyticsintiatedby, ViewInputDetails, Details) {
  return { Supplier, Material, InventoryClassification, MaterialType, ShipFrom, ShipTo, MasterLT, DemonstratedLT, confidencescore, LTVariations, Analyticsintiatedby, ViewInputDetails, Details };
}

function createDataForSecondTab(Supplier, Material, InventoryClassification, MaterialType, ShipFrom, ShipTo, OpeningPeriodvariations, MasterLT, DemonstratedLT, confidencescore, LTVariations, Analyticsintiatedby, Details) {
  return { Supplier, Material, InventoryClassification, MaterialType, ShipFrom, ShipTo, OpeningPeriodvariations, MasterLT, DemonstratedLT, confidencescore, LTVariations, Analyticsintiatedby, Details };
}

function createDataForThirdTab(Supplier, Material, InventoryClassification, MaterialType, ShipFrom, ShipTo, ChangeinContractLT, ContractUpdatedon, MasterLT, DemonstratedLT, confidencescore, LTVariations, Analyticsintiatedby, Details) {
  return { Supplier, Material, InventoryClassification, MaterialType, ShipFrom, ShipTo, ChangeinContractLT, ContractUpdatedon, MasterLT, DemonstratedLT, confidencescore, LTVariations, Analyticsintiatedby, Details };
}
const rows = [

  createDataForFirstTab('Abc Inc', 'Material 1', 'A', 'Ingredients', 'Helsinki', 'Ballina', '40 days', '60 days', '90%', 'High', 'Admin', 'ViewInputDetails', <ButtonComponent label='Details' />),
  createDataForFirstTab('Abc Inc', 'Material 1', 'A', 'Ingredients', 'Helsinki', 'Ballina', '40 days', '60 days', '90%', 'High', 'Admin',),
  createDataForFirstTab('Abc Inc', 'Material 1', 'A', 'Ingredients', 'Helsinki', 'Ballina', '40 days', '60 days', '90%', 'High', 'Admin',),
  createDataForFirstTab('Abc Inc', 'Material 1', 'A', 'Ingredients', 'Helsinki', 'Ballina', '40 days', '60 days', '90%', 'High', 'Admin',),
  createDataForFirstTab('Abc Inc', 'Material 1', 'A', 'Ingredients', 'Helsinki', 'Ballina', '40 days', '60 days', '90%', 'High', 'Admin',),
  createDataForFirstTab('Abc Inc', 'Material 1', 'A', 'Ingredients', 'Helsinki', 'Ballina', '40 days', '60 days', '90%', 'High', 'Admin',),
  createDataForFirstTab('Abc Inc', 'Material 1', 'A', 'Ingredients', 'Helsinki', 'Ballina', '40 days', '60 days', '90%', 'High', 'Admin',),
  createDataForFirstTab('Abc Inc', 'Material 1', 'A', 'Ingredients', 'Helsinki', 'Ballina', '40 days', '60 days', '90%', 'High', 'Admin',),
  createDataForFirstTab('Abc Inc', 'Material 1', 'A', 'Ingredients', 'Helsinki', 'Ballina', '40 days', '60 days', '90%', 'High', 'Admin',),
  createDataForFirstTab('Abc Inc', 'Material 1', 'A', 'Ingredients', 'Helsinki', 'Ballina', '40 days', '60 days', '90%', 'High', 'Admin',),
  createDataForFirstTab('Abc Inc', 'Material 1', 'A', 'Ingredients', 'Helsinki', 'Ballina', '40 days', '60 days', '90%', 'High', 'Admin',),
  createDataForFirstTab('Abc Inc', 'Material 1', 'A', 'Ingredients', 'Helsinki', 'Ballina', '40 days', '60 days', '90%', 'High', 'Admin',),
]
const openingPeriodVariationItemList = [
  createDataForSecondTab('Abc Inc', 'Material 1', 'A', 'Ingredients', 'Helsinki', 'Ballina', '5 days', '40 days', '60 days', '90%', 'High', 'Admin',
    <ButtonComponent label='Details' />,),
  createDataForSecondTab('--', '--', '--', '--', '--', '--', '--', '--', '--', '--'),
  createDataForSecondTab('--', '--', '--', '--', '--', '--', '--', '--', '--', '--'),
  createDataForSecondTab('--', '--', '--', '--', '--', '--', '--', '--', '--', '--'),
  createDataForSecondTab('--', '--', '--', '--', '--', '--', '--', '--', '--', '--'),
  createDataForSecondTab('--', '--', '--', '--', '--', '--', '--', '--', '--', '--'),
  createDataForSecondTab('--', '--', '--', '--', '--', '--', '--', '--', '--', '--'),
  createDataForSecondTab('--', '--', '--', '--', '--', '--', '--', '--', '--', '--'),
  createDataForSecondTab('--', '--', '--', '--', '--', '--', '--', '--', '--', '--'),
]

const recentContractItems = [
  createDataForThirdTab('xyz Inc', 'Material', 'A', 'Ingredients', 'India', 'Ballina', '40 to 30 days', '20 Jun 24', '30 days', '70 days', '80%', 'High', 'Admin1',
    <ButtonComponent label='Details' />),
  createDataForThirdTab('--', '--', '--', '--', '--', '--', '--', '--', '--'),
  createDataForThirdTab('--', '--', '--', '--', '--', '--', '--', '--', '--'),
  createDataForThirdTab('--', '--', '--', '--', '--', '--', '--', '--', '--'),
  createDataForThirdTab('--', '--', '--', '--', '--', '--', '--', '--', '--'),
  createDataForThirdTab('--', '--', '--', '--', '--', '--', '--', '--', '--'),
  createDataForThirdTab('--', '--', '--', '--', '--', '--', '--', '--', '--'),
]

const AnalyticsResults = () => {
  const [value, setValue] = useState(0);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const addUniqueId = (data) => data.map((item, index) => ({ id: index, ...item }));

  const rowsWithId = addUniqueId(rows);
  const openingPeriodVariationItemListWithId = addUniqueId(openingPeriodVariationItemList);
  const recentContractItemsWithId = addUniqueId(recentContractItems);

  return (
    <Container maxWidth="lg" >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TabSection label={["Regular Items", "Opening Period Variation Items", "Recent Contract Updates Items"]} value={value} handleChange={handleChange} />
        </Grid>
        <Grid item xs={4}> <SearchInput /></Grid>


        <Grid item xs={12}>
          {value === 0 && (
            <DataTable columns={regularItem} rows={rowsWithId} checkboxSelection={false} />
          )}
          {value === 1 && (
            <DataTable columns={openingPeriodVariationItems} rows={openingPeriodVariationItemListWithId} checkboxSelection={true} />
          )}
          {value === 2 && (
            <DataTable columns={recentContractUpdateItems} rows={recentContractItemsWithId} checkboxSelection={false} />)}
        </Grid>
      </Grid>
    </Container>
  )
}

export default AnalyticsResults
