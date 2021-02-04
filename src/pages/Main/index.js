import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaBuilding } from 'react-icons/fa';
import { searchedCnpj, companiesFound } from '../../store/actions';
import jsonp from '../../jsonp';

import './styles.scss';
import SearchImg from '../../assets/people-search.svg';

function Main() {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const companiesState = useSelector((state) => state.companies);
  const inputRef = useRef(null);



  const numericMask = (e) => {
    let { value } = e.target;
    value = value.replace(/\D/, '').replace(/(\d{14})\d+?/, '$1');
    e.target.value = value;
  }

  const handleSearch = async () => {    
    const cnpj = inputRef.current.value;

    if (cnpj.length < 14) {
      alert('Valor inválido. O CNPJ deve conter 14 caratéres');
    }

    setIsLoading(true);
    const url = `https://www.receitaws.com.br/v1/cnpj/${cnpj}`;
    
    jsonp(url, (response) => {
      console.log(response);
      const data = response;

      setIsLoading(false);

      if (data.status === 'ERROR') {
        alert(data.message);
        return;
      }
      const prevCompanies = companiesState.companiesFound;

      if (prevCompanies.some((comp) => comp.razaoSocial === data.nome)) {
        alert('Esta empresa já foi adicionada na lista');
        return;
      }

      const company = {
        razaoSocial: data.nome,
        cnpj: data.cnpj,
        endereco: `${data.logradouro} ${data.municipio}`,
      }

      dispatch(companiesFound([...prevCompanies, company]));
    });
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <header>
          <div className="row">
            <div className="col-md-8 offset-md-2 col-12">
              <div className="row justify-content-center">
                <h3>
                  <FaBuilding />
                  Localizador de Empresas
                </h3>
              </div>
            </div>
          </div>
          <div className="row header-search">
            <div className="search-form">
              <input
                ref={inputRef}
                type="text" 
                className="form-control" 
                name="cnpj" 
                placeholder="CNPJ..."
                onChange={numericMask}
                readOnly={isLoading}
              />
              <button 
                type="button" 
                className="btn-search" 
                onClick={handleSearch}
                disabled={isLoading}
              >
                {isLoading ? 'CARREGANDO...' : 'LOCALIZAR'}
              </button>
            </div>    
          </div>
        </header>      
      </div>
      <div className="row justify-content-center">
        <main>
          {companiesState.companiesFound.length > 0 ? (
            <h3>companies found</h3>
          ) : (
            <div className="search-empty">
              <img className="img-search" src={SearchImg} alt="Pesquisar"/>
              <span>Localize acima a primeira empresa</span>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default Main;