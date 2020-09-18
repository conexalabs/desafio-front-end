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

const CardMap = () => {
    return (
        <CardMapPaper elevation={3}>
            <CardMapTop>
                <Link to='/'>
                    <CardMapBack src={BackArrowButton} />
                </Link>
            </CardMapTop>

            <CardMapInfo>
                <CardMapBoldText>Conexa Hub de Inovação</CardMapBoldText>
                <CardMapText>Razão social</CardMapText>

                <br />

                <CardMapBoldText>342.454.0001-76</CardMapBoldText>
                <CardMapText>CNPJ</CardMapText>

                <br />

                <CardMapBoldText>Av. Brasil 2233 centro Goiânia</CardMapBoldText>
                <CardMapText>Endereço</CardMapText>
            </CardMapInfo>
        </CardMapPaper>
    );
};

export default CardMap;