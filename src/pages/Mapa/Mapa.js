import React, { useEffect, useState } from 'react';
// import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import CardMap from '../../components/card-map/CardMap';
import { MapaContainer, CustomMap } from './Mapa-styled';
import Geocode from 'react-geocode';
import MapaLoading from './Mapa-loading';
import HandleLocalStorage from '../../localStorage/localStorage';
import { useLocation, useParams } from 'react-router-dom';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import apiGoogle from '../../api/apiGoogle';

// const _apiKey = 'AIzaSyCSuAQE2lLICQYu2mHCJo3KqAV2HR_vwgs';
// const _apiKey = 'AIzaSyBEPlPAMqVaonynLVxSkAXWFPW9ZdVGRuk';
const _apiKey = 'AIzaSyDSviCWFpzFt7LiZe9S19NDLW5V7PGFqS4';

const Mapa = (props) => {
  const routeLocation = useLocation();

  const { cnpj } = useParams();

  const [empresaInfo, setEmpresaInfo] = useState();
  //   const [location, setLocation] = useState();
  //   const [showMap, setShowMap] = useState(false);

  const { localizadorLocalStorage } = HandleLocalStorage();
  const [coords, setCoords] = React.useState({ lat: 0, lng: 0 });
  const [showMap, setShowMap] = useState(false);

  const empresaObjPorCNPJ = (cnpj, lista) => {
    return lista.find(
      (empresa) => empresa.cnpj.replace(/\D/g, '') === cnpj.replace(/\D/g, ''),
    );
  };

  useEffect(() => {
    setEmpresaInfo(
      empresaObjPorCNPJ(cnpj, localizadorLocalStorage.empresasRecentes),
    );
  }, [cnpj, localizadorLocalStorage.empresasRecentes]);

  useEffect(() => {
    if (empresaInfo !== undefined) {
      Geocode.setApiKey(_apiKey);
      Geocode.fromAddress(`${empresaInfo.bairro} ${empresaInfo.municipio}`);
      // file deepcode ignore FunctionDeclarationInBlock: <comment the reason here>
      async function getAdress() {
        const endereco = `${empresaInfo.logradouro}+${empresaInfo.bairro}+${empresaInfo.municipio}+${empresaInfo.numero}+A&key=${_apiKey}`;
        const { data } = await apiGoogle.get(endereco);
        setCoords({
          lat: data.results[0].geometry.location.lat,
          lng: data.results[0].geometry.location.lng,
        });
        console.log('0i', data);
        setShowMap(true);
      }
      getAdress();
    }
  }, [empresaInfo]);
  console.log(empresaInfo);

  const containerStyle = {
    width: '100%',
    height: '100%',
  };
  return (
    <MapaContainer>
      {!showMap && <MapaLoading />}
      {showMap && (
        <LoadScript googleMapsApiKey="AIzaSyCSuAQE2lLICQYu2mHCJo3KqAV2HR_vwgs">
          <CardMap info={empresaInfo} />
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={coords}
            zoom={15}
          >
            <Marker position={coords} />
          </GoogleMap>
        </LoadScript>
      )}
      {/* {showMap && (
        <CustomMap google={props.google} zoom={14} initialCenter={location}>
          <Marker name={'Current Location'} />
        </CustomMap>
      )}
      {empresaInfo && <CardMap info={empresaInfo} />} */}
    </MapaContainer>
  );
};

export default Mapa;
// export default GoogleApiWrapper((props) => ({
//   apiKey: _apiKey,
// }))(Mapa);
