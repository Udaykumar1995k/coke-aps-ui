import React from "react";
import './index.css'
import ActionInput from "../../components/common/actioninput/ActionInputField";
import ExcelLogo from '../../assets/272697_excel_icon.png'
import ButtonComponent from "../../components/common/button/Button";
const FileOverivew = ({fileName}) =>{
    return (
        <>
        <div className="materials">
            <div className="flex-items-row">
                <p  className="line-items">No of Line itmes Newly Created</p> 
                <ActionInput
                    props={{ height: "35px", maxWidth: "70px",value:"22", disabled:true }}
                />
            </div>
            <div className="flex-items-row">
                <p  className="line-items">No of Line itmes Updated</p> 
                <ActionInput
                    props={{ height: "35px", maxWidth: "70px",value:"12", disabled:true }}
                />
            </div>
            <div className="flex-items-row">
                <p className="line-items">No of Line itmes With Error</p> 
                <ActionInput
                    props={{ height: "35px", maxWidth: "70px",value:"10", disabled:true }}
                />
            </div>
            <span className="font-size">Click Here To view the details for the error line items</span>
            <div className="flex-items-row error-line-items-container">
                    <img style={{paddingTop:"10px"}} src={ExcelLogo} alt='logo' width={20} height={20}/>
                    <span className="font-size" style={{paddingTop:"10px"}}>{fileName}</span>
                </div>
        </div>

        </>
    )
}


const FileOverivewFooter = () =>{
    return (
        <div className="footer-button-wrapper">
           <ButtonComponent
                type="primary"
                maxWidth="180px"
                label="Cancel"
                // onClick={handleClickOpen}
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
export {FileOverivew, FileOverivewFooter}