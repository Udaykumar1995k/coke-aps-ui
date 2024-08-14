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
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

import ButtonComponent from "../../../components/common/button/Button";
import DatePicker from "../../../components/common/DatePicker";
import dayjs from "dayjs";

const ModalContent = (props) => {
  return (
    <Grid
      sx={{
        "& .MuiInputBase-root": { height: "90%" },
      }}
    >
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead sx={{ background: "#f2f2f2" }}>
            <TableRow>
              <TableCell sx={{ width: "150px" }}>No. of Range</TableCell>
              <TableCell>From Date</TableCell>
              <TableCell>To Date</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props?.rows?.map((row, index) => {
              return (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    name="range"
                    value={row?.range}
                  >
                    {row?.range}
                  </TableCell>
                  <TableCell
                    sx={{
                      "& .MuiFormControl-root": {
                        height: "50px",
                        justifyContent: "center",
                      },
                    }}
                  >
                    <DatePicker
                      label="Select from Date"
                      name="excludeFromDate"
                      value={dayjs(row?.excludeFromDate)}
                      onChange={(e) =>
                        props?.handleExcludeDateChange(e, "excludeFromDate", index)
                      }
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      "& .MuiFormControl-root": {
                        height: "50px",
                        justifyContent: "center",
                      },
                    }}
                  >
                    <DatePicker
                      label="Select to Date"
                      name="excludeToDate"
                      value={dayjs(row?.excludeToDate)}
                      onChange={(e) =>
                        props?.handleExcludeDateChange(e, "excludeToDate", index)
                      }
                    />
                  </TableCell>
                  <TableCell>
                    {props?.rows?.length > 1 && (
                      <DeleteIcon
                        name="del"
                        onClick={() => props?.delRowHandler(index)}
                      />
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Grid
        mt={1}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          "& .MuiButtonBase-root": { border: "1px solid #000" },
        }}
      >
        <ButtonComponent
          label="Add"
          bgColor="#fff"
          color="#000"
          onClick={props?.handleAddRows}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          paddingTop: "0 !important",
          flexDirection: "column",
          "& .MuiFormControl-root": { width: "80%" },
          "& .MuiFormLabel-root": { fontSize: "14px" },
          "& .MuiInputBase-root": { height: "90%" },
          "& .MuiFormControlLabel-root": { marginRight: "0" },
        }}
      >
        <label className="label-position" htmlFor="material-group">
          Exclude Period
        </label>
        <textarea
          rows={5}
          style={{ width: "100%", maxWidth: "400px", resize: "none" }}
          disabled
        >
          {props?.rows?.map((row) => {
            return `<${row.range} From ${row.excludeToDate || "Date"} To ${
              row.excludeToDate || "Date"
            }>;`;
          })}
        </textarea>
      </Grid>
    </Grid>
  );
};

const ModalFooter = (props) => {
  return (
    <Grid sx={{ display: "flex", gap: "16px" }}>
      <ButtonComponent
        maxWidth="170px"
        label="Clear All"
        bgColor="white"
        color="black"
        onClick={props.clearAllExcludeModal}
      />
      <ButtonComponent
        maxWidth="170px"
        label="Submit"
        bgColor="black"
        color="white"
      />
    </Grid>
  );
};

export { ModalFooter, ModalContent };
