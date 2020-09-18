import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import React, { useEffect, useState } from 'react';
import CardMap from '../../components/card-map/CardMap';
import { 
    MapaContainer
} from './Mapa-styled';
import Geocode from "react-geocode";


const Mapa = (props) => {
    const [location, setLocation] = useState();

    useEffect(() => {
        Geocode.setApiKey('AIzaSyAumeBL3DL9jWtquF8_vKMvRla6fndF6z8');
        Geocode.fromAddress('Goiânia Goiás')
            .then(res => {
                const { lat, lng } = res.results[0].geometry.location;

                setLocation({lat, lng})
            });
    }, []);


    return(
        <MapaContainer>
            {location &&
                <Map 
                    google={props.google} 
                    zoom={14}
                    initialCenter={location}
                >
                    <Marker name={'Current Location'} />
                </Map>
            }

            <CardMap />
        </MapaContainer>
    )
};

export default (GoogleApiWrapper(props => ({
    apiKey: 'AIzaSyAumeBL3DL9jWtquF8_vKMvRla6fndF6z8'
})
))(Mapa);