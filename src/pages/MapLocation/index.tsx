import React, { useContext, useEffect } from 'react';

import Map from '../../components/Map';
import MapCard from '../../components/MapCard';
import { Context } from '../../context/Context';

const MapLocation: React.FC = () => {
  const { coordinate, nome, cnpj, logradouro, municipio } = useContext(Context);

  return (
    <div className="map-location-main">
      <Map lat={coordinate.lat} lng={coordinate.lng} />
      <MapCard
        nome={nome}
        cnpj={cnpj}
        logradouro={logradouro}
        municipio={municipio}
      />
    </div>
  );
};

export default MapLocation;
