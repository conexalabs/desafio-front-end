import React, { useCallback, useEffect, useState } from 'react';
import { FaBuilding } from 'react-icons/fa';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';

import './styles.scss';
import { receitaWsApi, googleGeocodeApi } from '../../services/api';
import { validateCnpj } from '../../utils/validateCnpj';
import Card from '../../components/Card';
import peopleSearch from '../../assets/people_search.svg';
import { ICompanyObject } from '../../utils/interfacesData';

const Home: React.FC = () => {
  const [cnpjValue, setCnpjValue] = useState('');
  const [cnpjValidationError, setCnpjValidationError] = useState('');
  const [companies, setCompanies] = useState<ICompanyObject[]>(
    [] as ICompanyObject[],
  );
  const companiesList = localStorage.getItem('@LocalizadorEmpresas:empresas');

  useEffect(() => {
    if (companiesList) {
      const listOfCompanies = JSON.parse(companiesList) as ICompanyObject[];

      if (listOfCompanies) {
        setCompanies(listOfCompanies);
      }
    }
  }, [companiesList]);

  const setCompanyLocalStorage = useCallback(
    async (newCompany: ICompanyObject) => {
      if (
        companies &&
        companies.find(companyObject => companyObject.cnpj === newCompany.cnpj)
      ) {
        return;
      }
      const { data: responseGeocode } = await googleGeocodeApi.get(``, {
        params: {
          address: `${newCompany.logradouro} ${newCompany.numero} ${newCompany.bairro} ${newCompany.municipio} - ${newCompany.uf} ${newCompany.cep}`,
        },
      });

      if (responseGeocode) {
        const companyObject = {
          cnpj: newCompany.cnpj,
          nome: newCompany.nome,
          cep: newCompany.cep,
          bairro: newCompany.bairro,
          logradouro: newCompany.logradouro,
          municipio: newCompany.municipio,
          numero: newCompany.numero,
          uf: newCompany.uf,
          coordinates: responseGeocode.results[0].geometry.location,
        } as ICompanyObject;

        localStorage.setItem(
          '@LocalizadorEmpresas:empresas',
          JSON.stringify([...companies, companyObject]),
        );
        setCompanies([...companies, companyObject]);
      }
    },
    [companies],
  );

  const handleSearchCompany = useCallback(async () => {
    setCnpjValidationError('');
    try {
      await validateCnpj(cnpjValue);

      const { data: responseCompany } = await receitaWsApi.get(
        `cnpj/${cnpjValue}`,
      );

      await setCompanyLocalStorage(responseCompany);
    } catch (err) {
      setCnpjValidationError(err.message);
    }
  }, [cnpjValue, setCompanyLocalStorage]);

  return (
    <>
      <div className="main-content">
        <div className="header-main-content">
          <div className="title-content">
            <span>
              <FaBuilding />
              Localizador de empresas
            </span>
          </div>
          <div className="search-content">
            <div className="input-content">
              <input
                type="text"
                className="form-control"
                placeholder="CNPJ..."
                value={cnpjValue}
                onChange={(e: React.FormEvent<HTMLInputElement>) => {
                  setCnpjValue(e.currentTarget.value);
                  setCnpjValidationError('');
                }}
                maxLength={14}
              />
              {cnpjValidationError && <span>{cnpjValidationError}</span>}
            </div>

            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSearchCompany}
            >
              LOCALIZAR
            </button>
          </div>
        </div>
        <div className="list-main-content">
          {companies && companies.length ? (
            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
              containerClass="container"
              dotListClass=""
              draggable={false}
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024,
                  },
                  items: 3,
                  partialVisibilityGutter: 40,
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0,
                  },
                  items: 1,
                  partialVisibilityGutter: 30,
                },
                tablet: {
                  breakpoint: {
                    max: 1200,
                    min: 464,
                  },
                  items: 2,
                  partialVisibilityGutter: 30,
                },
              }}
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              {companies.map(companyDetails => (
                <Card key={companyDetails.cnpj} company={companyDetails} />
              ))}
            </Carousel>
          ) : (
            <>
              <img src={peopleSearch} alt="peopleSearch" />
              <span>Localize acima a primeira empresa</span>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
