/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, FormEvent, useEffect } from 'react';

import api from '../../services/api';

import { ICompany } from '../../interface/company';
import { Link } from 'react-router-dom';
import { FaBuilding, FaChevronRight } from 'react-icons/fa';

import Lottie from 'react-lottie';
import failedAnimation from '../../assets/Lotties/failedAnimation.json';
import searchFile from '../../assets/Lotties/searchFile.json';
import CpfCnpj from '@react-br-forms/cpf-cnpj-mask';

import 'react-multi-carousel/lib/styles.css';

import Carousel from '../../components/Carousel/Carousel';
import Spinner from '../../components/SpinnerDashboard';

import {
  Header,
  Title,
  Form,
  Body,
  CardInformation,
  InfoRazaoSocial,
  InfoCNPJ,
  InfoEndereco,
  Footer,
  Empty,
  Error,
} from './styles';

interface CnpjProps {
  dataOfCompany: (company: ICompany) => void;
}

function Dashboard({ dataOfCompany }: CnpjProps) {
  const [newCnpj, setNewCnpj] = useState('');
  const [inputError, setInputError] = useState('');
  const [mask, setMask] = useState('');
  const [loader, setLoader] = useState<boolean>(false);
  const [searchCnpj, setSearchCnpj] = useState<ICompany[]>(() => {
    const storageCNPJ = localStorage.getItem('@Conexa:cnpj');

    if (storageCNPJ) {
      return JSON.parse(storageCNPJ);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem('@Conexa:cnpj', JSON.stringify(searchCnpj));
  }, [searchCnpj]);

  async function handleSearchCnpj(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if (!newCnpj) {
      setInputError('Digite um CNPJ');
      return;
    }

    if (newCnpj.length !== 18) {
      setInputError('Está Faltando Números aí 😬');
      return;
    }

    try {
      setLoader(true);
      const response = await api.get<ICompany>(`v1/cnpj/${newCnpj.replace(/\D+/g, '')}`);

      const findCnpj = response.data;

      if (response.data.status === 'ERROR') {
        setInputError(response.data.message);
        setLoader(false);
        return;
      }

      setSearchCnpj([...searchCnpj, findCnpj]);
      setNewCnpj('');
      setInputError('');
      setLoader(false);
    } catch (err) {
      setInputError('CNPJ Inválido');
      setNewCnpj('');
      setLoader(false);
    }
  }

  const handleClickAddress = (company: ICompany) => {
    dataOfCompany(company);
  };


  // Propriedade acerca das animations que é feita pela biblioteca Lottie
  const cnpjAnimation = {
    loop: 1,
    autoplay: true,
    animationData: failedAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const findFile = {
    loop: true,
    autoplay: true,
    animationData: searchFile,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      <Header>
        <Title>
          <FaBuilding size={50} color="#3a8970" />
          <h1>Localizador de Empresas</h1>
        </Title>
        <Form hasError={!!inputError} onSubmit={handleSearchCnpj}>
          <CpfCnpj
            placeholder="CNPJ..."
            value={newCnpj}
            onChange={(e: { target: { value: React.SetStateAction<string> } }, type: string) => {
              setNewCnpj(e.target.value);
              setMask((type = 'CNPJ'));
            }}
          />
          <button type="submit">LOCALIZAR</button>
        </Form>
        {inputError && (
          <Error>
            <Lottie width={26} height={26} options={cnpjAnimation} />
            {inputError}
          </Error>
        )}
      </Header>

      <Body>
        {loader ? (
          <Spinner />
        ) : searchCnpj.length > 0 ? (
          <Carousel show={4}>
            {searchCnpj.map((item) => (
              <>
                <Link to="/address" key={item.cnpj} onClick={() => handleClickAddress(item)}>
                  <CardInformation>
                    <InfoRazaoSocial>
                      <p>{item.fantasia}</p>
                      <span>Razão Social</span>
                    </InfoRazaoSocial>
                    <InfoCNPJ>
                      <p>{item.cnpj}</p>
                      <span>CNPJ</span>
                    </InfoCNPJ>
                    <InfoEndereco>
                      <p>{`${item.logradouro}, ${item.numero} - ${item.bairro} - ${item.municipio}, ${item.uf}`}</p>
                      <span>Endereço</span>
                    </InfoEndereco>
                    <Footer>
                      <FaChevronRight size={18} />
                    </Footer>
                  </CardInformation>
                </Link>
              </>
            ))}
          </Carousel>
        ) : (
          <Empty>
            <Lottie width={175} height={175} options={findFile} />
            <span>Localize acima a primeira empresa</span>
          </Empty>
        )}
      </Body>
    </>
  );
}

export default Dashboard;
