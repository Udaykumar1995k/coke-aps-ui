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
import VisibilityIcon from "@mui/icons-material/Visibility";

const MaterialDetailsTable = ({ headers, rows }) => {
  return (
    // <div>
    //   <TableContainer
    //     component={Paper}
    //   >
    //     <Table sx={{ width: "80%" }} aria-label="simple table">
    //       <TableHead sx={{ background: "#f2f2f2" }}>
    //         <TableRow>
    //           {headers.map((header, index) => (
    //             <TableCell
    //               align={index === headers.length - 1 ? "right" : "left"}
    //             >
    //               {header}
    //             </TableCell>
    //           ))}
    //         </TableRow>
    //       </TableHead>
    //       <TableBody>
    //         {rows.map((row, index) => (
    //           <TableRow key={index}>
    //             {row.map((cell, index) => (
    //               <TableCell key={index}>{cell}</TableCell>
    //             ))}
    //             <TableCell align="right">
    //               <VisibilityIcon style={{ marginRight: 10 }} />
    //               <DeleteIcon />
    //             </TableCell>
    //           </TableRow>
    //         ))}
    //       </TableBody>
    //     </Table>
    //   </TableContainer>
    // </div>
    <Grid mb={2}>
      <TableContainer component={Paper}>
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
              <TableCell>Unique Id</TableCell>
              <TableCell>Material Type</TableCell>
              <TableCell>Material Group</TableCell>
              <TableCell>Material</TableCell>
              <TableCell>Supplier</TableCell>
              <TableCell>Threshold value for LT Variations</TableCell>
              <TableCell>Cooling period in days</TableCell>
              <TableCell>Overdue Workflow days</TableCell>
              <TableCell>Low Lead time Variation Category</TableCell>
              <TableCell>Medium Lead time Variation Category</TableCell>
              <TableCell>High Lead time Variation Category</TableCell>
              <TableCell>Created On</TableCell>
              <TableCell>Updated On</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                1001
              </TableCell>
              <TableCell>Test</TableCell>
              <TableCell>MG-1</TableCell>
              <TableCell>MAT 1</TableCell>
              <TableCell>ABC Ltd</TableCell>
              <TableCell>-20% 20%</TableCell>
              <TableCell>180</TableCell>
              <TableCell>07</TableCell>
              <TableCell>-20% 20%</TableCell>
              <TableCell>41% 70%</TableCell>
              <TableCell>-20% 20%</TableCell>
              <TableCell>22-jun-24</TableCell>
              <TableCell>22-jun-24</TableCell>
              <TableCell>
                <DeleteIcon />
                <VisibilityIcon />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default MaterialDetailsTable;
