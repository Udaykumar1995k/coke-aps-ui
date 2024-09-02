import React, { useState } from 'react'
import { Box, Grid, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'

import TopSection from '../TopSection'
import './index.css';
import Dropdown from '../../components/common/Dropdown';

const PlannerMaterialMapping = () => {
  const [tabValue, setTabValue] = useState('1');

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <>
      <TopSection
        labelList={[
          { title: "Home", path: "/landing-page" },
          { title: "Planner-Material Mapping" },
        ]}
      />
      <Grid
        container
        xs={12}
        sx={{
          border: "1px solid gray",
          padding: "0 15px",
          borderRadius: "10px",
          flexDirection: "column",
        }}
      >
        <TabContext value={tabValue}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} className='tab-main'>
              <Tab label="Manual Update" value="1" />
              <Tab label="Excel Update" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
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
                <Dropdown
                  name="plantSupplier"
                  label="Plant/Supplier/Material"
                  // value={props?.formData?.plantSupplier}
                  options={[
                    { value: "Hierarchy1", label: "Hierarchy1" },
                    { value: "Hierarchy2", label: "Hierarchy2" },
                  ]}
                  // handleChange={props.handleChange}
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
                  // value={props.formData?.supplier}
                  options={[
                    { value: "ireland", label: "CPS Balina" },
                    { value: "india", label: "CPS Hyderabad" },
                  ]}
                  // handleChange={props.handleChange}
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
                  // value={props.formData?.materialType}
                  options={[
                    { value: "Type1", label: "Type1" },
                    { value: "Type2", label: "Type2" },
                  ]}
                  // handleChange={props.handleChange}
                />
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value="2">Excel Update</TabPanel>
        </TabContext>
      </Grid>
    </>
  )
}

export default PlannerMaterialMapping