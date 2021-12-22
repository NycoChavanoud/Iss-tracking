import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { getIssFetch } from "../actions/actions";
import L from "leaflet";
import "../styles/Map.css";

// Change the leaflet Market by the ISS Icon
const IssIcon = () => {
  return L.icon({
    iconUrl: require("../assets/icons/international-space-station.png"),
    iconSize: [30, 30],
  });
};

// Map

const Map = () => {
  //const centerPosition = [45.764043, 4.835659];
  const dispatch = useDispatch();
  const iss = useSelector((state) => state.issReducer.iss);
  const latitude = iss.iss_position.latitude;
  const longitude = iss.iss_position.longitude;
  const positionISS = [latitude, longitude];

  useEffect(() => {
    setInterval(() => {
      dispatch(getIssFetch());
    }, 1000);
  }, [dispatch]);

  return (
    <MapContainer
      center={positionISS}
      zoom={2}
      scrollWheelZoom={false}
      minZoom={2}
      maxZoom={7}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      <Marker position={positionISS} icon={IssIcon()}>
        <Popup>
          <h4>ISS position </h4> latitude :{" "}
          <span className="data-popup"> {latitude} </span> <br />
          longitude : <span className="data-popup"> {longitude} </span>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
