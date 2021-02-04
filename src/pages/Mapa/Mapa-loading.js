import React from 'react';
import { 
    MapaLoadingContainer,
    MapaLoadingText
} from './Mapa-styled';

// Image
import MapaLoadingSvg from './../../resources/svg/animated/loading.svg';

const MapaLoading = () => {
    return (
        <MapaLoadingContainer>
            <img src={MapaLoadingSvg} />
            <MapaLoadingText>Buscando</MapaLoadingText>
        </MapaLoadingContainer>
    );
};

export default MapaLoading;