import { Map } from 'google-maps-react';
import styled from 'styled-components';

export const MapaContainer = styled.div`
    width: 100%;
    height: 100%;
`;

export const MapaLoadingContainer = styled.div`
    width: 100%;
    height: 100vh;

    background-color: #3a8970;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px){
        margin-top: auto;
        height: calc(100% - 280px);
        bottom: 0;
    }
`;

export const MapaLoadingText = styled.p`
    color: #FFF;
    font-size: 20px;
    text-transform: uppercase;
`;

export const CustomMap = styled(Map)`
    &&{
        @media screen and (max-width: 768px){
            height: calc(100% - 280px) !important;
            bottom: 0;
        }
    }
`