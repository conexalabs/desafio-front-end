import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Geocode from "react-geocode";

import { App } from "../../config/index.json";

Geocode.setApiKey(App.GoogleMap.api);

function MapContainer({ address, nameCompany }) {
  const [currentPosition, setCurrentPosition] = useState({});
  const [name, setName] = useState("");

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
      Geocode.fromAddress(address).then((response) => {
        const { lat, lng } = response.results[0].geometry.location;

        setCurrentPosition({ lat, lng });
        setName(nameCompany);
      });
    }
  }, [address, nameCompany, setName, setCurrentPosition]);

  return (
    <LoadScript googleMapsApiKey={App.GoogleMap.api}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={currentPosition.lat ? 16 : 4}
        draggable={false}
        center={currentPosition.lat ? currentPosition : defaultCenter}
      >
        {currentPosition.lat && (
          <Marker
            position={currentPosition}
            label={{
              text: name,
              color: "#C70E20",
              fontWeight: "bold",
            }}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
}

export default MapContainer;
