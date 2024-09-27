import React from "react";
import TopSection from "../../LT/TopSection";

const Dashboard = () => {
  return (
    <div>
      <TopSection
        labelList={[
          { title: "Home", path: "/landing-page" },
          { title: "MDM Dashboard" },
        ]}
      />
      <div className="container">
        Hello MDM Dashboard
      </div>
    </div>
  );
};

export default Dashboard;
