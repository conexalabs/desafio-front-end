import React, { useEffect, useState } from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import CardMap from '../../components/card-map/CardMap';
import { 
    MapaContainer,
    CustomMap
} from './Mapa-styled';
import Geocode from "react-geocode";
import MapaLoading from './Mapa-loading';
import HandleLocalStorage from '../../localStorage/localStorage';
import { useLocation, useParams } from 'react-router-dom';

// const _apiKey = 'AIzaSyCSuAQE2lLICQYu2mHCJo3KqAV2HR_vwgs';
const _apiKey = 'AIzaSyBEPlPAMqVaonynLVxSkAXWFPW9ZdVGRuk';

const Mapa = (props) => {
    const routeLocation = useLocation();

    const { cnpj } = useParams();

    const [empresaInfo, setEmpresaInfo] = useState();
    const [location, setLocation] = useState();
    const [showMap, setShowMap] = useState(false);

    const { localizadorLocalStorage } = HandleLocalStorage();

    const empresaObjPorCNPJ = (cnpj, lista) => {
        return lista.find(empresa => empresa.cnpj.replace(/\D/g, '') === cnpj.replace(/\D/g, ''));
    }

    useEffect(() => {
        setEmpresaInfo(empresaObjPorCNPJ(cnpj, localizadorLocalStorage.empresasRecentes))
    }, []);

    useEffect(() => {
        if(empresaInfo){
            Geocode.setApiKey(_apiKey);
            Geocode.fromAddress(`${empresaInfo.bairro} ${empresaInfo.municipio}`)
                .then(res => {
                    const { lat, lng } = res.results[0].geometry.location;
                                
                    setShowMap(true);
                    setLocation({lat, lng})
                }).catch(err => {
                    console.log(err);
                    setShowMap(true);
                });
        }
    }, [empresaInfo]);

    return(
        <MapaContainer>
            { !showMap && <MapaLoading /> }

            {location && showMap &&
                <CustomMap
                    google={props.google} 
                    zoom={14}
                    initialCenter={location}
                >
                    <Marker name={'Current Location'} />
                </CustomMap>
            }

            {empresaInfo && 
                <CardMap info={empresaInfo}/>
            }
        </MapaContainer>
    )
};

export default (GoogleApiWrapper(props => ({
    apiKey: _apiKey
})
))(Mapa);