import React, { useEffect, useState } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import Geocode from "react-geocode"
import { useLocation } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import { FaRegArrowAltCircleLeft } from "react-icons/fa"
import { Link } from 'react-router-dom'

import './Styles.scss'

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_KEY)

const mapStyles = {
  height: "100vh",
  width: "100%"
}

const Gmaps = () => {
  const [currentPosition, setCurrentPosition] = useState();
  const data = useLocation();

  const address = data.state.logradouro + ', ' + data.state.bairro + ', ' + data.state.numero + ', ' + data.state.uf

  useEffect(() => {
    Geocode.fromAddress(address).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        setCurrentPosition({ 'lat': lat, 'lng': lng })
      }
    )
  }, [address])


  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_KEY}>

      <Card className='card-map'>
        <Card.Body>

          <Link
            to={{
              pathname: "/",
            }}
          >
            <FaRegArrowAltCircleLeft size={32} />
          </Link>

          <div>
            <p>{data.state.nome}</p>
            <span>Razão Social</span>
          </div>

          <div>
            <p>{data.state.cnpj}</p>
            <span>CNPJ</span>
          </div>

          <div>
            <p> {address} </p>
            <span>Endereço</span>
          </div>

        </Card.Body>
      </Card>

      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={18}
        center={currentPosition}

      >
        <Marker
          position={currentPosition}
        />

      </GoogleMap>
    </LoadScript>
  )
}

export default Gmaps
