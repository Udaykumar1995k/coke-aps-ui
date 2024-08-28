import { useState } from "react";
import { Grid } from "@mui/material";

import TopSection from "../TopSection";
import TextInput from "../../components/common/TextInput";
import RadioButtonGroup from "../../components/common/RadioButtonGroup";
import Scheduler from "../../components/Scheduler/Scheduler";

const SchedulerConfigurator = () => {
  const [scheduleValue, setScheduleValue] = useState("recurring");

  const handleRadioChange = (event) => {
    setScheduleValue(event.target.value);
  };

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
              // value={props?.runAnalyticsData?.prodCriticalItem}
              // onChange={props.handleRunAnalyticsChange}
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
              // value={props?.runAnalyticsData?.materialType}
              // onChange={props.handleRunAnalyticsChange}
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
              value={scheduleValue}
              onChange={handleRadioChange}
              name="scheduleType"
            />
          </Grid>
          { scheduleValue === 'recurring' &&
          <Grid
            item
            xs={12}
            mt={2}
            sx={{
              display: "flex",
            }}
          >
            <Scheduler />
          </Grid>
          }  
        </form>
      </Grid>
    </>
  );
};

export default SchedulerConfigurator;
