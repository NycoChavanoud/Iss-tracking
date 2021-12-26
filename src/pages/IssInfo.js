import React from "react";
import { Link } from "react-router-dom";
import CardIssInfo from "../components/CardIssInfo";
import Map from "../components/Map";
import IconHome from "../assets/icons/accueil.png";
import "../styles/IssInfo.css";

function IssInfo() {
  return (
    <div className="home-page">
      <Map />
      <div className="stop-and-info">
        <CardIssInfo />
        <Link to="/" id="back-home">
          <img src={IconHome} alt="icon" id="home-icon" />
        </Link>
      </div>
    </div>
  );
}

export default IssInfo;
