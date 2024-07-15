import React,{useState} from 'react';
import { Container, Grid, } from '@mui/material';
import Button from '@mui/material/Button';
import DataTable from '../components/common/DataTable'
import TabSection from '../components/common/TabSection'
import TextInput from '../components/common/TextInput'

const regularItem = [
  { field: 'Supplier', label: 'Supplier', width: 100},
  { field: 'Material', label: 'Material', width: 100},
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
  },
  
];

const openingPeriodVariationItems =  [
  { field: 'Supplier', headerName: 'Supplier',  width: 100},
  { field: 'Material', headerName: 'Material',  width: 100},
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
    field: 'ViewInputDetails',
    headerName: 'View Input Details',
  },
  {
    field: 'Details',
    headerName: 'Details',
  },
  
];

const recentContractUpdateItems=  [
  { field: 'Supplier', headerName: 'Supplier', width: 100},
  { field: 'Material', headerName: 'Material', width: 100},
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
    field: 'ViewInputDetails',
    headerName: 'View Input Details',
  },
  {
    field: 'Details',
    headerName: 'Details',
  },
  
];
function createDataForFirstTab(Supplier, Material, InventoryClassification, MaterialType,ShipFrom,ShipTo,MasterLT,DemonstratedLT,confidencescore,LTVariations,Analyticsintiatedby,ViewInputDetails,Details) {
  return { Supplier, Material, InventoryClassification, MaterialType,ShipFrom,ShipTo,MasterLT,DemonstratedLT,confidencescore,LTVariations,Analyticsintiatedby,ViewInputDetails,Details };
}

function createDataForSecondTab(Supplier, Material, InventoryClassification, MaterialType,ShipFrom,ShipTo,OpeningPeriodvariations,MasterLT,DemonstratedLT,confidencescore,LTVariations,Analyticsintiatedby,ViewInputDetails,Details) {
  return { Supplier, Material, InventoryClassification, MaterialType,ShipFrom,ShipTo,OpeningPeriodvariations,MasterLT,DemonstratedLT,confidencescore,LTVariations,Analyticsintiatedby,ViewInputDetails,Details };
}

function createDataForThirdTab(Supplier, Material, InventoryClassification, MaterialType,ShipFrom,ShipTo,ChangeinContractLT,ContractUpdatedon,MasterLT,DemonstratedLT,confidencescore,LTVariations,Analyticsintiatedby,ViewInputDetails,Details) {
  return { Supplier, Material, InventoryClassification, MaterialType,ShipFrom,ShipTo,ChangeinContractLT,ContractUpdatedon,MasterLT,DemonstratedLT,confidencescore,LTVariations,Analyticsintiatedby,ViewInputDetails,Details};
}
const rows = [
 
  createDataForFirstTab('Abc Inc', 'Material 1','A','Ingredients','Helsinki','Ballina','40 days','60 days','90%','High','Admin',
    <Button variant="contained"  sx={{ backgroundColor: '#177C8E', color: 'white', padding: '1px 6px'}} onClick={() =>{ handleViewInputDetailsClick()}}>Input</Button>,
    <Button variant="contained" sx={{ backgroundColor: '#177C8E', color: 'white', padding: '2px 6px'}} onClick={() => {handleDetailsClick()}}>Details</Button>),
    createDataForFirstTab('Abc Inc', 'Material 1','A','Ingredients','Helsinki','Ballina','40 days','60 days','90%','High','Admin',
      <Button variant="contained"  sx={{ backgroundColor: '#177C8E', color: 'white', padding: '1px 6px'}} onClick={() =>{ handleViewInputDetailsClick()}}>Input</Button>,
      <Button variant="contained" sx={{ backgroundColor: '#177C8E', color: 'white', padding: '2px 6px'}} onClick={() => {handleDetailsClick()}}>Details</Button>),
      createDataForFirstTab('Abc Inc', 'Material 1','A','Ingredients','Helsinki','Ballina','40 days','60 days','90%','High','Admin',
        <Button variant="contained"  sx={{ backgroundColor: '#177C8E', color: 'white', padding: '1px 6px'}} onClick={() =>{ handleViewInputDetailsClick()}}>Input</Button>,
        <Button variant="contained" sx={{ backgroundColor: '#177C8E', color: 'white', padding: '2px 6px'}} onClick={() => {handleDetailsClick()}}>Details</Button>),
        createDataForFirstTab('Abc Inc', 'Material 1','A','Ingredients','Helsinki','Ballina','40 days','60 days','90%','High','Admin',
          <Button variant="contained"  sx={{ backgroundColor: '#177C8E', color: 'white', padding: '1px 6px'}} onClick={() =>{ handleViewInputDetailsClick()}}>Input</Button>,
          <Button variant="contained" sx={{ backgroundColor: '#177C8E', color: 'white', padding: '2px 6px'}} onClick={() => {handleDetailsClick()}}>Details</Button>),
          createDataForFirstTab('Abc Inc', 'Material 1','A','Ingredients','Helsinki','Ballina','40 days','60 days','90%','High','Admin',
            <Button variant="contained"  sx={{ backgroundColor: '#177C8E', color: 'white', padding: '1px 6px'}} onClick={() =>{ handleViewInputDetailsClick()}}>Input</Button>,
            <Button variant="contained" sx={{ backgroundColor: '#177C8E', color: 'white', padding: '2px 6px'}} onClick={() => {handleDetailsClick()}}>Details</Button>),
            createDataForFirstTab('Abc Inc', 'Material 1','A','Ingredients','Helsinki','Ballina','40 days','60 days','90%','High','Admin',
              <Button variant="contained"  sx={{ backgroundColor: '#177C8E', color: 'white', padding: '1px 6px'}} onClick={() =>{ handleViewInputDetailsClick()}}>Input</Button>,
              <Button variant="contained" sx={{ backgroundColor: '#177C8E', color: 'white', padding: '2px 6px'}} onClick={() => {handleDetailsClick()}}>Details</Button>),
]
const openingPeriodVariationItemList = [
  createDataForSecondTab('Abc Inc', 'Material 1','A','Ingredients','Helsinki','Ballina','5 days','40 days','60 days','90%','High','Admin',
  <Button variant="contained"  sx={{ backgroundColor: '#177C8E', color: 'white', padding: '1px 6px'}} onClick={() =>{ handleViewInputDetailsClick()}}>Input</Button>,
  <Button variant="contained" sx={{ backgroundColor: '#177C8E', color: 'white', padding: '2px 6px'}} onClick={() => {handleDetailsClick()}}>Details</Button>),
  createDataForSecondTab('--', '--','--','--','--','--','--','--','--','--'), 
  createDataForSecondTab('--', '--','--','--','--','--','--','--','--','--'), 
  createDataForSecondTab('--', '--','--','--','--','--','--','--','--','--'), 
  createDataForSecondTab('--', '--','--','--','--','--','--','--','--','--'), 
  createDataForSecondTab('--', '--','--','--','--','--','--','--','--','--'), 
  createDataForSecondTab('--', '--','--','--','--','--','--','--','--','--'), 
  createDataForSecondTab('--', '--','--','--','--','--','--','--','--','--'), 
  createDataForSecondTab('--', '--','--','--','--','--','--','--','--','--'), 
]

const recentContractItems= [
  createDataForThirdTab('xyz Inc', 'Material','A','Ingredients','India','Ballina','40 to 30 days','20 Jun 24','30 days','70 days','80%','High','Admin1',
  <Button variant="contained"  sx={{ backgroundColor: '#177C8E', color: 'white', padding: '1px 6px'}} onClick={() =>{ handleViewInputDetailsClick()}}>Input</Button>,
  <Button variant="contained" sx={{ backgroundColor: '#177C8E', color: 'white', padding: '2px 6px'}} onClick={() => {handleDetailsClick()}}>Details</Button>),
  createDataForThirdTab('--', '--','--','--','--','--','--','--','--'), 
  createDataForThirdTab('--', '--','--','--','--','--','--','--','--'), 
  createDataForThirdTab('--', '--','--','--','--','--','--','--','--'), 
  createDataForThirdTab('--', '--','--','--','--','--','--','--','--'), 
  createDataForThirdTab('--', '--','--','--','--','--','--','--','--'), 
  createDataForThirdTab('--', '--','--','--','--','--','--','--','--'), 
]


function handleViewInputDetailsClick() {

  console.log('View Input Details');
}

function handleDetailsClick() {
  console.log('Details');
}

const AnalyticsResults = () => {
  const[value,setValue]=useState(0);
  
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
          <TabSection label={["Regular Items", "Opening Period Variation Items", "Recent Contract Updates Items"]} value={value} handleChange={handleChange}/>
        </Grid>
        <Grid item xs={4}> <TextInput/></Grid>
       
        <Grid item xs={12}>
          {value === 0 && (
            <DataTable columns={regularItem} rows={rowsWithId} checkboxSelection={false} />
          )}
          {value === 1 && (
            <DataTable columns={openingPeriodVariationItems} rows={openingPeriodVariationItemListWithId} checkboxSelection={true}/>
          )}
          {value === 2 && (
            <DataTable columns={recentContractUpdateItems} rows={recentContractItemsWithId} checkboxSelection={false} />)}
        </Grid>
      </Grid>
    </Container>
  )
}

export default AnalyticsResults
