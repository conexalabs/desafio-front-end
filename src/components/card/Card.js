import React from 'react';
import { Link } from 'react-router-dom';
import { 
    CardPaper,
    CardBoldText,
    CardText
} from './Card-styled';


const Card = () => {

    return (
        <Link to='/mapa'>
            <CardPaper elevation={3}>
                <CardBoldText>Conexa Hub de Inovação</CardBoldText>
                <CardText>Razão social</CardText>

                <br />

                <CardBoldText>342.454.0001-76</CardBoldText>
                <CardText>CNPJ</CardText>

                <br />

                <CardBoldText>Av. Brasil 2233 centro Goiânia</CardBoldText>
                <CardText>Endereço</CardText>
            </CardPaper>
        </Link>
    );

}

export default Card;