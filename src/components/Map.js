import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "../styles/Map.css";

// Change the leaflet Market by the ISS Icon
const IssIcon = () => {
  return L.icon({
    iconUrl: require("../assets/icons/iss_logo.png"),
    iconSize: [30, 30],
  });
};

// Map

const Map = () => {
  const position = [45.764043, 4.835659];

  return (
    <MapContainer
      center={[45.764043, 4.835659]}
      zoom={2}
      scrollWheelZoom={false}
      minZoom={2}
      maxZoom={7}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      <Marker position={position} icon={IssIcon()}>
        <Popup>ISS position</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
