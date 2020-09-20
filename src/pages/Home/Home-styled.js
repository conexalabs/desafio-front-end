import { Button, darken, Fade, Modal } from '@material-ui/core';
import Slider from 'react-slick';
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 100%;

    display: flex;
    flex-direction: column;
`;

export const HomeTopContainer = styled.div`
    width: 100%;
    padding: 30px;

    background-color: #f6f6f6;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HomeTitle = styled.h1`
    font-weight: 400; //Regular
    font-size: 60px;
    color: #3a8970;

    margin-top: 0;
    margin-bottom: 0;

    @media screen and (max-width: 768px){
        font-size: 36px;
        text-align: center;

        margin-top: 20px;
    }
`;

export const HomeSearchContainer = styled.div`
    margin-top: 60px;

    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        width: 100%;
        flex-direction: column;
    }
`;

export const HomeResultsContainer = styled.div`
    width: 100%;
    min-height: 100%;

    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 20px;
    background: linear-gradient(45deg, #388669, #459A9E);
`;

export const HomeTilteContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`;

export const HomeTileIcon = styled.img`
    width: 48px;
    height: 48px;
    margin-right: 20px;
`;

export const HomeSlider = styled(Slider)`
    &&{
        width: calc(100% - 60px);

        .slick-slide{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }
    }
`;

export const SliderArrow = styled.img`
    &.slick-prev {
        transform: rotate(180deg);
    }

    &.slick-disabled {
        opacity: .5;
    }
`;

export const HomeModal = styled(Modal)`
    &&{
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const HomeFade = styled(Fade)`
    &&{
        width: 300px;

        background-color: #FFF;
    }
`;

export const HomeModalTitle = styled.p`
    font-size: 20px;
    font-weight: bold;

    text-align: center;
`;

export const HomeModalTxt = styled.p`
    font-size: 18px;

    text-align: center;
`;

export const HomeModalBtn = styled(Button)`
    && {
        width: 100%;

        font-weight: bold;
        font-size: 20px;

        background-color: #3a8970;
        color: #FFF;

        &:hover{ background-color: ${darken('#3a8970', .2)} }
    }
`;