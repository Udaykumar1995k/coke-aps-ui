import React,{useState} from 'react';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import AnalyticsResultTable from '../components/AnalyticsResultTable'

import  './AnalyticsResults.css';

const columns = [
  { id: 'Supplier', label: 'Supplier',},
  { id: 'Material', label: 'Material', },
  {
    id: 'Inventory_Classification',
    label: 'Inventory Classification',
   // minWidth: 70,
  },
  {
    id: 'Material_Type',
    label: 'Material Type',
 //   minWidth: 140,
  },
  {
    id: 'Ship_From',
    label: 'Ship From',
  //  minWidth: 100,
  },

  {
    id: 'Ship_To',
    label: 'Ship To',
 //   minWidth: 100,
  },
  {
    id: 'Master_LT',
    label: 'Master LT',
   // minWidth: 100,
  },
  {
    id: 'Demon_started_LT',
    label: 'Demon started LT',
   // minWidth: 100,
  },
  {
    id: 'Confidence_score',
    label: 'Confidence score',
  //  minWidth: 100,
  },
  {
    id: 'LT_Variation',
    label: 'LT Variation',
    //minWidth: 100,
  },
  {
    id: 'Analytics_intiated_by',
    label: 'Analytics intiated by',
  //  minWidth: 100,
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
    <Box>
      <Box className='analytics-info'>
      <Box className='info-text'>
       <Typography variant='body2' className='bold-text'>Periods Considered for Analytics: 01-Jan-23 to 31-Dec-23</Typography> 
        <a href="">Click here to view the complete input details</a> 
        </Box>
        <Box className='info-text'>
        <Typography variant='body2' className='bold-text'>Analytics Initiated by: Administrator (Scheduler based)</Typography>
         <Typography variant='body2' className='bold-text'>Result Updated at  : 22-June-24 at 13:24:00 </Typography>   
        </Box>
      </Box>
      <Box> 
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
      </Box>
      {value === 0 && (
        <AnalyticsResultTable columns={columns} rows={rows} page={page} rowsPerPage={rowsPerPage} handleChangePage={handleChangePage} handleChangeRowsPerPage={handleChangeRowsPerPage}/>
      )}
      {value === 1 && (
      <h2>Content of tab-opening period variation Items</h2>
      
    )}
    {value === 2 && (
      <h2>Content of tab -Recent Contract Updates Items</h2>
    )}      
    </Box>
  )
}

export default AnalyticsResults
