import { Paper } from '@material-ui/core';
import styled from 'styled-components';

export const CardPaper = styled(Paper)`
    &&{
        width: 260px;
        padding: 25px;

        cursor: pointer;

        transform: scale(.99);

        &:hover{
            transform: scale(1);
        }
    }
`;

export const CardBoldText = styled.p`
    font-size: 16px;
    font-weight: bold;
    color: #3a8970;

    margin-top: 0;
    margin-bottom: 0;
`;

export const CardText = styled.p`
    font-size: 16px;
    color: #3a8970;

    margin-top: 5px;
    margin-bottom: 0;
`;