import { Paper } from '@material-ui/core';
import styled from 'styled-components';

export const CardMapPaper = styled(Paper)`
    &&{
        width: 260px;
        padding: 20px;
        position: fixed;
        top: 20px;
        left: 20px;

        @media screen and (max-width: 768px){
            width: 100%;
            border-radius: 0;
            top: 0;
            left: 0;
        }
    }
`;

export const CardMapTop = styled.div`
    width: 100%;
`;

export const CardMapBack = styled.img`
    width: 32px;
    height: 32px;
`;

export const CardMapInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    margin-top: 20px;
`;

export const CardMapBoldText = styled.p`
    font-size: 16px;
    font-weight: bold;
    color: #3a8970;

    margin-top: 0;
    margin-bottom: 0;
`;

export const CardMapText = styled.p`
    font-size: 16px;
    color: #3a8970;

    margin-top: 5px;
    margin-bottom: 0;
`;