import React from "react";
import "../styles/CardIssInfo.css";
import { useSelector } from "react-redux";

const CardIssInfo = () => {
  const iss = useSelector((state) => state.issReducer.iss);
  const message = iss.message;
  const latitude = iss.iss_position.latitude;
  const longitude = iss.iss_position.longitude;
  const timestamp = iss.timestamp;

  //forrmat timestamp in local time
  let unix_timestamp = timestamp;
  const date = new Date(unix_timestamp * 1000);
  const hours = date.getHours();
  const minutes = "0" + date.getMinutes();
  const seconds = "0" + date.getSeconds();
  const formattedTime = !timestamp
    ? ""
    : hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

  return (
    <div className="information-live-container">
      <div className="iss-data-container">
        <h4>
          connection status :{" "}
          {!message ? (
            <span id="disconnected">Failed</span>
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
    </div>
  );
};

export default CardIssInfo;
