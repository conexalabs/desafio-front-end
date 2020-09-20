import React, { useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { cnpj as validateCNPJ } from 'cpf-cnpj-validator';

// Styled components
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
    SliderArrow,
    HomeModal,
    HomeFade,
    HomeModalTitle,
    HomeModalTxt,
    HomeModalBtn
} from './Home-styled';

// Imgs
import PredioIcon from './../../resources/svg/predio.svg';
import ArrowIcon from './../../resources/svg/arrow.svg';

// Components
import Card from '../../components/card/Card';
import HomeConsultaVazia from './HomeConsultaVazia';
import { Backdrop,  Paper } from '@material-ui/core';

// Api
import { ConsultaCNPJ } from '../../api/ReceitaApi';

import InputMask from 'react-input-mask';
import HandleLocalStorage from '../../localStorage/localStorage';


const InputCNPJMask = (props) => {
    const { inputRef, ...other } = props;

    return (
        <InputMask
            {...other}
            mask="99.999.999/9999-99"
        />
    )
}

const Home = () => {
    const history = useHistory();

    const [sliderSettings, setSliderSettings] = useState();
    const [cnpj, setCnpj] = useState('');
    const [cnpjConsultados, setConsultados] = useState([]);
    const [showModalError, setShowModalError] = useState(false);
    const [errorText, setErrorText] = useState('');
 
    const { localizadorLocalStorage, setListRecentes } = HandleLocalStorage();

    useEffect(() => {
        // Função para gerar o settings do slider
        handleSliderSettings();
    }, [cnpjConsultados]);

    useEffect(() => {
        if(localizadorLocalStorage.empresasRecentes && localizadorLocalStorage.empresasRecentes.length > 0){
            setConsultados(localizadorLocalStorage.empresasRecentes);
        }
    }, [localizadorLocalStorage]);

    // Atualiza os dados do slider
    // pois o component precisa de uma quantidade diferente
    // de sliderToShow dependendo do tamanho da lista que será exibida
    const handleSliderSettings = () => {
        const settings = {
            dots: false,
            infinite: false,
            adaptiveHeight: true,
            speed: 500,
            responsive: [
                {
                    breakpoint: 2000,
                    settings: {
                        slidesToShow: cnpjConsultados.length > 4 ? 4 : cnpjConsultados.length || 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: cnpjConsultados.length > 3 ? 3 : cnpjConsultados.length || 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: cnpjConsultados.length > 2 ? 2 : cnpjConsultados.length || 1,
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
        };

        setSliderSettings(settings);
    }

    const consultaCNPJ = () => {
        if(validateCNPJ.isValid(cnpj)){
            ConsultaCNPJ({ cnpj: cnpj.replace(/\D/g, '') })
                .then(res => {
                    setListRecentes({ 
                        type: 'add', 
                        payload: res
                    });
                    history.push(`/mapa/${res.cnpj.replace(/\D/g, '')}`)
                })
                .catch(err => {
                    console.log(err);
                    setShowModalError(true);
                    setErrorText(err.message);
                });
        }
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
                    <TextInput 
                        label="CNPJ" 
                        value={cnpj} 
                        onChange={(e) => setCnpj(e.target.value)} 
                        variant="outlined"
                        InputProps={{
                            inputComponent: InputCNPJMask
                        }}
                    />
                    <SearchBtn onClick={consultaCNPJ}>Localizar</SearchBtn>
                </HomeSearchContainer>
            </HomeTopContainer>

            {/* TODO: Separar em components */}
            {/* Resultados */}
            <HomeResultsContainer>
                {cnpjConsultados.length === 0 &&
                    <HomeConsultaVazia />
                }

                {sliderSettings && cnpjConsultados.length > 0 &&
                    <HomeSlider {...sliderSettings}>
                        {cnpjConsultados.map( (empresa, index) => {
                            return <Card key={`empres-${index}`} info={empresa}/>
                        })}
                    </HomeSlider>
                }
            </HomeResultsContainer>

            <HomeModal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={showModalError}
                onClose={() => setShowModalError(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500
                }}
            >
                <HomeFade in={showModalError}>
                    <Paper style={{ padding: 20 }}>
                        <HomeModalTitle>
                            Erro ao consultar CNPJ:
                        </HomeModalTitle>

                        <HomeModalTxt>
                            {errorText}
                        </HomeModalTxt>

                        <HomeModalBtn onClick={() => { setShowModalError(false); setErrorText('') }} variant="contained" >
                            Tentar novamente
                        </HomeModalBtn>
                    </Paper>
                </HomeFade>
            </HomeModal>
        </Container>
    );
}

export default Home;