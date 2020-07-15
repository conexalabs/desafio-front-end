import React, { useContext, useEffect, useState } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Paper } from '@material-ui/core';
import EmpresaContext from '../contexts/EmpresaContext';
import apiGoogle from '../utils/apiGoogle';
import NavBar from '../components/NavBar';
import './scss/Maps.scss';

const Maps = () => {
  const { selecionada, setLoading } = useContext(EmpresaContext);
  const [coords, setCoords] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    const endereco = `${selecionada.logradouro}+${selecionada.bairro}+${selecionada.municipio}+${selecionada.numero}+A&key=AIzaSyDSviCWFpzFt7LiZe9S19NDLW5V7PGFqS4`;
    setLoading(true);
    async function getEndereco() {
      const { data } = await apiGoogle.get(endereco);
      setCoords({ lat: data.results[0].geometry.location.lat, lng: data.results[0].geometry.location.lng });
      setLoading(false);
    }
    getEndereco();
  }, []);

  const containerStyle = {
    width: '100%',
    height: '100%'
  }

  interface Props {
    rota?: string,
    navigation: boolean
  }

  return (
    <div className="mapa">
      <Paper variant="outlined" elevation={3}>
        <NavBar navigation={true} rota="home" />

        <article className="razao-social">
          <h2>{selecionada.nome.toLowerCase()}</h2>
          <p>Razão Social</p>
        </article>

        <article className="cnpj">
          <h2>{selecionada.cnpj}</h2>
          <p>CNPJ</p>
        </article>

        <article className="endereco">
          <h2>{selecionada.logradouro.toLowerCase()} {selecionada.numero.toLowerCase()} {selecionada.bairro.toLowerCase()} {selecionada.municipio.toLowerCase()}</h2>
          <p>Endereço</p>
        </article>
      </Paper>

      <LoadScript
        googleMapsApiKey="AIzaSyCSuAQE2lLICQYu2mHCJo3KqAV2HR_vwgs"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={coords}
          zoom={19}
        >
          <Marker
            position={coords}
          />
        </GoogleMap>
      </LoadScript>
    </div>
  )
}
export default Maps;