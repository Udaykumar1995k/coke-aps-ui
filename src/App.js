import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';

function App() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("Run LT analytics");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleMenuItemClick = (path, label, index) => {
    navigate(path);
    setTitle(label);
    setSelectedIndex(index);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("data");
    navigate("/login");
  };

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
