import React from 'react';
import { Link } from 'react-router-dom';
import { NotFoundContainer, NotFoundTitle, NotFounText, NotFoundBtn } from './NotFound-styled';

const NotFound = () => {
    return (
        <NotFoundContainer>
            <NotFoundTitle>404!</NotFoundTitle>
            <NotFounText>Ops, página não encontrada!</NotFounText>
            <Link to='/'>
                <NotFoundBtn variant="contained">Voltar para Home</NotFoundBtn>
            </Link>
        </NotFoundContainer>
    )
};

export default NotFound;