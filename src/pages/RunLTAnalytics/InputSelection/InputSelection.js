import React from "react";
import { Grid } from "@mui/material";

import "./InputSelection.css";
import CheckBoxInput from "../../../components/common/CheckboxInput";
import Dropdown from "../../../components/common/Dropdown";
import DatePicker from "../../../components/common/DatePicker";
import Modal from '../../../components/common/modal/Modal'
import {ModalFooter, ModalContent} from './ExcludeModal'

const InputSelection = (props) => {
  
  return (
    <>
      <div className="form-container">
        <h4>Input Data For Lead Time Analytics</h4>
        <form>
          <Grid container spacing={2}>
            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                "& .MuiFormControl-root": { width: "100%" },
                "& .MuiFormLabel-root": { fontSize: "14px" },
              }}
            >
              <label className="label-position" htmlFor="hierarchy">
                Hierarchy for LT Analytics
              </label>
              <Dropdown
                name="plantSupplier"
                label="Plant/Supplier/Material"
                value={props?.formData?.plantSupplier}
                options={[
                  { value: "Hierarchy1", label: "Hierarchy1" },
                  { value: "Hierarchy2", label: "Hierarchy2" },
                ]}
                handleChange={props.handleChange}
                sx={{ "& input::placeholder": { fontSize: "20px" } }}
              />
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                "& .MuiFormControl-root": { width: "100%" },
                "& .MuiFormLabel-root": { fontSize: "14px" },
              }}
            >
              <label className="label-position" htmlFor="supplier">
                Supplier
              </label>
              <Dropdown
                label="Supplier"
                name="supplier"
                value={props.formData?.supplier}
                options={[
                  { value: "ireland", label: "CPS Balina" },
                  { value: "india", label: "CPS Hyderabad" },
                ]}
                handleChange={props.handleChange}
              />
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                "& .MuiFormControl-root": { width: "100%" },
                "& .MuiFormLabel-root": { fontSize: "14px" },
              }}
            >
              <label className="label-position" htmlFor="material-type">
                Material Type
              </label>
              <Dropdown
                name="materialType"
                label="Material Type"
                value={props.formData?.materialType}
                options={[
                  { value: "Type1", label: "Type1" },
                  { value: "Type2", label: "Type2" },
                ]}
                handleChange={props.handleChange}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} mt={1}>
            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                "& .MuiFormControl-root": { width: "100%" },
                "& .MuiFormLabel-root": { fontSize: "14px" },
              }}
            >
              <label className="label-position" htmlFor="material-group">
                Material Group
              </label>
              <Dropdown
                maxWidth="260px"
                name="materialGroup"
                label="Material Group"
                value={props.formData?.materialGroup}
                options={[
                  { value: "Group1", label: "Group1" },
                  { value: "Group2", label: "Group2" },
                ]}
                handleChange={props.handleChange}
              />
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                "& .MuiFormControl-root": { width: "100%" },
                "& .MuiFormLabel-root": { fontSize: "14px" },
              }}
            >
              <label className="label-position" htmlFor="material">
                Material
              </label>
              <Dropdown
                maxWidth="260px"
                name="material"
                label="Material"
                value={props.formData?.material}
                options={[
                  { value: "Material1", label: "Material1" },
                  { value: "Material2", label: "Material2" },
                ]}
                handleChange={props.handleChange}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} mt={1}>
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                "& .MuiFormControl-root": { width: "80%" },
                "& .MuiFormLabel-root": { fontSize: "14px" },
                "& .MuiInputBase-root": { height: "90%" },
              }}
            >
              <label className="label-position" htmlFor="material">
                Ship From
              </label>
              <DatePicker
                name="shipFrom"
                label="Select From Date"
                value={props.formData?.fromDate}
                onChange={(e) => props.handleDateChange(e, "fromDate")}
              />
            </Grid>
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                "& .MuiFormControl-root": { width: "80%" },
                "& .MuiFormLabel-root": { fontSize: "14px" },
                "& .MuiInputBase-root": { height: "90%" },
              }}
            >
              <label className="label-position" htmlFor="material">
                Ship To
              </label>
              <DatePicker
                name="shipTo"
                label="Select To Date"
                value={props.formData?.fromDate}
                onChange={(e) => props.handleDateChange(e, "fromDate")}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} mt={1}>
            <Grid item xs={12}>
              <label className="label-position" htmlFor="period-to-consider">
                Period To Consider
              </label>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                paddingTop: "5px !important",
                "& .MuiFormControl-root": { width: "80%" },
                "& .MuiFormLabel-root": { fontSize: "14px" },
              }}
            >
              <Grid
                item
                xs={3}
                sx={{ "& .MuiInputBase-root>Input": { height: "90%" } }}
              >
                <DatePicker
                  name="fromDate"
                  label="Select From Date"
                  value={props.formData?.fromDate}
                  onChange={(e) => props.handleDateChange(e, "fromDate")}
                />
              </Grid>
              <Grid
                item
                xs={3}
                sx={{ "& .MuiInputBase-root>Input": { height: "90%" } }}
              >
                <DatePicker
                  name="toDate"
                  label="Select To Date"
                  value={props.formData?.toDate}
                  onChange={(e) => props.handleDateChange(e, "toDate")}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={2} mt={1}>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                "& .MuiFormControl-root": { width: "80%" },
                "& .MuiFormLabel-root": { fontSize: "14px" },
                "& .MuiInputBase-root": { height: "90%" },
                "& .MuiFormControlLabel-root": { marginRight: "0" },
              }}
            >
              <CheckBoxInput
                props={{
                  name: "excludeRange",
                  checked: props.formData?.excludeRange,
                  fontSize: 28,
                  onchange: props.handleChange,
                }}
              />
              <label className="label-position" htmlFor="period-to-consider">
                Exclude Range in the Period Selected
              </label>
            </Grid>
            {/* <Grid item xs={12} sx={{display: 'flex', paddingTop: '0 !important', flexDirection: 'row', alignItems: 'center',  "& .MuiFormControl-root": {width: '80%'}, "& .MuiFormLabel-root": {fontSize: '14px'}, "& .MuiInputBase-root": {height: '90%'}, "& .MuiFormControlLabel-root": {marginRight: '0'}  }}>
                      <textarea rows={5} style={{width: '100%', maxWidth: '400px', resize: 'none'}}></textarea>
                  </Grid> */}
          </Grid>
          <Grid container spacing={2} mt={1}>
            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                "& .MuiFormControl-root": { width: "100%" },
                "& .MuiFormLabel-root": { fontSize: "14px" },
              }}
            >
              <label className="label-position" htmlFor="material-group">
                Filter Pos Data by last Contract Update
              </label>
              <Dropdown
                maxWidth="260px"
                name="filterContract"
                label="Filter"
                value={props.formData?.filterContract}
                options={[
                  { value: "6 Months", label: "6 Months" },
                  { value: "12 Months", label: "12 Months" },
                ]}
                handleChange={props.handleChange}
              />
            </Grid>
          </Grid>
        </form>
      </div>
      {
        <Modal
          open={props.showModal}
          handleClose={props.handleClose}
          title="Exclude Range in Period Selected"
          action={<ModalFooter />}
          content={
            <ModalContent />
          }
          
        />
      }
    </>
  );
};
 
export default InputSelection;
