import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Geocode from "react-geocode";

Geocode.setApiKey("");

export const MapContainer = ({ address }) => {
  const [currentPosition, setCurrentPosition] = useState({});

  const mapStyles = {
    height: "100vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 14.235,
    lng: 51.9253,
  };

  useEffect(() => {
    if (address) {
      Geocode.fromAddress(address).then((response) => {
        const { lat, lng } = response.results[0].geometry.location;

        setCurrentPosition({ lat, lng });
      });
    }
  }, [address, setCurrentPosition]);

  return (
    <LoadScript googleMapsApiKey="">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={16}
        draggable={false}
        center={currentPosition.lat ? currentPosition : defaultCenter}
      >
        {currentPosition.lat && <Marker position={currentPosition} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
