import React, {useState} from 'react'
import TopSection from '../TopSection';
import Dropdown from "../../components/common/Dropdown";
import TabSection from "../../components/common/TabSection";
import ActionInput from "../../components/common/actioninput/ActionInputField";
import ButtonComponent from "../../components/common/button/Button";
import CustomSlider from './Slider';
import './index.css';
const ParamaterConfiguration = () => {
  const [formData, setFormData] = useState({
    supplier: "",
    material: "",
    materialType: "",
    materialGroup: "",
    lowerThan: "20%",
    greaterThan:"30%"
  });
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClear = (event) => {
    console.log(event)
  };
  const onHandleClick = (event) => {
    console.log(event)
  }
  const handleFormData = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  return (
    <>
      <TopSection
        labelList={[
          { title: "Home", path: "/landing-page" },
          { title: "Parameter Configuration" },
        ]} />
        <div className="main-container paramaeter-tab-container">
          <div className="tab-part">
            <TabSection
              style={{ maxWidth: "450px", marginBottom: "30px", width: "100%" }}
              label={["Manual Update", "Excel Update"]}
              value={value}
              handleChange={handleChange}
            /> 
            { value === 0?
              (
                <>
                  <div className="parameter-items" >
                    <div className="materials">
                      <span>Material Type</span>
                      <Dropdown
                        width="300px"
                        label="Select Material Type"
                        value={formData.materialType}
                        name="materialType"
                        options={[
                                { value: "Material Type1", label: "Material Type1" },
                                { value: "Material Type2", label: "Material Type2" },
                                ]}
                        handleChange={handleFormData}
                      />
                    </div>
                    <div className="materials">
                      <span>Material Group</span>
                      <Dropdown
                        width="300px"
                        label="Select Material Group"
                        value={formData.materialGroup}
                        name="materialGroup"
                        options={[
                              { value: "Material Group1", label: "Material Group1" },
                              { value: "Material Group2", label: "Material Group2" },   
                                ]}
                        handleChange={handleFormData}
                      />
                    </div>
                  </div>
                  <div className="parameter-items">
                    <div className="materials">
                      <span>Material</span>
                      <Dropdown
                        width="300px"
                        label="Select Material"
                        value={formData.material}
                        name="material"
                        options={[
                          { value: "Material1", label: "Material1" },
                          { value: "Material2", label: "Material2" },
                            ]}
                        handleChange={handleFormData}
                        />
                    </div>
                    <div className="materials">
                      <span>Supplier</span>
                      <Dropdown
                        width="300px"
                        label="Select Supplier"
                        value={formData.supplier}
                        name="supplier"
                        options={[
                          { value: "Supplier1", label: "Supplier1" },
                          { value: "Supplier2", label: "Supplier2" },
                            ]}
                        handleChange={handleFormData}
                      />
                    </div>
                  </div>
                  <div className="threshold-value-container">
                    <p style={{fontSize:"14px"}}>Threshold Value for Lead Time Variation Alerts:</p>
                    <div className="parameter-items">
                      <div className="materials">
                        <span>Lower Than</span>
                        <Dropdown
                          width="140px"
                          value={formData.lowerThan}
                          name="lowerThan"
                          options={[
                            { value: "20%", label: "20%" },
                            { value: "30%", label: "30%" },
                              ]}
                          handleChange={handleFormData}
                        />
                      </div>
                      <div className="materials">
                        <span>Greater than</span>
                        <Dropdown
                          width="140px"
                          value={formData.greaterThan}
                          name="greaterThan"
                          options={[
                          { value: "30%", label: "30%" },
                          { value: "40%", label: "40%" },
                            ]}
                          handleChange={handleFormData}
                        />
                      </div>
                    </div>
                    <p style={{fontSize:"14px", paddingLeft:"10px"}}>Lead Time Variation Category</p>
                    <div className="lead-time-category">
                      <div className="paramaeter-tab-container lead-time-category-container">
                        <div className="lead-time-category-items">
                          <p >Low Lead Time Variation</p>
                          <CustomSlider width="300px" intialStartvalue="20" intialEndvalue="80"/>
                        </div>
                      </div> 
                      <div className="paramaeter-tab-container lead-time-category-container">
                        <div className="lead-time-category-items">
                          <p >Medium Lead Time Variation</p>
                          <CustomSlider width="300px" intialStartvalue="30" intialEndvalue="60"/>
                        </div>
                      </div> 
                      <div className="paramaeter-tab-container lead-time-category-container">
                        <div className="lead-time-category-items">
                          <p >High Lead Time Variation</p>
                          <CustomSlider width="300px" intialStartvalue="40" intialEndvalue="90"/>
                        </div>
                      </div> 
                    </div>
                    <div className="parameter-items">
                      <div>
                        <span>Workflow Days to Consider for overdue</span>
                        <ActionInput
                          className="text-input"
                          placeholder="07"
                          props={{ height: "35px", maxWidth: "190px" }}
                        />
                      </div>
                      <div>
                        <span>Cooling Period Days</span>
                        <ActionInput
                          className="text-input"
                          placeholder="180"
                          props={{ height: "35px", maxWidth: "190px" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div style={{ display:"flex",padding:"10px"}} >
                    <div style={{display:"flex", width:"30%"}}>
                      <ButtonComponent
                        type="primary"
                        maxWidth="80px"
                        label="Back"
                      />
                    </div>
                    <div className="button-alignment" style={{width:"70%"}}>
                      <ButtonComponent
                        type="primary"
                        maxWidth="120px"
                          label="Clear All"
                        onClick={handleClear}
                      />
                      <ButtonComponent
                        type="secondary"
                        maxWidth="80px"
                        label="Save"
                        onClick={onHandleClick}
                      />
                    </div>
                  </div>
                </>
              ):
              (
                <div>
                </div>
              )
            }
          </div>
      </div> 
      
    </> 
  )
}

export default ParamaterConfiguration;