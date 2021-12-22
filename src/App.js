import React, { useEffect } from "react";
import CardIssInfo from "./components/CardIssInfo";
import { useDispatch } from "react-redux";
import { getIssFetch } from "./actions/actions";
import Map from "./components/Map";
import "./styles/App.css";

function App() {
  const dispatch = useDispatch();

  //dispatching data every seconds
  useEffect(() => {
    setInterval(() => {
      dispatch(getIssFetch());
    }, 1000);
  }, [dispatch]);

  return (
    <div className="home-page">
      <h1>Welcome on bord - ISS TRACK APP</h1>
      <div className="dashboard">
        <Map />
        <CardIssInfo />
      </div>
    </div>
  );
}

export default App;
