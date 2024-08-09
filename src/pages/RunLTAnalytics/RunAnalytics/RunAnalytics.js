import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

import TextInput from '../../../components/common/TextInput'

const RunAnalytics = (props) => {
  return (
    <div style={{ padding: "20px" }}>
      <Grid container xs={12} sx={{ flexDirection: "column" }}>
        <h4>Run Analytics Parameters</h4>
        <form>
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              "& .MuiFormControl-root": { width: "100%" },
              "& .MuiFormLabel-root": { fontSize: "14px" },
              "& .MuiInputBase-root>Input": {height: '80% !important'},
            }}
          >
            <label className="label-position" htmlFor="hierarchy">
              Label
            </label>
            <TextInput
              label="Prod-Critical-Items"
              name="prodCriticalItem"
              value={props?.runAnalyticsData?.prodCriticalItem}
              onChange={props.handleRunAnalyticsChange}
            />
          </Grid>
          <Grid
            item
            xs={6}
            mt={2}
            mb={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              "& .MuiFormControl-root": { width: "100%" },
              "& .MuiFormLabel-root": { fontSize: "14px" },
              "& .MuiInputBase-root>Input": {height: '80% !important'},
            }}
          >
            <label className="label-position" htmlFor="hierarchy">
              Description
            </label>
            <TextInput
              label="Material Type"
              name="materialType"
              value={props?.runAnalyticsData?.materialType}
              onChange={props.handleRunAnalyticsChange}
            />
          </Grid>
        </form>
        { props.showTable &&
        <Grid>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead sx={{background: '#f2f2f2'}}>
                <TableRow>
                  <TableCell>Unique Id</TableCell>
                  <TableCell>Label</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Start Date & Time</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">LT_Sam_Arnold_FY24_Apr_000010</TableCell>
                    <TableCell>Prod-Critical-Items</TableCell>
                    <TableCell>Material Type</TableCell>
                    <TableCell>22-June-24-11:30AM</TableCell>
                    <TableCell>Completed</TableCell>
                    <TableCell>
                      <DeleteIcon />
                      <VisibilityIcon />
                    </TableCell>
                  </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        }
      </Grid>
    </div>
  );
}

export default RunAnalytics