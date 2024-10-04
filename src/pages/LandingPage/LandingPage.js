import React from "react";
import LandingCard from "../../components/common/landingCard/LandingCard";
import "./Landing.css";
import { useDispatch } from "react-redux";
import { setActiveCardTitle } from "../../redux/actions/userTypeSlice";

const CardData = [
  {
    id: 1,
    title: "Lead Time Analytics",
    url: "/lt-dashboard",
  },
  {
    id: 2,
    title: "Contract Data Update",
    url: "/notification",
  },
  {
    id: 3,
    title: "Constraint Planning",
    url: "#",
  },
];

const LandingPage = () => {
  const dispatch = useDispatch();

  const handleCardClick = (title) => {
    dispatch(setActiveCardTitle(title));
  };

  return (
    <div className="Landing-main">
      {CardData?.map((data) => {
        return (
          <LandingCard
            key={data.id}
            title={data.title}
            url={data.url}
            onClick={() => handleCardClick(data.title)}
          />
        );
      })}
    </div>
  );
};

export default LandingPage;
