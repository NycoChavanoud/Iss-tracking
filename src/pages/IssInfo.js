import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getIssFetch } from "../redux/actions/actions";
import CardIssInfo from "../components/CardIssInfo";
import Map from "../components/Map";
import "../styles/IssInfo.css";

function IssInfo() {
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

export default IssInfo;
