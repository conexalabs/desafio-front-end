import React, { useState, useEffect } from 'react';
import './index.scss';
import { Button, TextField, Box } from '@material-ui/core';
import { useAlert } from 'react-alert';
import { useCompany } from '../../context/Company';
import Footer from '../../components/Footer';
import MaskCNPJ from '../../components/MaskCNPJ';
import API from '../../services/API';
import ValidateCNPJ from '../../utils';

const MainPage = () => {
  const [cnpj, setCNPJ] = useState('');
  const { addCompany } = useCompany();
  const alert = useAlert();

  // onComponentDidMount
  useEffect(() => {
    let storage = localStorage.getItem('companies') || '[]';
    storage = JSON.parse(storage);
    storage.map((company) => setTimeout(() => addCompany(company), 100));
    // eslint-disable-next-line
  }, []);

  function handleInputForm(e) {
    const { value } = e.target;
    setCNPJ(value.replace(/[^\d]+/g, '').substring(0, 14));
  }

  async function findCNPJ() {
    let storage = localStorage.getItem('companies');
    storage = JSON.parse(storage);

    if (!ValidateCNPJ(cnpj)) {
      alert.error('O CNPJ digitado é invalido!');
      return;
    }

    // Start SVG Animation
    const lupa = document.querySelector('.prefix__lupa');
    if (lupa) {
      lupa.classList.add('active');
    }

    try {
      // Start Request API
      const { data } = await API.get(`/cnpj/${cnpj}`);
      setTimeout(() => {
        addCompany(data);
        localStorage.setItem('companies', JSON.stringify([data, ...storage]));
      }, 1000);
    } catch (err) {
      setTimeout(() => {
        alert.error('Erro ao fazer requisição! Tente novamente...');
        if (lupa) {
          document.querySelector('.prefix__lupa').classList.remove('active');
        }
      }, 1000);
    }
  }

  return (
    <Box component="div" className="main">
      <Box component="header" className="header">
        <Box component="h1" className="header__title">
          <Box component="i" className="header__icon fas fa-building" aria-hidden="true" />
          Localizador de Empresas
        </Box>
        <Box component="div" className="header__form">
          <TextField
            onInput={(e) => handleInputForm(e)}
            InputProps={{
              inputComponent: MaskCNPJ,
            }}
            className="header__cnpj"
            label="CNPJ..."
            value={cnpj}
            variant="outlined"
          />
          <Button
            className="header__searchbtn"
            variant="contained"
            onClick={() => findCNPJ()}
          >
            LOCALIZAR
          </Button>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default MainPage;
