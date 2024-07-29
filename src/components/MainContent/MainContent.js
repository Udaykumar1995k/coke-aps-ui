import React from "react";
import {
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

const MainContent = (props) => {
  const location = useLocation();
  const title = useSelector((state) => state?.dashboardDetails?.title);

  return (
    <div className="main-content">
      <div className="sidebar">
        <List sx={{ marginTop: "15px" }} className="sideBarOptionsList">
          {props.menuItems?.map((item) => (
            <ListItem
              key={item}
              disablePadding
              onClick={() =>
                props.handleMenuItemClick(
                  item.path,
                  item.label,
                  item.title
                )
              }
            >
              <ListItemButton
                selected={item.path === location.pathname}
                style={{
                  backgroundColor:
                  item.path === location.pathname ? "#717171" : "#aaaaaa",
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
                justifyContent: "end",
                fontSize: 12,
                padding: 10,
              }}
            >
              Last updated : 12/07/2024
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
              <div>Lead Time Analytics - {title}</div>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
