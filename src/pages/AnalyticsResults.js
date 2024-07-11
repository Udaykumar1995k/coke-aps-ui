import React,{useState} from 'react';
import { Container, Grid, } from '@mui/material';
import Button from '@mui/material/Button';
import DataTable from '../components/common/DataTable'
import TabSection from '../components/common/TabSection'

const regularItem = [
  { id: 'Supplier', label: 'Supplier', minWidth: 100},
  { id: 'Material', label: 'Material', minWidth: 100},
  {
    id: 'Inventory_Classification',
    label: 'Inventory Classification',
    minWidth: 80,
  },
  {
    id: 'Material_Type',
    label: 'Material Type',
    minWidth: 100,
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
    id: 'Demon_strated_LT',
    label: 'Demon strated LT',
    minWidth: 100,
  },
  {
    id: 'Confidence_score',
    label: 'Confidence score',
    minWidth: 100,
  },
  {
    id: 'LT_Variations',
    label: 'LT Variations',
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

const openingPeriodVariationItems =  [
  { id: 'Supplier', label: 'Supplier',  minWidth: 100},
  { id: 'Material', label: 'Material',  minWidth: 100},
  {
    id: 'Inventory_Classification',
    label: 'Inventory Classification',
     minWidth: 90,
  },
  {
    id: 'Material_Type',
    label: 'Material Type',
    minWidth: 90,
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
    id: 'Opening_Period_variations',
    label: 'Opening Period variations',
    minWidth: 90,
  },

  {
    id: 'Master_LT',
    label: 'Master LT',
     minWidth: 90,
  },
  {
    id: 'Demon_strated_LT',
    label: 'Demon strated LT',
    minWidth: 100,
  },
  {
    id: 'Confidence_score',
    label: 'Confidence score',
    minWidth: 100,
  },
  {
    id: 'LT_Variations',
    label: 'LT Variations',
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

const recentContractUpdateItems=  [
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
    minWidth: 120,
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
    id: 'Change_in_Contract_LT',
    label: 'Change in Contract LT',
    minWidth: 100,
  },
  {
    id: 'Contract_Updated_on',
    label: 'Contract Updated on',
    minWidth: 100,
  },
  {
    id: 'Master_LT',
    label: 'Master LT',
    minWidth: 100,
  },
  {
    id: 'Demon_strated_LT',
    label: 'Demon strated LT',
    minWidth: 100,
  },
  {
    id: 'Confidence_score',
    label: 'Confidence score',
    minWidth: 100,
  },
  {
    id: 'LT_Variations',
    label: 'LT Variations',
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
function createDataForFirstTab(Supplier, Material, Inventory_Classification, Material_Type,Ship_From,Ship_To,Master_LT,Demon_strated_LT,Confidence_score,LT_Variations,Analytics_intiated_by,View_Input_Details,Details) {
  return { Supplier, Material, Inventory_Classification, Material_Type,Ship_From,Ship_To,Master_LT,Demon_strated_LT,Confidence_score,LT_Variations,Analytics_intiated_by,View_Input_Details,Details };
}

function createDataForSecondTab(Supplier, Material, Inventory_Classification, Material_Type,Ship_From,Ship_To,Opening_Period_variations,Master_LT,Demon_strated_LT,Confidence_score,LT_Variations,Analytics_intiated_by,View_Input_Details,Details) {
  return { Supplier, Material, Inventory_Classification, Material_Type,Ship_From,Ship_To,Opening_Period_variations,Master_LT,Demon_strated_LT,Confidence_score,LT_Variations,Analytics_intiated_by,View_Input_Details,Details };
}

function createDataForThirdTab(Supplier, Material, Inventory_Classification, Material_Type,Ship_From,Ship_To,Change_in_Contract_LT,Contract_Updated_on,Master_LT,Demon_strated_LT,Confidence_score,LT_Variations,Analytics_intiated_by,View_Input_Details,Details) {
  return { Supplier, Material, Inventory_Classification, Material_Type,Ship_From,Ship_To,Change_in_Contract_LT,Contract_Updated_on,Master_LT,Demon_strated_LT,Confidence_score,LT_Variations,Analytics_intiated_by,View_Input_Details,Details };
}
const rows = [
  createDataForFirstTab('Abc Inc', 'Material 1','A','Ingredients','Helsinki','Ballina','40 days','60 days','90%','High','Admin',
  <Button variant="contained"  sx={{ backgroundColor: '#177C8E', color: 'white', padding: '1px 6px'}} onClick={() =>{ handleViewInputDetailsClick()}}>Input</Button>,
  <Button variant="contained" sx={{ backgroundColor: '#177C8E', color: 'white', padding: '2px 6px'}} onClick={() => {handleDetailsClick()}}>Details</Button>),
  createDataForFirstTab('--', '--','--','--','--','--','--','--','--'), 
  createDataForFirstTab('--', '--','--','--','--','--','--','--','--'), 
  createDataForFirstTab('--', '--','--','--','--','--','--','--','--'), 
  createDataForFirstTab('--', '--','--','--','--','--','--','--','--'), 
  createDataForFirstTab('--', '--','--','--','--','--','--','--','--'), 
  createDataForFirstTab('--', '--','--','--','--','--','--','--','--'), 
  createDataForFirstTab('--', '--','--','--','--','--','--','--','--'),
  createDataForFirstTab('--', '--','--','--','--','--','--','--','--'), 
  createDataForFirstTab('--', '--','--','--','--','--','--','--','--'), 
  createDataForFirstTab('--', '--','--','--','--','--','--','--','--'), 
  createDataForFirstTab('--', '--','--','--','--','--','--','--','--'), 
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
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <Container maxWidth="lg" >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TabSection label={["Regular Items", "Opening Period Variation Items", "Recent Contract Updates Items"]} value={value} handleChange={handleChange}/>
        </Grid>
        <Grid item xs={12}>
          {value === 0 && (
            <DataTable columns={regularItem} rows={rows} page={page} rowsPerPage={rowsPerPage} handleChangePage={handleChangePage} handleChangeRowsPerPage={handleChangeRowsPerPage} />
          )}
          {value === 1 && (
            <DataTable columns={openingPeriodVariationItems} rows={openingPeriodVariationItemList} page={page} rowsPerPage={rowsPerPage} handleChangePage={handleChangePage} handleChangeRowsPerPage={handleChangeRowsPerPage}/>
          )}
          {value === 2 && (
            <DataTable columns={recentContractUpdateItems} rows={recentContractItems} page={page} rowsPerPage={rowsPerPage} handleChangePage={handleChangePage} handleChangeRowsPerPage={handleChangeRowsPerPage}/>)}
        </Grid>
      </Grid>
    </Container>
  )
}

export default AnalyticsResults
