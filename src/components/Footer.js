/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { Card, CardContent, Box } from '@material-ui/core';
import SearchSVG from './svg/Search';
import ArrowSVG from './svg/Arrow';
import { useCompany } from '../context/Company';

const cardSize = 250 + 20;
const limit = Math.floor(window.innerWidth / cardSize);

const Footer = () => {
  const [index, setIndex] = useState(0);
  const { companies } = useCompany();
  const crossedLimit = companies.length > limit;
  const maxWidth = crossedLimit ? limit * cardSize : companies.length * cardSize;

  function openMap({ nome }) {
    window.location.href = `https://www.google.com/maps?f=l&q=${nome.replace(' ', '+')}&near`;
  }

  function next() {
    if (index < companies.length - limit) {
      setIndex(index + 1);
    }
  }

  function back() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  return (
    <footer className="footer">
      {companies.length === 0 && (
        <Box component="div" className="footer__notfound">
          <SearchSVG width="200" height="200" />
          <Box component="span">Localize acima a primeira empresa</Box>
        </Box>
      )}
      {companies.length >= 1 && (
        <>
          <ArrowSVG className="footer__arrow" onClick={() => back()} />
          <Box component="div" className="cardList" style={{ maxWidth: maxWidth - 20 }}>
            {companies.map((company, key) => (
              <Card
                key={key}
                onClick={() => openMap(company)}
                className="cardList__company"
                style={{
                  transform: `translate(-${index * cardSize}px)`,
                  transition: '1s',
                }}
              >
                <CardContent>
                  <Box component="h1">{company.nome}</Box>
                  <Box component="span">Razão Social</Box>
                  <Box component="h1">{company.cnpj}</Box>
                  <Box component="span">CNPJ</Box>
                  <Box component="h1">
                    {`${company.bairro} - ${company.municipio}`}
                  </Box>
                  <Box component="span">Endereço</Box>
                </CardContent>
              </Card>
            ))}
          </Box>
          <ArrowSVG
            className="footer__arrow footer__arrow--right"
            onClick={() => next()}
          />
        </>
      )}
    </footer>
  );
};

export default Footer;
