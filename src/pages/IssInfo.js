//import React, { useEffect, useState } from "react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getIssFetch } from "../redux/actions/actions";
import CardIssInfo from "../components/CardIssInfo";
import Map from "../components/Map";
import "../styles/IssInfo.css";
import IconStop from "../assets/icons/stop.png";

function IssInfo() {
  const dispatch = useDispatch();
  //const [isActive, setIsActive] = useState(false);

  //dispatching data every seconds
  // useEffect(() => {
  //   if (isActive === true) {
  //     setInterval(() => {
  //       dispatch(getIssFetch());
  //     }, 1000);
  //   } else {
  //     clearInterval();
  //     setIsActive(false);
  //   }
  // }, [dispatch, setIsActive, isActive]);

  //dispatching data every seconds
  // useEffect(() => {
  //   setInterval(() => {
  //     dispatch(getIssFetch());
  //   }, 1000);
  // }, [dispatch]);
  setInterval(() => {
    dispatch(getIssFetch());
  }, 1000);

  // const stopAction = () => {
  //   setIsActive(!isActive);
  //   console.log("click this stuff");
  // };

  return (
    <div className="home-page">
      <Map />
      <div className="stop-and-info">
        <button id="stop-btn">
          <img src={IconStop} alt="icon" id="stop-icon" />
        </button>
        <CardIssInfo />
      </div>
    </div>
  );
}

export default IssInfo;
