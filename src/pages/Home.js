import React from "react";
import { Link } from "react-router-dom";
import spaceVue from "../assets/img/iss.png";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-page-container">
      <h1>Welcome to the ISS Track App</h1>
      <p>Produced by Nicolas Chavanoud for Safecube Tech Challenge </p>
      <img src={spaceVue} alt="vue-de-l'espace" id="vue-iss" />
      <Link to="/iss-info" className="enter-tracking">
        {" "}
        iss tracking
      </Link>
    </div>
  );
};

export default Home;
