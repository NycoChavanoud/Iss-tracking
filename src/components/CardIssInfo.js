import React, { useState } from "react";
import "../styles/CardIssInfo.css";
import { useSelector, useDispatch } from "react-redux";
import { startLoopStatus, stopLoopStatus } from "../redux/actions/actions";
import pauseIcon from "../assets/icons/pause.png";
import startIcon from "../assets/icons/start.png";

const CardIssInfo = () => {
  //to dispacth loops start/stop actions
  const dispatch = useDispatch();

  //message Start/Stop
  const [isOn, setIsOn] = useState("");

  //dispatch start function
  const startTracking = () => {
    dispatch(startLoopStatus());
    setIsOn(true);
  };

  //dispatch stop function
  const stopTracking = () => {
    dispatch(stopLoopStatus());
    setIsOn(false);
  };

  //iss informations to API
  const iss = useSelector((state) => state.issReducer.iss);
  const message = iss.message;
  const latitude = iss.iss_position.latitude;
  const longitude = iss.iss_position.longitude;
  const timestamp = iss.timestamp;

  //format timestamp in local time
  let unix_timestamp = timestamp;
  const date = new Date(unix_timestamp * 1000);
  const hours = date.getHours();
  const minutes = "0" + date.getMinutes();
  const seconds = "0" + date.getSeconds();
  const formattedTime = !timestamp
    ? ""
    : hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

  return (
    <div className="dashboard-container">
      <button id="start-btn" onClick={startTracking}>
        <img src={startIcon} alt="icon-start" id="start-icon" />
      </button>
      <div className="iss-data-container">
        <h4>
          connection status :{" "}
          {isOn === false ? (
            <span id="disconnected">stoped</span>
          ) : (
            <span id="connected">{message}</span>
          )}
        </h4>
        <div className="data-api">
          <div className="info-time">
            {" "}
            timestamp : <span className="data-display"> {timestamp} </span>
          </div>
          <div className="local-date">
            local hour : <span className="data-display"> {formattedTime} </span>
          </div>
          <div className="info-lat">
            {" "}
            latitude : <span className="data-display"> {latitude} </span>
          </div>
          <div className="info-lng">
            {" "}
            longitude : <span className="data-display"> {longitude} </span>
          </div>
        </div>
      </div>

      <button id="stop-btn" onClick={stopTracking}>
        <img src={pauseIcon} alt="icon-pause" id="pause-icon" />
      </button>
    </div>
  );
};

export default CardIssInfo;
