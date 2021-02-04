import React from 'react';
import { 
    CardMapPaper,
    CardMapTop,
    CardMapBack,
    CardMapInfo,
    CardMapBoldText,
    CardMapText
} from './CardMap-styled';

import BackArrowButton from './../../resources/svg/back-button.svg';
import { Link } from 'react-router-dom';

// Os components Card e CardMaps não foram reaproveitados
// prevendo que podem evoluir de forma diferentes
const CardMap = (props) => {
    const { info } = props;

    return (
        <CardMapPaper elevation={3}>
            <CardMapTop>
                <Link to='/'>
                    <CardMapBack src={BackArrowButton} />
                </Link>
            </CardMapTop>

            <CardMapInfo>
                <CardMapBoldText>{info.nome}</CardMapBoldText>
                <CardMapText>Razão social</CardMapText>

                <br />

                <CardMapBoldText>{info.cnpj}</CardMapBoldText>
                <CardMapText>CNPJ</CardMapText>

                <br />

                <CardMapBoldText>{`${info.logradouro} ${info.numero} ${info.bairro} ${info.municipio} ${info.uf}`}</CardMapBoldText>
                <CardMapText>Endereço</CardMapText>
            </CardMapInfo>
        </CardMapPaper>
    );
};

export default CardMap;