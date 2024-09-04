import React, { useState } from 'react'
import { Autocomplete, Box, Grid, Paper, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import TopSection from '../TopSection'
import './index.css';
import Dropdown from '../../components/common/Dropdown';
import ButtonComponent from '../../components/common/button/Button';
import ExcelUpdate from '../ParameterConfiguration/ExcelUpdate';
import Modal from '../../components/common/modal/Modal';
import { FileOverivew, FileOverivewFooter } from '../ParameterConfiguration/FileOverview';


const data = [
    { plannerName: 'Jerry Mathew', email: 'jerry@cococola.com' },
    { plannerName: 'Jerry George', email: 'george@cococola.com' },
    { plannerName: 'Ronald Wesley', email: 'ronald@cococola.com' },
    { plannerName: 'Adam George', email: 'adam@cococola.com' },
    { plannerName: 'Sam Arnoid', email: 'sam@cococola.com' },
]
const PlannerMaterialMapping = () => {
  const [tabValue, setTabValue] = useState('1');
  const [selectedPlanner, setSelectedPlanner] = useState(null);
  const [formData, setFormData] = useState({
    materialType: '',
    materialGroup: '',
    material: ''
  })
  const [isDisabled, setIsDisabled] = useState(true);
  const [overview, setOverview] = useState(false);
  const [fileName, setFileName] = useState('');
  const [saveValue, setSaveValue] = useState();

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handlePlannerChange = (event, newValue) => {
    setSelectedPlanner(newValue)
  }

  const handleDataChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
    setIsDisabled(false)
  }

  const handleDataSubmit = () => {
    console.log({...selectedPlanner, ...formData});
    setSaveValue({...selectedPlanner, ...formData});
  }

  const clearAllData = () => {
    setFormData({
      materialType: '',
      materialGroup: '',
      material: ''
    });
    setSelectedPlanner(null);
  }

  const getFileName = (fileName) =>{
    setFileName(fileName)
  }

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
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} className="tab-main">
              <Tab label="Manual Update" value="1" />
              <Tab label="Excel Update" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <form onSubmit={handleDataSubmit}>
              <Grid>
                <Grid container spacing={2} mb={2}>
                  <Grid
                    item
                    xs={4}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      "& .MuiInputBase-root": {
                        height: "50px",
                        maxWidth: "250px",
                      },
                    }}
                  >
                    <label className="label-position">Material Type</label>
                    <Autocomplete
                      options={data}
                      getOptionLabel={(option) => option.plannerName}
                      onChange={handlePlannerChange}
                      value={selectedPlanner || null}
                      renderInput={(params) => (
                        <TextField {...params} label="Search Planners" />
                      )}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      "& .MuiInputBase-root": { height: "50px" },
                      "& .MuiFormControl-root": { maxWidth: "250px" },
                    }}
                  >
                    <label
                      className="label-position"
                      style={{ marginTop: "26px" }}
                    ></label>
                    <TextField
                      label="Email"
                      value={selectedPlanner ? selectedPlanner.email : ""}
                      disabled
                    />
                  </Grid>
                </Grid>
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
                    <label className="label-position">Material Type</label>
                    <Dropdown
                      label="Select Material Type"
                      name="materialType"
                      value={formData?.materialType}
                      options={[
                        { value: "ireland", label: "CPS Balina" },
                        { value: "india", label: "CPS Hyderabad" },
                      ]}
                      handleChange={handleDataChange}
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
                    <label className="label-position">Material Group</label>
                    <Dropdown
                      label="Select Material Group"
                      name="materialGroup"
                      value={formData?.materialGroup}
                      options={[
                        { value: "ireland", label: "CPS Balina" },
                        { value: "india", label: "CPS Hyderabad" },
                      ]}
                      handleChange={handleDataChange}
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
                      Material
                    </label>
                    <Dropdown
                      name="material"
                      label="Select Material"
                      value={formData?.material}
                      options={[
                        { value: "Type1", label: "Type1" },
                        { value: "Type2", label: "Type2" },
                      ]}
                      handleChange={handleDataChange}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </TabPanel>
          <TabPanel value="2">
            <ExcelUpdate getFileName={getFileName} />
          </TabPanel>
        </TabContext>
      </Grid>
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "30px",
        }}
      >
        <div></div>
        {tabValue === "1" ? (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "210px",
            }}
          >
            <ButtonComponent
              label="Clear All"
              bgColor="#fff"
              color="#000"
              onClick={clearAllData}
              disabled={isDisabled}
            />
            <ButtonComponent
              label="Save & Run"
              bgColor="#000"
              color="#fff"
              onClick={handleDataSubmit}
              disabled={isDisabled}
            />
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "290px",
            }}
          >
            <ButtonComponent
              label="File Upload Overview"
              bgColor="#fff"
              color="#000"
              onClick={() => setOverview(true)}
              disabled={!fileName}
            />
            <ButtonComponent
              label="Save & Run"
              bgColor="#000"
              color="#fff"
              // onClick={handleDataSubmit}
              disabled={!fileName}
            />
          </div>
        )}
        <Modal
          open={overview}
          handleClose={() => {
            setOverview(false);
          }}
          title="File Upload Overview"
          action={
            <FileOverivewFooter
              close={() => {
                setOverview(false);
              }}
            />
          }
          content={<FileOverivew fileName={fileName} />}
          maxWidth="100px"
        />
      </div>
      <Grid mb={2}>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead sx={{background: '#f2f2f2'}}>
                <TableRow>
                  <TableCell>Unique Id</TableCell>
                  <TableCell>Planner Name</TableCell>
                  <TableCell>Email ID</TableCell>
                  <TableCell>Material Type</TableCell>
                  <TableCell>Material Group</TableCell>
                  <TableCell>Material</TableCell>
                  <TableCell>Created On</TableCell>
                  <TableCell>Updated On</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">1001</TableCell>
                    <TableCell>{saveValue?.plannerName}</TableCell>
                    <TableCell>{saveValue?.email}</TableCell>
                    <TableCell>{saveValue?.materialType}</TableCell>
                    <TableCell>{saveValue?.materialGroup}</TableCell>
                    <TableCell>{saveValue?.material}</TableCell>
                    <TableCell>22-Jun-23</TableCell>
                    <TableCell>22-Jun-23</TableCell>
                    <TableCell>
                      <EditIcon />
                      <DeleteIcon />
                    </TableCell>
                  </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
      </Grid>
    </>
  );
}

export default PlannerMaterialMapping