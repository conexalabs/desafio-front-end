import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCNPJ } from '../../Redux/Actions'
import { FaBuilding } from "react-icons/fa";
import Image from '../../Assets/people_search.svg'
import Cards from '../Card/Card'


import './Styles.scss'

const Home = () => {
  const resultCNPJ = useSelector(state => state.homeReducer.cnpj)

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

          <Cards />

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
