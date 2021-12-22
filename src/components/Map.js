import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useSelector } from "react-redux";

import L from "leaflet";
import "../styles/Map.css";

// Change the leaflet Marker by the ISS Icon
const IssIcon = () => {
  return L.icon({
    iconUrl: require("../assets/icons/international-space-station.png"),
    iconSize: [40, 40],
  });
};

const Map = () => {
  const iss = useSelector((state) => state.issReducer.iss);
  const latitude = iss.iss_position.latitude;
  const longitude = iss.iss_position.longitude;
  const positionISS = [latitude, longitude];

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
