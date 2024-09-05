import React from "react";
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
const MaterialDetailsTable = ({ headers, rows }) => {
  return (
    <Grid mb={2}>
      <TableContainer >
        <Table
          sx={{
            minWidth: 650,
            tableLayout: "fixed",
            "& .MuiTableCell-head": { width: "120px" },
          }}
          aria-label="simple table"
        >
          <TableHead sx={{ background: "#f2f2f2" }}>
            <TableRow>
                {headers.map((header, index) => (
                  <TableCell
                    align={index === headers.length - 1 ? "right" : "left"}
                  >
                    {header}
                  </TableCell>
                ))}
              </TableRow>
          </TableHead>
          <TableBody>
          {rows.map((row, index) => (
             <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }} >
                 {row.map((cell, index) => (
                   <TableCell  component="th" scope="row" key={index}>{cell}</TableCell>
                 ))}
                 <TableCell align="right">
                   <EditIcon style={{ marginRight: 10 }} />
                   <DeleteIcon />
                 </TableCell>
               </TableRow>
             ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default MaterialDetailsTable;
