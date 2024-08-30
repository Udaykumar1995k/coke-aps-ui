import React, { useState } from 'react'
import TopSection from '../TopSection';
import { Grid, Divider } from "@mui/material";
import ActionInput from '../../components/common/actioninput/ActionInputField';
import Dropdown from "../../components/common/Dropdown";
import ButtonComponent from "../../components/common/button/Button";
import './index.css';
const UserAuthorization = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: ""
  });
  const handleFormData = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleClear = (event) => {
    console.log(event)
  };
  const onHandleClick = (event) => {
    console.log(event)
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
      <div style={{ display: "flex", padding: "10px" }} >
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
      </div>
    </>
  )
}

export default UserAuthorization;