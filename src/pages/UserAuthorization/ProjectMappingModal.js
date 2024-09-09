import ActionInput from "../../components/common/actioninput/ActionInputField"
import ButtonComponent from "../../components/common/button/Button"
const ProjectMappingContent = () =>{
    return (
        <>
        <div className="project-mapping">
            <div className="project-mapping-items">
                <label style={{ fontSize: '14px' }}>Functionality Name</label> 
                <ActionInput  props={{height:"35px",  maxWidth: "360px"  }} placeholder='Project Name' />
            </div>
            <div className="project-mapping-items">
                <label style={{ fontSize: '14px' }}>Functionality</label> 
                <ActionInput  props={{height:"35px",  maxWidth: "360px"  }} placeholder='Project Name' />
            </div>
        </div>

        </>
    )

}

const ProjectMappingFooter = () =>{
    return (
        <div className="footer-button-wrapper">
           <ButtonComponent
                type="primary"
                maxWidth="180px"
                label="Clear All"
                // onClick={props.close}
              />
            <ButtonComponent
                type="secondary"
                maxWidth="180px"
                label="Submit"
                // onClick={handleClickOpen}
              />
        </div>
    )

}



// const ProjectMappingModal = () =>{
//     return (
//         <div>
//             Then
//         </div>
//     )

// }

export {ProjectMappingContent,ProjectMappingFooter} 