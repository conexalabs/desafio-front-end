import { Button } from '@material-ui/core';
import styled from 'styled-components';

export const NotFoundContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #3a8970;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const NotFoundTitle = styled.p`
    font-size: 60px;
    font-weight: bold;
    color: #FFF;

    margin-top: 0;
    margin-bottom: 0;
`;

export const NotFounText = styled.p`
    font-size: 28px;
    color: #FFF;

    margin-top: 0;
    margin-bottom: 0;
`;

export const NotFoundBtn = styled(Button)`
    &&{
        font-size: 18px;
        font-weight: bold;
        background-color: #f6f6f6;
        color: #3a8970;
        margin-top: 20px;
    }
`;