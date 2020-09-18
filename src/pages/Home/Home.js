import React from 'react';
import { TextInput, SearchBtn } from '../../components/commons/form';
import { 
    Container, 
    HomeTopContainer,
    HomeTitle,
    HomeSearchContainer,
    HomeResultsContainer,
    HomeTilteContainer,
    HomeTileIcon, 
    HomeSlider,
    SliderArrow
} from './Home-styled';

// Imgs
import PredioIcon from './../../resources/svg/predio.svg';
import SearchImage from './../../resources/imgs/search-image.png';
import Card from '../../components/card/Card';

import ArrowIcon from './../../resources/svg/arrow.svg';

const Home = () => {
    const settings = {
        dots: false,
        infinite: false,
        adaptiveHeight: true,
        speed: 500,
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        nextArrow: <SliderArrow src={ArrowIcon} />,
        prevArrow: <SliderArrow src={ArrowIcon} />
    }

    return (
        <Container>
            {/* Topo da página */}
            <HomeTopContainer>
                {/* Titulo da página */}
                <HomeTilteContainer>
                    <HomeTileIcon src={PredioIcon} />
                    <HomeTitle>
                        Localizador de Empresas
                    </HomeTitle>
                </HomeTilteContainer>

                {/* Input de busca */}
                <HomeSearchContainer>
                    <TextInput label="CNPJ" variant="outlined"/>
                    <SearchBtn>Localizar</SearchBtn>
                </HomeSearchContainer>
            </HomeTopContainer>

            {/* TODO: Separar em components */}
            {/* Resultados */}
            <HomeResultsContainer>
                {/* <img style={{ width: '200px', marginLeft: 'auto', marginRight: 'auto' }} src={SearchImage} />
                <p style={{ fontSize: '20px', color: '#FFF' }}>Localize acima a primeira empresa</p> */}

                <HomeSlider {...settings}>
                    <Card />                                
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </HomeSlider>
            </HomeResultsContainer>

        </Container>
    );
}

export default Home;