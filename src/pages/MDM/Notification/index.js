import React from "react";
import TopSection from "../../LT/TopSection";

const Notification = () => {
  return (
    <div>
      <TopSection
        labelList={[
          { title: "Home", path: "/landing-page" },
          { title: "Notifications" },
        ]}
      />
      <div className="container">
        MDM Notifications
      </div>
    </div>
  );
};

export default Notification;
