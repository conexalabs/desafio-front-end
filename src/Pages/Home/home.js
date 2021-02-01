import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCNPJ } from '../../Redux/Actions'
import { FaBuilding } from "react-icons/fa";
import Card from 'react-bootstrap/Card';
import Image from '../../Assets/people_search.svg'


import './Styles.scss'

const Home = () => {
  const resultCNPJ = useSelector(state => state.homeReducer.cnpj)

  // console.log(Object.keys(resultCNPJ).length)

  const [cnpj, setCnpj] = useState({})

  const handleChange = (value) => {
    setCnpj(value.replace(/\D/g, ''))
    return value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")
  }

  const dispatch = useDispatch()

  const fetch = (cnpj) => {
    dispatch(fetchCNPJ(cnpj))
  }

  return (
    <div>
      <header>
        
        <div className='div-titulo'>
          <FaBuilding size={48} />

          <p>Localizador de Empresas</p>
        </div>


        <div className='container-localizador'>
          <input
            type='text'
            name='cnpj'
            placeholder='CNPJ...'
            maxLength='18'
            onChange={(event) => {
              const { value } = event.target
              event.target.value = handleChange(value)
            }}
          />

          <button onClick={() => fetch(cnpj)}>Localizar</button>
        </div>

      </header>


      <div className='container-result'>

        {Object.keys(resultCNPJ).length ? (

          <Card className='card'>
            <Card.Body>

              <div>
                <p>{resultCNPJ.nome}</p>
                <span>Razão Social</span>
              </div>

              <div>
                <p>{resultCNPJ.cnpj}</p>
                <span>CNPJ</span>
              </div>

              <div>
                <p> {resultCNPJ.logradouro}, {resultCNPJ.bairro}, {resultCNPJ.numero}, {resultCNPJ.uf} </p>
                <span>Endereço</span>
              </div>

            </Card.Body>
          </Card>

        ) : (

            <div className='div-image'>
              <img src={Image} alt="Company Search" />

              <span>Localize acima a primeira empresa</span>
            </div>

          )}

      </div>

    </div>
  )
}

export default Home
