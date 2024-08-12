import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";

import StepperComp from "../../components/Stepper/Stepper";
import ButtonComponent from "../../components/common/button/Button";
import { fetchData } from "../../redux/actions/apiSlice";
import TopSection from "../TopSection";

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
  const [completed, setCompleted] = useState({});
  const [showTable, setShowTable] = useState(false);
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
  const [runAnalyticsData, setRunAnalyticsData] = useState({
    prodCriticalItem: '',
    materialType: ''
  })
  const [showModal, setShowModal] = useState(false);
  const [rows, setRows] = useState([
    {range: 'Range 1', fromDate: '', toDate: ''}
  ])

  const handleAddRows = () => {
    setRows([...rows, { range: `Range ${rows.length + 1}`, fromDate: '', toDate: '' }]);
  };

  const delRowHandler = (index) => {
    const newArray = rows.filter((rows, i)=> i !==index && rows)
    setRows(newArray);
  }

  const handleExcludeDateChange = (date, name) => {
    console.log('date, name:', date, name)
  }

  const handleRunAnalyticsChange = (event) => {
    setRunAnalyticsData({
      ...runAnalyticsData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSaveRun = (e) => {
    e.preventDefault();
    setShowTable(true);
    console.log('runAnalyticsData', runAnalyticsData)
  }

  const handleChange = (event) => {
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
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const clearAllInputSelection = () => {
    setFormData("");
  };

  const clearRunAnalytics = () => {
    setRunAnalyticsData("");
  };

  const handleClose = () => {
    setShowModal(false);
    setFormData({excludeRange: false})
  }

  useEffect(() => {
    if(formData?.excludeRange){
      setShowModal(true);
    }
  }, [formData.excludeRange])

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
    <TopSection labelList={[{ title: 'Home', path: '/landing-page' }, { title: 'Run LT Analytics' }]} />
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
              completed={completed}
              runAnalyticsData={runAnalyticsData}
              handleRunAnalyticsChange={handleRunAnalyticsChange}
              showTable={showTable}
              handleClose={handleClose}
              showModal={showModal}
              handleAddRows={handleAddRows}
              rows={rows}
              delRowHandler={delRowHandler}
              handleExcludeDateChange={handleExcludeDateChange}
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
            <div style={{display: activeStep === 2 && 'none'}}>
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
                onClick={activeStep === 0 ? clearAllInputSelection : clearRunAnalytics}
              />
              {activeStep === 0 && (
                <ButtonComponent
                  label="Run Analytics"
                  bgColor="#000"
                  color="#fff"
                  onClick={scheduleAnalyticsRun}
                />
              )}
              {activeStep === 1 && (
                <ButtonComponent
                  label="Save & Run"
                  bgColor="#000"
                  color="#fff"
                  onClick={handleSaveRun}
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
