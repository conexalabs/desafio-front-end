import React, { createContext, useCallback, useState } from 'react';

import { ICompanyObject } from '../utils/interfacesData';

interface IContext {
  nome: string;
  cnpj: string;
  logradouro: string;
  municipio: string;
  coordinate: {
    lat: number;
    lng: number;
  };
  setSelectedCompany(company: ICompanyObject): void;
}

export const Context = createContext<IContext>({} as IContext);

export const ContextProvider: React.FC = ({ children }) => {
  const [company, setCompany] = useState<ICompanyObject>({} as ICompanyObject);

  const setSelectedCompany = useCallback(
    (selectedCompany: ICompanyObject) => {
      setCompany(selectedCompany);
      console.log(`selected: ${selectedCompany}`);
      console.log(`company: ${company}`);
    },
    [company],
  );

  return (
    <Context.Provider
      value={{
        nome: company.nome,
        cnpj: company.cnpj,
        logradouro: company.logradouro,
        municipio: company.municipio,
        coordinate: company.coordinates,
        setSelectedCompany,
      }}
    >
      {children}
    </Context.Provider>
  );
};
