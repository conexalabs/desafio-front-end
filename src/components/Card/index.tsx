import React, { useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { ICompanyObject } from '../../utils/interfacesData';
import './styles.scss';
import { Context } from '../../context/Context';

interface IPropsObject {
  company: ICompanyObject;
}

const Card: React.FC<IPropsObject> = ({ company, children }) => {
  const { setSelectedCompany } = useContext(Context);
  const history = useHistory();

  const selectCompany = useCallback(async () => {
    await setSelectedCompany(company);
    history.push('/localization');
  }, [company, history, setSelectedCompany]);

  return (
    <button
      type="button"
      className="card-main-content"
      onClick={() => selectCompany()}
      data-testid="card-button"
    >
      <h3>{company.nome}</h3>
      <span>Razão social</span>

      <h3>{company.cnpj}</h3>
      <span>CNPJ</span>

      <h3>{`${company.logradouro} ${company.numero} ${company.bairro} ${company.municipio}`}</h3>
      <span>Endereço</span>
    </button>
  );
};

export default Card;
