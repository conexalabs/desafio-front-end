import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const mapStyles = {
  height: "100vh",
  width: "100%"
};

const defaultCenter = {
  lat: -27.0922364, lng: -52.6166878
}

const Gmaps = () => {
  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_KEY}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      />
    </LoadScript>
  )
}

export default Gmaps
