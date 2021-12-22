import React, { useEffect } from "react";
import CardIssInfo from "../components/CardIssInfo";
import { useDispatch } from "react-redux";
import { getIssFetch } from "./actions/actions";
import Map from "../components/Map";
import "../styles/Home.css";

function Home() {
  const dispatch = useDispatch();

  //dispatching data every seconds
  useEffect(() => {
    setInterval(() => {
      dispatch(getIssFetch());
    }, 1000);
  }, [dispatch]);

  return (
    <div className="home-page">
      <Map />
      <CardIssInfo />
    </div>
  );
}

export default Home;
