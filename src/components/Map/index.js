import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Geocode from "react-geocode";

import { App } from "../../config/index.json";

Geocode.setApiKey(App.GoogleMap.api);

export const MapContainer = ({ address }) => {
  const [currentPosition, setCurrentPosition] = useState({});

  const mapStyles = {
    height: "100vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: -13.702797,
    lng: -69.6865109,
  };

  const SEM_ENDERECO = "Sem endereço";

  useEffect(() => {
    if (address && address !== SEM_ENDERECO) {
      console.log(address);
      Geocode.fromAddress(address).then((response) => {
        const { lat, lng } = response.results[0].geometry.location;

        setCurrentPosition({ lat, lng });
      });
    }
  }, [address, setCurrentPosition]);

  return (
    <LoadScript googleMapsApiKey={App.GoogleMap.api}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={currentPosition.lat ? 16 : 4}
        draggable={false}
        center={currentPosition.lat ? currentPosition : defaultCenter}
      >
        {currentPosition.lat && <Marker position={currentPosition} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
