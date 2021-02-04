import React from 'react';
import { Link } from 'react-router-dom';
import { 
    CardPaper,
    CardBoldText,
    CardText
} from './Card-styled';


const Card = (props) => {
    const { info } = props;

    return (
        <Link to={`/mapa/${info.cnpj.replace(/\D/g, '')}`}>
            <CardPaper elevation={3}>
                <CardBoldText>{info.nome}</CardBoldText>
                <CardText>Razão social</CardText>

                <br />

                <CardBoldText>{info.cnpj}</CardBoldText>
                <CardText>CNPJ</CardText>

                <br />

                <CardBoldText>{`${info.logradouro} ${info.numero} ${info.bairro} ${info.municipio} ${info.uf}`}</CardBoldText>
                <CardText>Endereço</CardText>
            </CardPaper>
        </Link>
    );

}

export default Card;