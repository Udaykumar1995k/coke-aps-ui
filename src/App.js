import { Box } from "@mui/material";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";

import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import { setTitle } from "./redux/actions/dashboardTitle";
import Footer from "./components/Footer/Footer";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const title = useSelector((state) => state?.dashboardDetails?.title);

  const handleMenuItemClick = (path, label, item) => {
    navigate(path);
    dispatch(setTitle(item));
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("data");
    navigate("/login");
  };

  const menuItems = [
    {
      id: 1,
      path: "/landing-page",
      title: "Landing",
    },
    {
      id: 2,
      path: "/lt-dashboard",
      label: "Action Dashboard",
      icon: <DashboardIcon />,
      title: "Dashboard",
    },
    {
      id: 3,
      path: "/run-analytics",
      label: "Run LT analytics",
      icon: <DashboardIcon />,
      title: "Run LT Analytics",
    },
    {
      id: 4,
      path: "/analytics-results",
      label: "LT Analytics Results",
      icon: <SettingsIcon />,
      title: "Results",
    },
    {
      id: 5,
      path: "/workflowManagement",
      label: "Workflow Management",
      icon: <SettingsIcon />,
      title: "Workflow Management",
    },
    {
      id: 6,
      path: "/scheduler-configurator",
      label: "Scheduler Configurator",
      icon: <ManageHistoryIcon />,
      title: "Scheduler Configurator",
    },
    {
      id: 7,
      path: "/parameter-configuration",
      label: "Parameter Configuration",
      icon: <AssuredWorkloadIcon />,
      title: "Parameter Configuration",
    },
    {
      id: 8,
      path: "/planner-material-mapping",
      label: "Planner-Material Mapping",
      icon: <MapsHomeWorkIcon />,
      title: "Planner-Material Mapping",
    },
    {
      id: 9,
      path: "/user-authorization",
      label: "User Authorization",
      icon: <AccountCircleIcon />,
      title: "User Authorization",
    },
  ];

  const mdmMenuItems = [
    {
      id: 1,
      path: "/landing-page",
      title: "Landing",
    },
    {
      id: 2,
      path: "/mdm-dashboard",
      label: "Dashboard",
      icon: <DashboardIcon />,
      title: "Dashboard",
    },
    {
      id: 3,
      path: "/profile",
      label: "Profile",
      icon: <DashboardIcon />,
      title: "Profile",
    },
  ];

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn")) {
      <Outlet />;
    } else {
      navigate("/login");
    }
  });

  useEffect(() => {
    let getTitle = menuItems.filter((item) =>
      item.path.includes(location.pathname)
    );
    let getmdmTitle = mdmMenuItems?.filter((item) =>
      item.path.includes(location.pathname)
    );
    (getTitle[0] && dispatch(setTitle(getTitle[0]))) ||
      (getmdmTitle[0] && dispatch(setTitle(getmdmTitle[0])));
    // eslint-disable-next-line
  }, [location.pathname, dispatch]);

  return (
    <Box
      sx={{
        maxWidth: "1440px",
        margin: "auto",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header
        title={title}
        handleLogout={handleLogout}
        handleMenuItemClick={handleMenuItemClick}
      />
      <MainContent
        handleMenuItemClick={handleMenuItemClick}
        menuItems={menuItems}
        mdmMenuItems={mdmMenuItems}
      />
      <Footer />
    </Box>
  );
}

export default App;
