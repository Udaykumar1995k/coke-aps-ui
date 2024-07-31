import React from "react";
import LandingCard from "../../components/common/landingCard/LandingCard";
import './Landing.css';

const LandingPage = () => {
  return (
    <div className="Landing-main">
      <LandingCard title="Lead Time Analytics" url="/actionDashboard" />
      <LandingCard title="Contract Data Update" url="/actionDashboard" />
      <LandingCard title="Constraint Planning" url="/actionDashboard" />
    </div>
  );
};

export default LandingPage;
