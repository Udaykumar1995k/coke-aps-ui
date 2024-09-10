import React from "react"
import ActionInput from "../../components/common/actioninput/ActionInputField"
import ButtonComponent from "../../components/common/button/Button"
const ProjectMappingContent = ({handleChange,formData}) =>{
    return (
        <>
        <div className="project-mapping">
            <div className="project-mapping-items">
                <label style={{ fontSize: '14px' }}>Functionality Name</label> 
                <ActionInput
                    onChange={handleChange}
                    props={{height:"35px",  maxWidth: "360px", value:formData.ProjectName,name:"ProjectName"  }} 
                    placeholder='Name' />
            </div>
            <div className="project-mapping-items">
                <label style={{ fontSize: '14px' }}>Functionality</label> 
                <ActionInput  
                    onChange={handleChange}
                    props={{height:"35px",  maxWidth: "360px", value:formData.FunctionalityName, name:"FunctionalityName" }} 
                    placeholder='Functionality' />
            </div>
        </div>

        </>
    )

}

const ProjectMappingFooter = ({handleClear,handleSubmitData}) =>{
    return (
        <div className="footer-button-wrapper">
           <ButtonComponent
                type="primary"
                maxWidth="180px"
                label="Clear All"
                onClick={handleClear}
              />
            <ButtonComponent
                type="secondary"
                maxWidth="180px"
                label="Submit"
                onClick={handleSubmitData}
              />
        </div>
    )

}

export {ProjectMappingContent,ProjectMappingFooter} 