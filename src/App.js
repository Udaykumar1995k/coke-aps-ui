import { Box } from "@mui/material";
import { useEffect} from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";

import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import { setTitle } from './redux/actions/dashboardTitle';
import Footer from "./components/Footer/Footer";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const title = useSelector((state) => state?.dashboardDetails?.title);

  const handleMenuItemClick = (path, label, titleName) => {
    navigate(path);
    dispatch(setTitle(titleName))
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
      title: "Landing"
    }, 
    {
      id: 2,
      path: "/actionDashboard",
      label: "Action Dashboard",
      icon: <DashboardIcon />,
      title: "Dashboard"
    }, 
    {
      id: 3,
      path: "/run-analytics",
      label: "Run LT analytics",
      icon: <DashboardIcon />,
      title: "LT Analytics"
    },
    {
      id: 4,
      path: "/analytics-results",
      label: "LT Analytics Results",
      icon: <SettingsIcon />,
      title: "Results"
    },
    {
      id: 5,
      path: "/workflowManagement",
      label: "Workflow Management",
      icon: <SettingsIcon />,
      title: "Workflow Management"
    },
  ];

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn")) {
      <Outlet />;
         } else {
      navigate("/login");
    }
  });

  useEffect(()=>{
    let getTitle = menuItems.filter(item => item.path.includes(location.pathname ));
    getTitle[0] && dispatch(setTitle(getTitle[0].title))
    // eslint-disable-next-line
  },[location.pathname])

  return (
    <Box sx={{maxWidth:'1440px', margin:'auto', width:'100%', display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <Header
        title={title}
        handleLogout={handleLogout}
        handleMenuItemClick={handleMenuItemClick}
      />
      <MainContent
        handleMenuItemClick={handleMenuItemClick}
        menuItems={menuItems}
      />
      <Footer />
    </Box>
  );
}

export default App;
