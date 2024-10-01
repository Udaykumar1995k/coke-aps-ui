import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Login from './components/Login';
import PrivateRoutes from './routes/PrivateRoutes';
import { Provider } from 'react-redux';
import {store} from './redux/store'
import RunLTAnalytics from './pages/LT/RunLTAnalytics/RunLTAnalytics';
import AnalyticsResults from './pages/LT/analyticsresults/AnalyticsResults';
import ErrorPage from './pages/ErrorPage';
import ActionDashboard from './pages/LT/ActionDashboard/actionDashboard';
import WorkflowManagement from './pages/LT/WorkflowManagement';
import SchedulerConfigurator from './pages/LT/SchedulerConfigurator';
import LandingPage from './pages/LandingPage/LandingPage';
import AnalyticsResultsTab from './pages/LT/analyticsresults/AnalyticsResultsTab';
import ParamaterConfiguration from './pages/LT/ParameterConfiguration';
import PlannerMaterialMapping from './pages/LT/PlannerMaterialMapping';
import UserAuthorization from './pages/LT/UserAuthorization';
import Dashboard from './pages/MDM/Dashboard/index';
import Profile from './pages/MDM/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "landing-page",
        element: <PrivateRoutes />,
        children: [
          {
            path: "",
            element: <LandingPage />,
          },
        ],
      },
      {
        path: "lt-dashboard",
        element: <PrivateRoutes />,
        children: [
          {
            path: "",
            element: <ActionDashboard />,
          },
        ],
      },
      {
        path: "run-analytics",
        element: <PrivateRoutes />,
        children: [
          {
            path: "",
            element: <RunLTAnalytics />,
          },
        ],
      },
      {
        path: "material_details",
        element: <PrivateRoutes />,
        children: [
          {
            path: "",
            element: <AnalyticsResultsTab />,
          },
        ],
      },
      {
        path: "analytics-results",
        element: <PrivateRoutes />,
        children: [
          {
            path: "",
            element: <AnalyticsResults />,
          },
        ],
      },
      {
        path: "workflowManagement",
        element: <PrivateRoutes />,
        children: [
          {
            path: "",
            element: <WorkflowManagement />,
          },
        ],
      },
      {
        path: "scheduler-configurator",
        element: <PrivateRoutes />,
        children: [
          {
            path: "",
            element: <SchedulerConfigurator />,
          },
        ],
      },
      {
        path: "parameter-configuration",
        element: <PrivateRoutes />,
        children: [
          {
            path: "",
            element: <ParamaterConfiguration />,
          },
        ],
      },
      {
        path: "planner-material-mapping",
        element: <PrivateRoutes />,
        children: [
          {
            path: "",
            element: <PlannerMaterialMapping />,
          },
        ],
      },
      {
        path: "user-authorization",
        element: <PrivateRoutes />,
        children: [
          {
            path: "",
            element: <UserAuthorization />,
          },
        ],
      },
      {
        path: "mdm-dashboard",
        element: <PrivateRoutes />,
        children: [
          {
            path: "",
            element: <Dashboard />,
          },
        ],
      },
      {
        path: "profile",
        element: <PrivateRoutes />,
        children: [
          {
            path: "",
            element: <Profile />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
reportWebVitals();
