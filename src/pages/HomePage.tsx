import React, { useContext, useCallback } from 'react'
import { Paper, Toolbar, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";
import ArrowBackIosSharpIcon from '@material-ui/icons/ArrowBackIosSharp';
import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp';
import EmpresaContext from '../contexts/EmpresaContext';
import TitleBar from '../components/TitleBar';
import './scss/HomePage.scss';

import 'react-multi-carousel/lib/styles.css';

const HomePage = () => {
  const { empresas, setEmpresas, setSelecionada } = useContext(EmpresaContext);
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const history = useHistory();
  const navigate = useCallback(
    (link: string) => {
      history.push(link);
    },
    [history]
  );

  const coordenadas = (selec: Models.Empresa) => {
    setSelecionada(selec);
    navigate(`/maps`);
  }

  function SampleNextArrow(props: { className?: any; style?: any; onClick?: any; }) {
    const { className, onClick } = props;
    return (
      <ArrowForwardIosSharpIcon
        style={{ color: "white" }}
        className={className}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props: { className?: any; style?: any; onClick?: any; }) {
    const { className, onClick } = props;
    return (
      <ArrowBackIosSharpIcon
        style={{ color: "white" }}
        className={className}
        onClick={onClick}
      />
    );
  }

  return (
    <section className="container-home">
      <TitleBar />

      {empresas.length > 0 && (<Slider className="carousel" {...settings}>
        {empresas && empresas.map((empresa) => (
          <Paper variant="outlined" elevation={3} key={empresa.cnpj} onClick={() => coordenadas(empresa)}>
            <article className="razao-social">
              <h2>{empresa.nome.toLowerCase()}</h2>
              <p>Razão Social</p>
            </article>

            <article className="cnpj">
              <h2>{empresa.cnpj}</h2>
              <p>CNPJ</p>
            </article>

            <article className="endereco">
              <h2>{empresa.logradouro.toLowerCase()} {empresa.numero.toLowerCase()} {empresa.bairro.toLowerCase()} {empresa.municipio.toLowerCase()}</h2>
              <p>Endereço</p>
            </article>
          </Paper>
        ))}
      </Slider>)}

      {empresas.length === 0 && (
        <div className="first">
          <FontAwesomeIcon icon={faSearchPlus} />
          <p>Localize acima a primeira empresa</p>
        </div>
      )}


      {empresas.length >= 4 && (
        <Toolbar>
          <Button className="excluir" title='Limpar empresas' onClick={() => setEmpresas([])}><FontAwesomeIcon icon={faBan} /></Button>
        </Toolbar>
      )}
    </section>
  )
}
export default HomePage;