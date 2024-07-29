import React from "react";
import { Link } from "react-router-dom";
import './LandingCard.css';

const LandingCard = (props) => {
  return (
    <Link
      to={props.url}
      style={{
        textDecoration: "none",
        color: "#000",
        fontWeight: "700",
        fontSize: "17px",
      }}
    >
      <div className="card-div">
        <p>{props.title}</p>
      </div>
    </Link>
  );
};

export default LandingCard;
