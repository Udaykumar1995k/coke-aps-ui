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
import RunAnalytics from './pages/RunAnalytics';
import AnalyticsResults from './pages/analyticsresults/AnalyticsResults';
import ErrorPage from './pages/ErrorPage';
import ActionDashboard from './pages/ActionDashboard/actionDashboard';
import WorkflowManagement from './pages/WorkflowManagement';
import SchedulerConfigurator from './pages/SchedulerConfigurator';
import LandingPage from './pages/LandingPage/LandingPage';
import AnalyticsResultsTab from './pages/analyticsresults/AnalyticsResultsTab';

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
        path: "actionDashboard",
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
            element: <RunAnalytics />,
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
        path: "schedulerConfigurator",
        element: <PrivateRoutes />,
        children: [
          {
            path: "",
            element: <SchedulerConfigurator />,
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
