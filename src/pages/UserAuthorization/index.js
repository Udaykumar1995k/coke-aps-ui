import CloseIcon from '@mui/icons-material/Close';
import { Divider, Grid } from "@mui/material";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dropdown from "../../components/common/Dropdown";
import ActionInput from '../../components/common/actioninput/ActionInputField';
import { setMenuItems } from '../../redux/actions/userAuthorization';
import TopSection from '../TopSection';
import './index.css';

const UserAuthorization = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    selectedMenu: []
  });
  const dispatch = useDispatch();
  const menuItemsData = useSelector((state) => state?.userAuthorization?.menuItems);
  console.log("Enterd ", menuItemsData)
  useEffect(() => {
    dispatch(setMenuItems(formData.selectedMenu))
  }, [formData])

  const handleFormData = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  // const handleClear = (event) => {
  //   console.log(event)
  // };
  // const onHandleClick = (event) => {
  //   console.log(event)
  // }
  const onClickRemoveMenuItem = (e) => {
    const filteredMenu = formData?.selectedMenu?.filter((item) => item !== e);
    setFormData({ ...formData, selectedMenu: filteredMenu });
    dispatch(setMenuItems(filteredMenu))
  }


  return (
    <>
      <TopSection
        labelList={[
          { title: "Home", path: "/landing-page" },
          { title: "User Authorization" },
        ]}
      />
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
        <ActionInput disabled={false} icon="search" position="right" width={'300px'} height={'40px'} />
        <Divider sx={{ height: 20, }} orientation="horizontal" />
        <div className="userSection-auth" >
          <div className="dropdown-item-auth">
            <span>Username</span>
            <Dropdown
              width="300px"
              label="Username"
              value={formData.userName}
              name="userName"
              options={[
                { value: "Name 1", label: "Name 1" },
                { value: "Name 2", label: "Name 2" },
              ]}
              handleChange={handleFormData}
            />
          </div>
          <div className="dropdown-item-auth">
            <span>Email</span>
            <Dropdown
              width="300px"
              label="Email"
              value={formData.email}
              name="email"
              options={[
                { value: "Email 1", label: "Email 1" },
                { value: "Email 2", label: "Email 2" },
              ]}
              handleChange={handleFormData}
              size="small"
            />
          </div>
        </div>
      </Grid>

      <div>
        <div className='current_auth_main'>
          <p id="current_auth_header">Current Authorizations:</p><p>+ Create Project Functionality Mapping</p>
        </div>
        <div className='table_header'>
          <div className='headerList_details'>
            <p style={{ width: 200 }}>Project Name</p>
            <p style={{ flex: 1 }}>Authorized Functionalities</p>
            <p style={{ flex: 2 }}>Access For</p>
          </div>
          <div className='table_body'>
            <p style={{ width: 200 }}>LT Analytics</p>
            <p style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <Dropdown
                width="200px"
                formHeight="42px"
                label="Select"
                value={formData.selectedMenu}
                name="selectedMenu"
                multiple
                options={[
                  { value: "Action Dashboard", label: "Action Dashboard" },
                  { value: "Run LT Analytics", label: "Run LT Analytics" },
                  { value: "LT Analytics Results", label: "LT Analytics Results" },
                  { value: "Workflow Management", label: "Workflow Management" },
                  { value: "Workflow Management1", label: "Workflow Management1" },
                  { value: "Workflow Management2", label: "Workflow Management2" },
                ]}
                handleChange={handleFormData}
              />

            </p>
            <p style={{ flex: 2 }}>
              <span style={{ display: 'flex', gap: 10, flexFlow: 'wrap' }}>
                {formData?.selectedMenu?.map((item, index) => {
                  return <span id="menuItems_List" >{item} <CloseIcon id="closeIcon" onClick={() => onClickRemoveMenuItem(item)} size="small"/></span>
                })}
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* <div style={{ display: "flex", padding: "10px" }} >
        <div style={{ display: "flex", width: "30%" }}>
          <ButtonComponent
            type="primary"
            maxWidth="80px"
            label="Back"
          />
        </div>

        <div className="button-alignment" style={{ width: "70%" }}>
          <ButtonComponent
            type="primary"
            maxWidth="120px"
            label="Clear All"
            onClick={handleClear}
          />
          <ButtonComponent
            type="secondary"
            maxWidth="90px"
            label="Submit"
            onClick={onHandleClick}
          />
        </div>
      </div> */}
    </>
  )
}

export default UserAuthorization;