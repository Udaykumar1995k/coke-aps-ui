import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";

import LandingPage from "../../pages/LandingPage/LandingPage";
import "./MainContent.css";

const MainContent = (props) => {
  const location = useLocation();
  const tabDetails = useSelector((state) => state?.dashboardDetails?.tabDetails);

  return (
    <div className={tabDetails.title === 'Landing' ? "landing-content" : "main-content"}>
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
                        item.path === location.pathname || (location.pathname ==="/material_details"&&item.path==="/analytics-results") ? "#717171" : "#aaaaaa",
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
              <Outlet />
            </div>
          </div>
        </>}
    </div>
  );
};

export default MainContent;
