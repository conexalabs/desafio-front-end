import React from 'react'
import { useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import Carousel, { consts } from 'react-elastic-carousel'

import './Styles.scss'

const Cards = () => {
  const resultCNPJ = useSelector(state => state.homeReducer.cnpj)

  const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: resultCNPJ.length },
    { width: 550, itemsToShow: 2, itemsToScroll: resultCNPJ.length },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ]

  return (
    <div>
      <Carousel
        breakPoints={breakPoints}
        enableSwipe={true}
        disableArrowsOnEnd={false}
        itemPosition={consts.CENTER}
        className='carousel'
      >

        {
          Object.keys(resultCNPJ).map(index => (
            <Link className='link-card' key={index}
              to={{
                pathname: '/maps',
                state: resultCNPJ[index]
              }}>
              <Card className='card'>
                <Card.Body>

                  <div>
                    <p>{resultCNPJ[index].nome}</p>
                    <span>Razão Social</span>
                  </div>

                  <div>
                    <p>{resultCNPJ[index].cnpj}</p>
                    <span>CNPJ</span>
                  </div>

                  <div>
                    <p> {resultCNPJ[index].logradouro}, {resultCNPJ[index].bairro}, {resultCNPJ[index].numero}, {resultCNPJ[index].uf} </p>
                    <span>Endereço</span>
                  </div>

                </Card.Body>
              </Card>
            </Link>
          ))
        }
      </Carousel>
    </div>
  )
}

export default Cards
