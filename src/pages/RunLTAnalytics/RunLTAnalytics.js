import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/actions/apiSlice";
import { CircularProgress } from "@mui/material";
import StepperComp from "../../components/Stepper/Stepper";
import ButtonComponent from "../../components/common/button/Button";

const steps = [
  {
    label: "Input Selection",
  },
  {
    label: "Run Analytics",
  },
  {
    label: "View Results",
  },
];

const RunLTAnalytics = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    plantSupplier: "",
    supplier: "",
    materialType: "",
    materialGroup: "",
    material: "",
    shipFrom: "",
    shipTo: "",
    excludeRange: false,
    recentContractUpdates: "",
    posPlacedInAdvance: "",
    fromDate: null,
    toDate: null,
    filterContract: "",
  });

  const handleChange = (event) => {
    // console.log("event",event, event.target.name, event.target.value)
    setFormData({
      ...formData,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
  };
  const handleDateChange = (date, name) => {
    setFormData({
      ...formData,
      [name]: date,
    });
  };

  const scheduleAnalyticsRun = (event) => {
    console.log("Event", event);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const clearAll = () => {
    setFormData("");
  };

  // this is an example for fetchData common function by axios and will be deleted once we get actual endpoint.
  const dispatch = useDispatch();
  const data = useSelector((state) => state.apiData.data);
  console.log("data:", data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  // the above is an example for fetchData common function by axios and will be deleted once we get actual endpoint.
  return (
    <>
      {!data ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress sx={{ color: "#000" }} />
        </div>
      ) : (
        <div>
          <div style={{ border: "1px solid #aaaaaa", borderRadius: "10px" }}>
            <StepperComp
              activeStep={activeStep}
              steps={steps}
              handleStep={handleStep}
              formData={formData}
              handleChange={handleChange}
              handleDateChange={handleDateChange}
            />
          </div>
          <div
            style={{
              marginTop: "30px",
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "30px",
            }}
          >
            <div>
              <ButtonComponent
                label="Back"
                bgColor="#fff"
                color="#000"
                maxWidth="80px"
              />
            </div>
            <div
              style={{
                display: activeStep === 2 ? "none" : "flex",
                justifyContent: "space-between",
                width: "230px",
              }}
            >
              <ButtonComponent
                label="Clear All"
                bgColor="#fff"
                color="#000"
                onClick={clearAll}
              />
              {activeStep === 0 && (
                <ButtonComponent
                  label="Run Analytics"
                  bgColor="#fff"
                  color="#000"
                  onClick={scheduleAnalyticsRun}
                />
              )}
              {activeStep === 1 && (
                <ButtonComponent
                  label="Save & Run"
                  bgColor="#fff"
                  color="#000"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RunLTAnalytics;
