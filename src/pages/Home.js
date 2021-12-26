import React from "react";
import { Link } from "react-router-dom";
import spaceImg from "../assets/img/iss.jpeg";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-page-container">
      <h1>Welcome to the ISS Track App</h1>
      <p>Produced by Nicolas Chavanoud for Safecube Tech Challenge </p>
      <img src={spaceImg} alt="vue-de-l'espace" id="vue-iss" />
      <Link to="/iss-info" className="enter-tracking">
        {" "}
        Click here
      </Link>
    </div>
  );
};

export default Home;
