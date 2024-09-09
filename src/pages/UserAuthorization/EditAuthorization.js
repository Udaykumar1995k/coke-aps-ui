import React, {useState} from 'react'
import { Grid, TextField } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

import Dropdown from '../../components/common/Dropdown'
import ButtonComponent from '../../components/common/button/Button'
import { ProjectMappingContent, ProjectMappingFooter } from './ProjectMappingModal';
import Modal from '../../components/common/modal/Modal'
const EditAuthorization = (props) => {
  const [open, setShowPopup] = useState(false);
  const handleOpen = () =>{
    setShowPopup(true);
  }
  
  const handleClose = () =>{
    setShowPopup(false);
  }

  return (
    <>
      <Grid
        container
        xs={12}
        sx={{
          border: "1px solid gray",
          padding: "10px 15px",
          borderRadius: "10px",
          flexDirection: "column",
        }}
      >
        <div className="userSection-auth">
          <div className="dropdown-item-auth">
            <span>Unique ID</span>
            <TextField
              variant="outlined"
              value={props?.formData?.uniqueId}
              name="uniqueId"
              disabled
              sx={{"& .MuiInputBase-input": {height: '15px'}}}
            />
          </div>
          <div className="dropdown-item-auth">
            <span>Username</span>
            <TextField
              variant="outlined"
              value={props?.formData?.userName}
              name="userName"
              disabled
              sx={{"& .MuiInputBase-input": {height: '15px'}}}
            />
          </div>
        </div>
        <div className="userSection-auth">
          <div className="dropdown-item-auth">
            <span>User Role</span>
            <TextField
              variant="outlined"
              value={props?.formData?.role}
              name="role"
              disabled
              sx={{"& .MuiInputBase-input": {height: '15px'}}}
            />
          </div>
          <div className="dropdown-item-auth">
            <span>Email</span>
            <TextField
              variant="outlined"
              value={props?.formData?.email}
              name="email"
              disabled
              sx={{"& .MuiInputBase-input": {height: '15px'}}}
            />
          </div>
        </div>
      </Grid>
      <div style={{ marginBottom: "20px" }}>
        <div className="current_auth_main">
          <p id="current_auth_header">Current Authorizations:</p>
          <p  style={{cursor:"pointer"}}onClick={handleOpen}>+ Create Project Functionality Mapping</p>
          <Modal open={open} title="Project Functionality Mapping" handleClose={handleClose } content={<ProjectMappingContent/>} action={<ProjectMappingFooter/>}/>
        </div>
        <div className="table_header">
          <div className="headerList_details">
            <p style={{ width: 200 }}>Project Name</p>
            <p style={{ flex: 1 }}>Authorized Functionalities</p>
            <p style={{ flex: 2 }}>Access For</p>
          </div>
          <div className="table_body">
            <p style={{ width: 200 }}>LT Analytics</p>
            <p style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <Dropdown
                width="200px"
                formHeight="42px"
                label="Select"
                value={props?.formData.selectedMenu}
                name="selectedMenu"
                multiple
                options={[
                  { value: "Action Dashboard", label: "Action Dashboard" },
                  { value: "Run LT Analytics", label: "Run LT Analytics" },
                  {
                    value: "LT Analytics Results",
                    label: "LT Analytics Results",
                  },
                  {
                    value: "Workflow Management",
                    label: "Workflow Management",
                  },
                  {
                    value: "Workflow Management1",
                    label: "Workflow Management1",
                  },
                  {
                    value: "Workflow Management2",
                    label: "Workflow Management2",
                  },
                ]}
                handleChange={props?.handleFormData}
              />
            </p>
            <p style={{ flex: 2 }}>
              <span style={{ display: "flex", gap: 10, flexFlow: "wrap" }}>
                {props?.formData?.selectedMenu?.map((item, index) => {
                  return (
                    <span id="menuItems_List">
                      {item}{" "}
                      <CloseIcon
                        id="closeIcon"
                        onClick={() => props?.onClickRemoveMenuItem(item)}
                        size="small"
                      />
                    </span>
                  );
                })}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", padding: "10px" }}>
        <div style={{ display: "flex", width: "30%" }}>
          <ButtonComponent
            type="primary"
            maxWidth="80px"
            label="Back"
            onClick={props?.backHandler}
          />
        </div>
      </div>
    </>
  );
}

export default EditAuthorization