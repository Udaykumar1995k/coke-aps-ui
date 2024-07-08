import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination,Paper } from '@mui/material';
import React from 'react';

const AnalyticsResultTable = ({ columns, rows, page, rowsPerPage, handleChangePage, handleChangeRowsPerPage }) =>
{
return(
<Paper sx={{width: '100%', overflow: 'hidden'}}>
      <TableContainer sx={{maxHeight:500}}>
        <Table  aria-label="sticky table"  stickyHeader>
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
                  <TableRow hover tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id}>
                          { value}
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
      rowsPerPageOptions={[10, 15, 20, 100]}
      component="div"
      count={rows.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
    </Paper>
)};
export default AnalyticsResultTable