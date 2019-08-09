import React, { Component } from 'react';

import { Container } from './styles';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { GOOGLE_API_KEY } from '../../contants/config';


class GoogleMapsContainer extends Component {
  render() {
    const { geometry } = this.props;
    return (
      <Container>
        <Map google={this.props.google}
          initialCenter={{lat: geometry.lat, lng: geometry.lng}} 
          zoom={15}
        >
  
        <Marker
          title={'The marker`s title will appear as a tooltip.'}
          name={'SOMA'}
          position={{lat: geometry.lat, lng: geometry.lng}} />

          <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>NOMEEE</h1>
              </div>
          </InfoWindow>
        </Map>      
      </Container>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: GOOGLE_API_KEY
})(GoogleMapsContainer)
