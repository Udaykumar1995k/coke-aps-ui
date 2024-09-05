import React, {useState,useEffect} from "react";
// import InputSelection from "../RunLTAnalytics/InputSelection/InputSelection";
import Modal from "../../components/common/modal/Modal";
import ButtonComponent from "../../components/common/button/Button";
import './AnalyticsResults.css'
import { Grid } from "@mui/material";
import CheckBoxInput from "../../components/common/CheckboxInput";
import Dropdown from "../../components/common/Dropdown";
import DatePicker from "../../components/common/DatePicker";
import { ModalContent,ModalFooter } from "../RunLTAnalytics/InputSelection/ExcludeModal";
const LeadeTimeContent = () =>{
    const [showModal, setShowModal] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [rows, setRows] = useState([
        {range: 'Range 1', excludeFromDate: null, excludeToDate: null}
      ]);
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
    setFormData({
        ...formData,
        [event.target.name]:
        event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value,
    });
    };

    const handleClose = () => {
    setShowModal(false);
    setFormData({excludeRange: false})
    }
    
    const handleExcludeDateChange = (date, name, index) => {
    date && setIsDisabled(false);
    const newDate = new Date(date).toLocaleDateString();
    setRows(
        rows.map((row, i) => (i === index ? { ...row, [name]: newDate } : row))
    );
    };

    const clearAllExcludeModal = () => {
    setRows(rows.map(row => ({ ...row, excludeFromDate: null, excludeToDate: null })));
    setIsDisabled(true);
    }

    const handleAddRows = () => {
    setRows([...rows, { range: `Range ${rows.length + 1}`, excludeFromDate: null, excludeToDate: null }]);
    };
    
    const delRowHandler = (index) => {
    const newArray = rows.filter((rows, i)=> i !==index && rows)
    setRows(newArray);
    }
    const submitExcludeModalHandler = () => {
    setFormData({excludeRange: true});
    setShowModal(false);
    }
    const handleDateChange = (date, name) => {
        setFormData({
          ...formData,
          [name]: date,
        });
      };
      useEffect(() => {
        if(formData?.excludeRange){
          setShowModal(true);
        }
      }, [formData.excludeRange])
   return(
        <div>
            <div className="form-container">
        <form>
          <Grid container spacing={2}>
            <Grid
              item
              xs={5}
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
                value={formData?.supplier}
                options={[
                  { value: "ireland", label: "CPS Balina" },
                  { value: "india", label: "CPS Hyderabad" },
                ]}
                handleChange={handleChange}
              />
            </Grid>
            <Grid
              item
              xs={5}
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
                value={formData?.materialType}
                options={[
                  { value: "Type1", label: "Type1" },
                  { value: "Type2", label: "Type2" },
                ]}
                handleChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} mt={1}>
            <Grid
              item
              xs={5}
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
                value={formData?.materialGroup}
                options={[
                  { value: "Group1", label: "Group1" },
                  { value: "Group2", label: "Group2" },
                ]}
                handleChange={handleChange}
              />
            </Grid>
            <Grid
              item
              xs={5}
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
                value={formData?.material}
                options={[
                  { value: "Material1", label: "Material1" },
                  { value: "Material2", label: "Material2" },
                ]}
                handleChange={handleChange}
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
                value={formData?.fromDate}
                onChange={(e) => handleDateChange(e, "fromDate")}
              />
            </Grid>
            <Grid
              item
              xs={4}
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
                value={formData?.fromDate}
                onChange={(e) => handleDateChange(e, "fromDate")}
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
                xs={4}
                sx={{ "& .MuiInputBase-root>Input": { height: "90%" } }}
              >
                <DatePicker
                  name="fromDate"
                  label="Select From Date"
                  value={formData?.fromDate}
                  onChange={(e) => handleDateChange(e, "fromDate")}
                />
              </Grid>
              <Grid
                item
                xs={4}
                sx={{ "& .MuiInputBase-root>Input": { height: "90%" } }}
              >
                <DatePicker
                  name="toDate"
                  label="Select To Date"
                  value={formData?.toDate}
                  onChange={(e) => handleDateChange(e, "toDate")}
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
                  checked: formData?.excludeRange,
                  fontSize: 28,
                  onchange: handleChange,
                }}
              />
              <label className="label-position" htmlFor="period-to-consider">
                Exclude Range in the Period Selected
              </label>
            </Grid>
            { formData?.excludeRange &&
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                paddingTop: "0 !important",
                flexDirection: "row",
                alignItems: "center",
                "& .MuiFormControl-root": { width: "80%" },
                "& .MuiFormLabel-root": { fontSize: "14px" },
                "& .MuiInputBase-root": { height: "90%" },
                "& .MuiFormControlLabel-root": { marginRight: "0" },
              }}
            >
              <textarea
                rows={5}
                style={{ width: "100%", maxWidth: "400px", resize: "none" }}
                disabled
                value={
                  rows &&
                  rows?.map((row) => {
                    return `<${row?.range} From ${
                      row?.excludeFromDate || "Date"
                    } To ${row?.excludeToDate || "Date"}>`;
                  })
                }
              />
            </Grid>
            }
          </Grid>
          <Grid container spacing={2} mt={1}>
            <Grid
              item
              xs={5}
              sx={{
                display: "flex",
                flexDirection: "column",
                "& .MuiFormControl-root": { width: "100%" },
                "& .MuiFormLabel-root": { fontSize: "14px" },
              }}
            >
              <label   className="label-position" htmlFor="material-group">
                Filter Pos Data by last Contract Update
              </label>
              <Dropdown
                name="filterContract"
                label="Filter"
                value={formData?.filterContract}
                options={[
                  { value: "6 Months", label: "6 Months" },
                  { value: "12 Months", label: "12 Months" },
                ]}
                handleChange={handleChange}
              />
            </Grid>
          </Grid>
        </form>
      </div>
      {
        <Modal
          open={showModal}
          handleClose={handleClose}
          title="Exclude Range in Period Selected"
          action={
            <ModalFooter
              clearAllExcludeModal={clearAllExcludeModal}
              submitExcludeModalHandler={submitExcludeModalHandler}
              isDisabled={isDisabled}
            />
          }
          content={
            <ModalContent
              rows={rows}
              handleAddRows={handleAddRows}
              delRowHandler={delRowHandler}
              handleExcludeDateChange={handleExcludeDateChange}
            />
          }
        />
      }
  
        </div>
                 
        )

}

const LeadeTimeFooter = (props) =>{
    return (
        <div className='button-alignment'>
      <ButtonComponent
        maxWidth="170px"
        label="Cancel"
        bgColor="white"
        color="black"
      />
      <ButtonComponent
        maxWidth="170px"
        label="Submit"
        bgColor="black"
        color="white"
        disabled={props?.disabled}
      />
    </div>
    )
}

const LeadtimeModel = () =>{
    const [showPopup, setPopUp]  = useState(false);
    const onhandlePopup = () =>{
      setPopUp(true)
      }
   const onClosePopup = () =>{
      setPopUp(false)
    }
    return(
    <div>
      <ButtonComponent  type="secondary" label="Details" onClick={onhandlePopup}/>
      <Modal title="Input Data For Lead Time Analytics" open={showPopup} handleClose={onClosePopup} content={<LeadeTimeContent/>} action={<LeadeTimeFooter />} maxWidth="lg" />
      </div>
      )
    }
export  default LeadtimeModel