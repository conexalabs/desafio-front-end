import { Button, darken, Fade, Modal } from '@material-ui/core';
// import Slider from 'react-slick';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
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

  @media screen and (max-width: 768px) {
    font-size: 36px;
    text-align: center;

    margin-top: 20px;
  }
`;

export const HomeSearchContainer = styled.div`
  margin-top: 60px;

  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const HomeResultsContainer = styled.div`
  width: 100%;
  /* min-height: 100%; */
  height: 100%;

  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: center;

  overflow: hidden;
  padding: 5rem 0;
  background: linear-gradient(45deg, #388669, #459a9e);
  @media screen and (max-width: 825px) {
    padding: 1.5rem;
  }
`;

export const HomeTilteContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const HomeTileIcon = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 20px;
`;

export const HomeSlider = styled.div`
  overflow: hidden;
  width: 100%;
  display: flex;
  /* display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem; */
  align-items: center;
  justify-content: space-around;
  margin: 0 0.1rem;
  @media screen and (max-width: 825px) {
    display: inline;
    /* grid-template-columns: repeat(2, 1fr); */
  }
`;

export const SliderArrow = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
  &.slick-prev {
    transform: rotate(180deg);
  }

  &.slick-disabled {
    opacity: 0.5;
    transition: opacity 0.5s ease;
  }
  &:hover {
    opacity: 1;
    animation: anime;
  }
  @media screen and (max-width: 1090px) {
    display: none;
  }
`;

export const HomeModal = styled(Modal)`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const HomeFade = styled(Fade)`
  && {
    width: 300px;
    border: 2px solid red;
    border-radius: 6px;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
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
    text-align: center;

    background-color: #3a8970;
    color: #fff;

    &:hover {
      background-color: ${darken('#3a8970', 0.2)};
    }
  }
`;
