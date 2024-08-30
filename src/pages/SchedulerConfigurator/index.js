import { useState } from "react";
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

import TopSection from "../TopSection";
import TextInput from "../../components/common/TextInput";
import RadioButtonGroup from "../../components/common/RadioButtonGroup";
import Scheduler from "../../components/Scheduler/Scheduler";
import ButtonComponent from "../../components/common/button/Button";

const SchedulerConfigurator = () => {
  const defaultValue = ''
  const [value, setValue] = useState(defaultValue);
  const [scheduleType, setScheduleType] = useState("recurring");
  const [scheduleData, setScheduleData] = useState({
    prodCriticalItem: '',
    materialType: '',
  });
  const [saveValue, setSaveValue] = useState();
  const [isDisabled, setIsDisabled] = useState(true);

  const handleRadioChange = (event) => {
    setScheduleType(event.target.value);
  };

  const handleScheduleChange = (event) => {
    setScheduleData({
        ...scheduleData,
        [event.target.name]: event.target.value,
      })
    setIsDisabled(false);
  }

  const handleSaveRun = (event) => {
    event.preventDefault();
    console.log('save', {scheduleData, scheduleType, value});
    setSaveValue({scheduleData, scheduleType, value});
    setScheduleData('');
  }

  const clearAllSchedule = () => {
    setScheduleData('');
    setIsDisabled(true);
  }

  return (
    <>
      <TopSection
        labelList={[
          { title: "Home", path: "/landing-page" },
          { title: "Scheduler Configurator" },
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
        <h4>Scheduling Parameters</h4>
        <form>
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              "& .MuiFormControl-root": { width: "100%" },
              "& .MuiFormLabel-root": { fontSize: "14px" },
              "& .MuiInputBase-root>Input": { height: "80% !important" },
            }}
          >
            <label className="label-position" htmlFor="hierarchy">
              Label
            </label>
            <TextInput
              label="Prod-Critical-Items"
              name="prodCriticalItem"
              value={scheduleData?.prodCriticalItem}
              onChange={handleScheduleChange}
            />
          </Grid>
          <Grid
            item
            xs={6}
            mt={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              "& .MuiFormControl-root": { width: "100%" },
              "& .MuiFormLabel-root": { fontSize: "14px" },
              "& .MuiInputBase-root>Input": { height: "80% !important" },
            }}
          >
            <label className="label-position" htmlFor="hierarchy">
              Description
            </label>
            <TextInput
              label="Material Type"
              name="materialType"
              value={scheduleData?.materialType}
              onChange={handleScheduleChange}
            />
          </Grid>
          <Grid
            item
            xs={6}
            mt={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              "& .MuiFormControl-root": { width: "100%" },
              "& .MuiFormLabel-root": { fontSize: "14px" },
              "& .MuiInputBase-root>Input": { height: "80% !important" },
            }}
          >
            <label className="label-position" htmlFor="hierarchy">
              Schedule Type
            </label>
            <RadioButtonGroup
              props={[
                {
                  label: "Single Run",
                  value: "single-run",
                  labelPlacement: "end",
                  size: "small",
                },
                {
                  label: "One Time Schedule",
                  value: "one-time-schedule",
                  labelPlacement: "end",
                  size: "small",
                },
                {
                  label: "Recurring",
                  value: "recurring",
                  labelPlacement: "end",
                  size: "small",
                },
              ]}
              value={scheduleType}
              onChange={handleRadioChange}
              name="scheduleType"
            />
          </Grid>
          {scheduleType === "recurring" && (
            <Grid
              item
              xs={12}
              mt={2}
              sx={{
                display: "flex",
              }}
            >
              <Scheduler value={value} setValue={setValue} />
            </Grid>
          )}
        </form>
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
            onClick={clearAllSchedule}
            disabled={isDisabled}
          />
          <ButtonComponent
            label="Save & Run"
            bgColor="#000"
            color="#fff"
            onClick={handleSaveRun}
            disabled={isDisabled}
          />
        </div>
      </div>
      { saveValue &&
      <Grid mb={2}>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead sx={{background: '#f2f2f2'}}>
                <TableRow>
                  <TableCell>Unique Id</TableCell>
                  <TableCell>Label</TableCell>
                  <TableCell>Start Date & Time</TableCell>
                  <TableCell>Schedule Type</TableCell>
                  <TableCell>Frequency</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">LT_Sam_Arnold_FY24_Apr_000010</TableCell>
                    <TableCell>{saveValue?.scheduleData?.prodCriticalItem}</TableCell>
                    <TableCell>22-June-24-11:30AM</TableCell>
                    <TableCell>{saveValue?.scheduleType}</TableCell>
                    <TableCell>Daily</TableCell>
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
    </>
  );
};

export default SchedulerConfigurator;
