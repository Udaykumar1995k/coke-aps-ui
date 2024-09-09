import {
  Divider,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";

import Dropdown from "../../components/common/Dropdown";
import ActionInput from "../../components/common/actioninput/ActionInputField";
import TopSection from "../TopSection";
import "./index.css";
import ButtonComponent from "../../components/common/button/Button";
import EditAuthorization from "./EditAuthorization";
import { useDispatch, useSelector } from "react-redux";
import { setMenuItems } from "../../redux/actions/userAuthorization";

const UserAuthorization = () => {
  const [formData, setFormData] = useState({
    uniqueId: "",
    userName: "",
    role: "",
    email: "",
    selectedMenu: [],
  });
  const [show, setShow] = useState(false);
  const [showEditAuth, setShowEditAuth] = useState(false);

  const dispatch = useDispatch();
  const menuItemsData = useSelector(
    (state) => state?.userAuthorization?.menuItems
  );
  console.log("formData ", menuItemsData);

  const handleFormData = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const submitHandler = () => {
    setShow(true);
  };

  const showEditAuthHandler = () => {
    setShowEditAuth(true);
  };

  const backHandler = () => {
    setShowEditAuth(false);
  };

  const onClickRemoveMenuItem = (e) => {
    const filteredMenu = formData?.selectedMenu?.filter((item) => item !== e);
    setFormData({ ...formData, selectedMenu: filteredMenu });
    dispatch(setMenuItems(filteredMenu));
  };

  const handleClear = () => {
    setFormData('');
    setShow(false);
  }

  useEffect(() => {
    dispatch(setMenuItems(formData.selectedMenu));
  }, [formData]);

  return (
    <>
      <TopSection
        labelList={[
          { title: "Home", path: "/landing-page" },
          { title: "User Authorization" },
        ]}
      />
      {!showEditAuth ? (
        <div>
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
            <ActionInput
              disabled={false}
              icon="search"
              position="right"
              width={"300px"}
              height={"40px"}
            />
            <Divider sx={{ height: 20 }} orientation="horizontal" />
            <div className="userSection-auth">
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
          <div style={{ display: "flex", padding: "10px" }}>
            <div style={{ display: "flex", width: "30%" }}>
              <ButtonComponent type="primary" maxWidth="80px" label="Back" />
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
                onClick={submitHandler}
                disabled={!formData?.userName}
              />
            </div>
          </div>
          {show && (
            <Grid mb={2} mt={2}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead sx={{ background: "#f2f2f2" }}>
                    <TableRow>
                      <TableCell>Unique Id</TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        User Name
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        User Role
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        User Email ID
                      </TableCell>
                      <TableCell sx={{ textAlign: "right" }}>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        1001
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {formData?.userName}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>Test</TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {formData?.email}
                      </TableCell>
                      <TableCell sx={{ textAlign: "right" }}>
                        <EditIcon
                          sx={{ cursor: "pointer" }}
                          onClick={showEditAuthHandler}
                        />
                        <VisibilityIcon sx={{ cursor: "pointer" }} />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          )}
        </div>
      ) : (
        <EditAuthorization
          backHandler={backHandler}
          formData={formData}
          onClickRemoveMenuItem={onClickRemoveMenuItem}
          handleFormData={handleFormData}
        />
      )}
    </>
  );
};

export default UserAuthorization;
