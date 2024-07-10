import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Outlet, useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import Logo from "../../assets/logo.png";
import { Button } from "@mui/material";

const drawerWidth = '25%';

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Sidebar = () => {
  const [title, setTitle] = useState("Run LT analytics");
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleMenuItemClick = (path, label, index) => {
    navigate(path);
    setTitle(label);
    setSelectedIndex(index);
  };

  const navigate = useNavigate();
  const menuItems = [
    {
      path: "/run-analytics",
      label: "Run LT analytics",
      icon: <DashboardIcon />,
    },
    {
      path: "/analytics-results",
      label: "LT Analytics Results",
      icon: <SettingsIcon />,
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("data");
    navigate("/login");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box position="fixed" open sx={{ background: "#F40000", width: '100%', color: '#fff' }}>
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <img src={Logo} alt="logo" width={64} height={20} />
            <Typography variant="h6" noWrap component="div">
              Lead Time Analytics - {title}
            </Typography>
            <Button sx={{ color: "#fff" }} onClick={handleLogout}>
              Logout
            </Button>
          </Box>
        </Toolbar>
      </Box>
        <Drawer
          variant="permanent"
          open
          sx={{
            ".MuiDrawer-paper": {
              marginTop: "80px",
              borderRadius: "40px",
              marginLeft: "10px",
              border: "1px solid #000",
              height: '85%'
            },
          }}
        >
          <List>
            {menuItems?.map((item, index) => (
              <ListItem
                key={item}
                disablePadding
                sx={{ display: "block" }}
                onClick={() => handleMenuItemClick(item.path, item.label, index)}
              >
                <ListItemButton
                selected={index === selectedIndex}
                  sx={{
                    minHeight: 48,
                    justifyContent: "initial",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: 3,
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    sx={{
                      opacity: 1,
                      ".MuiTypography-root": { fontSize: "15px !important" },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Outlet />
        </Box>
    </Box>
  );
};

export default Sidebar;
