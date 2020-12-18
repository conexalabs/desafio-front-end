import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const stores = [
  { latitude: -26.9853947, longitude: -52.603549, local: "Cordilheira Alta" },
  { latitude: -26.9605363, longitude: -52.5335505, local: "Xaxim" },
];

export class Localization extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={13}
        initialCenter={{ lat: -27.0922364, lng: -52.6166878 }}
      >
        {stores.map((store, index) => {
          return (
            <Marker
              key={index}
              id={index}
              position={{
                lat: store.latitude,
                lng: store.longitude,
              }}
            />
          );
        })}
      </Map>
    );
  }
}

export default GoogleApiWrapper((props) => ({
  apiKey: "",
}))(Localization);
