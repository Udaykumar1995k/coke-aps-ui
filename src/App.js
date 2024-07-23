import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import { useSelector, useDispatch } from 'react-redux';
import { setTitle } from './redux/actions/dashboardTitle';

function App() {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const dispatch = useDispatch();
  const title = useSelector((state) => state?.dashboardDetails?.title);

  const handleMenuItemClick = (path, label, titleName, index) => {
    navigate(path);
    dispatch(setTitle(titleName))
    setSelectedIndex(index);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("data");
    navigate("/login");
  };

  const menuItems = [
    {
      path: "/actionDashboard",
      label: "Action Dashboard",
      icon: <DashboardIcon />,
      title: "Dashboard"
    }, {
      path: "/run-analytics",
      label: "Run LT analytics",
      icon: <DashboardIcon />,
      title: "LT Analytics"
    },
    {
      path: "/analytics-results",
      label: "LT Analytics Results",
      icon: <SettingsIcon />,
      title: "Results"
    },
    {
      path: "/workflowManagement",
      label: "Workflow Management",
      icon: <SettingsIcon />,
      title: "Workflow Management"
    },
    {
      path: "/schedulerConfigurator",
      label: "Scheduler Configurator",
      icon: <SettingsIcon />,
      title: "Scheduler Configurator"
    },
    {
      path: "/workflow-management",
      label: "Workflow Management",
      icon: <AssuredWorkloadIcon />,
    },
  ];

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn")) {
      <Outlet />;
         } else {
      navigate("/login");
    }
  });

  return (
    <Box>
      <Header
        title={title}
        handleLogout={handleLogout}
        handleMenuItemClick={handleMenuItemClick}
      />
      <MainContent
        selectedIndex={selectedIndex}
        handleMenuItemClick={handleMenuItemClick}
        menuItems={menuItems}
      />
    </Box>
  );
}

export default App;
