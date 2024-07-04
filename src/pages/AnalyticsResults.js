import React,{useState} from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination,Paper } from '@mui/material';
import Button from '@mui/material/Button';

const columns = [
  { id: 'Supplier', label: 'Supplier', minWidth: 120,},
  { id: 'Material', label: 'Material', minWidth: 120, },
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
      {value === 0 && (
        <>
    <Paper sx={{ width: '100%'}}>
      <TableContainer sx={{ maxHeight: 440,overflowX: 'auto' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  sx={{
                    verticalAlign: 'top', 
                    
                  }}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
      rowsPerPageOptions={[10, 25, 100]}
      component="div"
      count={rows.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
    </Paper>
      </>
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
