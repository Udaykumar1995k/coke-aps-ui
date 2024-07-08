import React,{useState} from 'react';
import { Container, Grid, Tab, Tabs } from '@mui/material';
import Button from '@mui/material/Button';
import AnalyticsResultTable from '../components/AnalyticsResultTable'

const columns = [
  { id: 'Supplier', label: 'Supplier', minWidth: 100},
  { id: 'Material', label: 'Material', minWidth: 100},
  {
    id: 'Inventory_Classification',
    label: 'Inventory Classification',
    minWidth: 70,
  },
  {
    id: 'Material_Type',
    label: 'Material Type',
    minWidth: 140,
  },
  {
    id: 'Ship_From',
    label: 'Ship From',
     minWidth: 100,
  },

  {
    id: 'Ship_To',
    label: 'Ship To',
    minWidth: 100,
  },
  {
    id: 'Master_LT',
    label: 'Master LT',
    minWidth: 100,
  },
  {
    id: 'Demon_started_LT',
    label: 'Demon started LT',
    minWidth: 100,
  },
  {
    id: 'Confidence_score',
    label: 'Confidence score',
    minWidth: 100,
  },
  {
    id: 'LT_Variation',
    label: 'LT Variation',
    minWidth: 100,
  },
  {
    id: 'Analytics_intiated_by',
    label: 'Analytics intiated by',
    minWidth: 100,
  },
  {
    id: 'View_Input_Details',
    label: 'View Input Details',
  },
  {
    id: 'Details',
    label: 'Details',
  },
  
];

function createData(Supplier, Material, Inventory_Classification, Material_Type,Ship_From,Ship_To,Master_LT,Demon_started_LT,Confidence_score,LT_Variation,Analytics_intiated_by,View_Input_Details,Details) {
  return { Supplier, Material, Inventory_Classification, Material_Type,Ship_From,Ship_To,Master_LT,Demon_started_LT,Confidence_score,LT_Variation,Analytics_intiated_by,View_Input_Details,Details };
}

const rows = [
  createData('Abc Inc', 'Material 1','A','Ingredients','Helsinki','Ballina','40 days','60 days','90%','High','Admin',
  <Button variant="contained"  sx={{ backgroundColor: '#177C8E', color: 'white', padding: '1px 6px'}} onClick={() =>{ handleViewInputDetailsClick()}}>Input</Button>,
  <Button variant="contained" sx={{ backgroundColor: '#177C8E', color: 'white', padding: '2px 6px'}} onClick={() => {handleDetailsClick()}}>Details</Button>),
   createData('--', '--','--','--','--','--','--','--','--'), 
   createData('--', '--','--','--','--','--','--','--','--'),
   createData('--', '--','--','--','--','--','--','--','--'),
   createData('--', '--','--','--','--','--','--','--','--'), 
   createData('--', '--','--','--','--','--','--','--','--'),
   createData('--', '--','--','--','--','--','--','--','--'),  
   createData('--', '--','--','--','--','--','--','--','--'),
   createData('--', '--','--','--','--','--','--','--','--'),
   createData('--', '--','--','--','--','--','--','--','--'), 
   createData('--', '--','--','--','--','--','--','--','--'),
   createData('--', '--','--','--','--','--','--','--','--'),
]
const recentContractItems= [
  createData('xyz Inc', 'Material','A','Ingredients','India','Ballina','30 days','70 days','80%','High','Admin1',
  <Button variant="contained"  sx={{ backgroundColor: '#177C8E', color: 'white', padding: '1px 6px'}} onClick={() =>{ handleViewInputDetailsClick()}}>Input</Button>,
  <Button variant="contained" sx={{ backgroundColor: '#177C8E', color: 'white', padding: '2px 6px'}} onClick={() => {handleDetailsClick()}}>Details</Button>),
  createData('--', '--','--','--','--','--','--','--','--'), 
  createData('--', '--','--','--','--','--','--','--','--'),
  createData('--', '--','--','--','--','--','--','--','--'),
  createData('--', '--','--','--','--','--','--','--','--'), 
  createData('--', '--','--','--','--','--','--','--','--'),
  createData('--', '--','--','--','--','--','--','--','--'), 
]

function handleViewInputDetailsClick() {

  console.log('View Input Details');
}

function handleDetailsClick() {
  console.log('Details');
}

const AnalyticsResults = () => {
  const[value,setValue]=useState(0);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  return (
    <Container maxWidth="lg" >
      <Grid container spacing={2}>
      <Grid item xs={12}>
       <Tabs
        onChange={handleChange}
        value={value}
        aria-label="lead time analytics tabs"
        variant="fullWidth" 
      >
        <Tab label="Regular Items"/>
        <Tab label="Opening Period Variation Items"/>
        <Tab label="Recent Contract Updates Items"/>
      </Tabs>
      </Grid>
      <Grid item xs={12}>
      {value === 0 && (
        <AnalyticsResultTable columns={columns} rows={rows} page={page} rowsPerPage={rowsPerPage} handleChangePage={handleChangePage} handleChangeRowsPerPage={handleChangeRowsPerPage}/>
      )}
      {value === 1 && (
      <AnalyticsResultTable columns={columns} rows={rows} page={page} rowsPerPage={rowsPerPage} handleChangePage={handleChangePage} handleChangeRowsPerPage={handleChangeRowsPerPage}/>
      
    )}
    {value === 2 && (
      <AnalyticsResultTable columns={columns} rows={recentContractItems} page={page} rowsPerPage={rowsPerPage} handleChangePage={handleChangePage} handleChangeRowsPerPage={handleChangeRowsPerPage}/>)} 
      </Grid>    
      </Grid> 
    </Container>
  )
}

export default AnalyticsResults
