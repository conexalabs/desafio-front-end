import React, { useEffect } from 'react';

import './styles.scss';
import { ICoordinates } from '../../utils/interfacesData';

const Map: React.FC<ICoordinates> = ({ lat, lng }: ICoordinates) => {
  useEffect(() => {
    const coodinates = new google.maps.LatLng(lat, lng);

    const map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      {
        zoom: 18,
        center: coodinates,
      },
    );

    new google.maps.Marker({
      position: coodinates,
      map,
    });
  }, [lat, lng]);

  return <div id="map" />;
};

export default Map;
