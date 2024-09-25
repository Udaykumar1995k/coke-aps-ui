import React, {useState,useEffect} from "react";
import Modal from "../../../components/common/modal/Modal";
import ButtonComponent from "../../../components/common/button/Button";
import './AnalyticsResults.css'
import { Grid } from "@mui/material";
import CheckBoxInput from "../../../components/common/CheckboxInput";
import Dropdown from "../../../components/common/Dropdown";
import DatePicker from "../../../components/common/DatePicker";
import { ModalContent,ModalFooter } from "../RunLTAnalytics/InputSelection/ExcludeModal";
const LeadeTimeContent = (props) =>{
  const [isDisabled, setIsDisabled] = useState(true);
  const [rows, setRows] = useState([
        {range: 'Range 1', excludeFromDate: null, excludeToDate: null}
      ]);
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
                value={props?.formData?.supplier}
                options={[
                  { value: "ireland", label: "CPS Balina" }, 
                  { value: "india", label: "CPS Hyderabad" },
                ]}
                handleChange={props?.handleChange}
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
                value={props?.formData?.materialType}
                options={[
                  { value: "Type1", label: "Type1" },
                  { value: "Type2", label: "Type2" },
                ]}
                handleChange={props?.handleChange}
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
                value={props?.formData?.materialGroup}
                options={[
                  { value: "Group1", label: "Group1" },
                  { value: "Group2", label: "Group2" },
                ]}
                handleChange={props?.handleChange}
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
                value={props?.formData?.material}
                options={[
                  { value: "Material1", label: "Material1" },
                  { value: "Material2", label: "Material2" },
                ]}
                handleChange={props?.handleChange}
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
                name="shipFromDate"
                label="Select From Date"
                value={props?.formData?.shipFromDate}
                onChange={(e) => props?.handleDateChange(e, "shipFromDate")}
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
                name="shipToDate"
                label="Select To Date"
                value={props?.formData?.shipToDate}
                onChange={(e) => props?.handleDateChange(e, "shipToDate")}
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
                  name="periodFromDate"
                  label="Select From Date"
                  value={props?.formData?.periodFromDate}
                  onChange={(e) => props?.handleDateChange(e, "periodFromDate")}
                />
              </Grid>
              <Grid
                item
                xs={4}
                sx={{ "& .MuiInputBase-root>Input": { height: "90%" } }}
              >
                <DatePicker
                  name="periodToDate"
                  label="Select To Date"
                  value={props?.formData?.periodToDate}
                  onChange={(e) => props?.handleDateChange(e, "periodToDate")}
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
                  checked: props?.formData?.excludeRange,
                  fontSize: 28,
                  onchange: props?.handleChange,
                }}
              />
              <label className="label-position" htmlFor="period-to-consider">
                Exclude Range in the Period Selected
              </label>
            </Grid>
            { props?.formData?.excludeRange &&
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
                value={props?.formData?.filterContract}
                options={[
                  { value: "6 Months", label: "6 Months" },
                  { value: "12 Months", label: "12 Months" },
                ]}
                handleChange={props?.handleChange}
              />
            </Grid>
          </Grid>
        </form>
      </div>
      {
        <Modal
          open={props?.showModal}
          handleClose={props?.handleClose}
          title="Exclude Range in Period Selected"
          action={
            <ModalFooter
              clearAllExcludeModal={clearAllExcludeModal}
              submitExcludeModalHandler={props?.submitExcludeModalHandler}
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

const LeadeTimeFooter = ({handleClear,disabled,handleSubmitButton}) =>{
    return (
        <div className='button-alignment'>
      <ButtonComponent
        maxWidth="170px"
        label="Cancel"
        bgColor="white"
        color="black"
        onClick={handleClear}
      />
      <ButtonComponent
        maxWidth="170px"
        label="Submit"
        bgColor="black"
        color="white"
        disabled={disabled}
        onClick={handleSubmitButton}
      />
    </div>
    )
}

const LeadtimeModel = () =>{
    const [showModal, setShowModal] = useState(false);
    const [showPopup, setPopUp]  = useState(false);
    const [disabled, setDisabled] = useState(true)
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
      shipFromDate: null,
      shipToDate:null,
      periodFromDate:null,
      periodToDate:null,
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
  setDisabled(false)
  };

  const handleClose = () => {
  setShowModal(false);
  setFormData({excludeRange: false})
  }
  const handleDateChange = (date, name) => {
    setFormData({
      ...formData,
      [name]: date,
    });
    setDisabled(false)
  };
  useEffect(() => {
    if(formData?.excludeRange){
      setShowModal(true);
    }
  }, [formData.excludeRange])
    const onhandlePopup = () =>{
      setPopUp(true)
      }
   const onClosePopup = () =>{
      setPopUp(false)
    }
    const submitExcludeModalHandler = () => {
      setFormData({excludeRange: true});
      setShowModal(false);
      }
      // console.log("showModal",showModal)
    const handleClear = () =>{
      setFormData({
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
        shipFromDate: null,
        shipToDate:null,
        periodFromDate:null,
        periodToDate:null,
        toDate: null,
        filterContract: "",
      })
      setPopUp(false)
    }
    const handleSubmitButton =  () =>{
      setFormData({
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
        shipFromDate: null,
        shipToDate:null,
        periodFromDate:null,
        periodToDate:null,
        toDate: null,
        filterContract: "",
      })
      setPopUp(false)
      setDisabled(true)

    }
    return(
    <div>
      <ButtonComponent  type="secondary" label="Input" onClick={onhandlePopup}/>
      <Modal title="Input Data For Lead Time Analytics" 
        open={showPopup} 
        handleClose={onClosePopup} 
        content={
                <LeadeTimeContent
                  formData={formData}
                  showModal={showModal}
                  handleClose={handleClose}
                  handleChange={handleChange}
                  handleDateChange={handleDateChange}
                  submitExcludeModalHandler={submitExcludeModalHandler}

                />
                } 
        action={
                  <LeadeTimeFooter 
                    handleClear ={handleClear}
                    disabled={disabled}
                    handleSubmitButton={handleSubmitButton}
                  />
                } 
        maxWidth="lg" />
      </div>
      )
    }
export  default LeadtimeModel