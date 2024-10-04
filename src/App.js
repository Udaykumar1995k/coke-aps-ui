import { Box } from "@mui/material";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import NotificationsIcon from '@mui/icons-material/Notifications';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import InsightsIcon from '@mui/icons-material/Insights';
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt';
import PunchClockIcon from '@mui/icons-material/PunchClock';
import PermDataSettingIcon from '@mui/icons-material/PermDataSetting';

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
      icon: <AnalyticsIcon />,
      title: "Run LT Analytics",
    },
    {
      id: 4,
      path: "/analytics-results",
      label: "LT Analytics Results",
      icon: <InsightsIcon />,
      title: "Results",
    },
    {
      id: 5,
      path: "/workflowManagement",
      label: "Workflow Management",
      icon: <AppSettingsAltIcon />,
      title: "Workflow Management",
    },
    {
      id: 6,
      path: "/scheduler-configurator",
      label: "Scheduler Configurator",
      icon: <PunchClockIcon />,
      title: "Scheduler Configurator",
    },
    {
      id: 7,
      path: "/parameter-configuration",
      label: "Parameter Configuration",
      icon: <PermDataSettingIcon />,
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
      path: "/notification",
      label: "Notifications",
      icon: <NotificationsIcon />,
      title: "Notifications",
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
