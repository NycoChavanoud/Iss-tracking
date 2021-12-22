import React, { useEffect } from "react";
import "../styles/CardIssInfo.css";
import { useDispatch, useSelector } from "react-redux";
import { getIssFetch } from "../actions/actions";

const CardIssInfo = () => {
  const dispatch = useDispatch();
  const iss = useSelector((state) => state.issReducer.iss);
  const latitude = iss.iss_position.latitude;
  const longitude = iss.iss_position.longitude;
  const timestamp = iss.timestamp;

  // useffect.. setinterval 1s...

  //redux persist

  useEffect(() => {
    setInterval(() => {
      dispatch(getIssFetch());
    }, 1000);
  }, [dispatch]);

  return (
    <div className="information-live-container">
      <button className="btn-iss-tracking">iss tracking</button>
      <div className="iss-data-container">
        <h4>
          connection status :{" "}
          {!iss.message ? (
            <span id="disconnected">disconnected</span>
          ) : (
            <span id="connected">{iss.message}</span>
          )}
        </h4>
        <div className="data-api">
          <div className="info-time">
            {" "}
            timestamp : <span className="data-display"> {timestamp} </span>
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
