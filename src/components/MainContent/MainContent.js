import React from "react";
import {
  CircularProgress,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import "./MainContent.css";
import LandingPage from "../../pages/LandingPage/LandingPage";
import BreadcrumbLink from "../common/breadcrumb";

const MainContent = (props) => {
  const location = useLocation();
  const tabDetails = useSelector((state) => state?.dashboardDetails?.tabDetails);

  return (
    <div className={tabDetails.title === 'Landing' ? "landing-content" : "main-content"}>
      {!tabDetails.title && <CircularProgress />}
      {tabDetails.title === 'Landing' ?
        <LandingPage />
        :
        <>
          <div className="sidebar">
            <List sx={{ marginTop: "15px" }} className="sideBarOptionsList">
              {props.menuItems?.map((item) => (
                <ListItem
                  key={item.title}
                  disablePadding
                  onClick={() =>
                    props.handleMenuItemClick(
                      item.path,
                      item.label,
                      item
                    )
                  }
                >
                  <ListItemButton
                    selected={item.path === location.pathname || item.path}
                    style={{
                      backgroundColor:
                        item.path === location.pathname || location.pathname ==="/material_details"&&item.path==="/analytics-results" ? "#717171" : "#aaaaaa",
                    }}
                    className="listButtonSection"
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: 3,
                        justifyContent: "center",
                      }}
                      style={{ display: "flex", margin: "auto", color: "#fff" }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      sx={{
                        opacity: 1,
                        ".MuiTypography-root": { fontSize: "12px !important" },
                      }}
                      style={{ color: "#fff" }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </div>
          <div className="content">
            <div>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 12,
                    padding: 10,
                  }}
                >
                  <div>
                    <BreadcrumbLink labelList={[{title:'Home',path:'/landing-page'},{title:'Analytics Results',path:'/analytics-results'},{title:'Results'}]}/>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      fontSize: 12,
                    }}
                  >Last updated : 12/07/2024</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    fontSize: 22,
                    fontWeight: "bold",
                    padding: '10px 0px',
                  }}
                >
                  <div style={{ marginRight: 10, fontSize: "large" }}>
                    <ArrowBackIcon />
                  </div>
                  <div>Lead Time Analytics - {tabDetails?.title}</div>
                </div>
              </div>
              <Outlet />
            </div>
          </div>
        </>}
    </div>
  );
};

export default MainContent;
