import React, { useCallback, useState, useEffect } from "react";
import axios from "axios";
import { FaBuilding } from "react-icons/fa";
import { cnpj as validateCNPJ } from "cpf-cnpj-validator";
import InputMask from "react-input-mask";

import { useCompany } from "../../hooks/company";
import CarouselComponent from "../../components/Carousel";
import { createAddress } from "../../utils";

import PeopleSearch from "../../assets/people_search.svg";
import "./style.scss";

function Home() {
  const [cnpj, setCnpj] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [cards, setCards] = useState([]);

  const { addCompany, getCompanies } = useCompany();

  useEffect(() => {
    if (getCompanies) setCards(getCompanies);
  }, [getCompanies]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const cnpjIsValid = validateCNPJ.isValid(cnpj);

      if (!cnpjIsValid) {
        setError(true);
        setErrorMessage("CNPJ inválido!");
        return;
      }

      const cnpjWithoutMask = cnpj.replace(/[^\d]+/g, "");

      const response = await axios.get(
        `https://www.receitaws.com.br/v1/cnpj/${cnpjWithoutMask}`
      );

      const { status, message } = response.data;

      if (status === "ERROR") {
        setError(true);
        setErrorMessage(message);
        return;
      }

      const { nome, cep } = response.data;

      const address = createAddress(response.data);

      const newCompany = {
        companyName: nome,
        cnpj,
        address,
        cep,
      };

      addCompany(newCompany);
      setCards(getCompanies);
      setError(false);
      setErrorMessage("");
      setCnpj("");
    },
    [cnpj, setCards, setCnpj, addCompany, getCompanies]
  );

  return (
    <div className="wrapper">
      <div className="container-localizator">
        <div className="header">
          <FaBuilding size={48} />
          <p>Localizador de Empresas</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input">
            <InputMask
              mask="99.999.999/9999-99"
              type="text"
              placeholder="CNPJ..."
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value)}
            />
            {error && <span> {errorMessage}</span>}
          </div>
          <button type="submit">LOCALIZAR</button>
        </form>
      </div>
      <div className="container-cards">
        {cards.length ? (
          <CarouselComponent cards={cards} />
        ) : (
          <div className="container-people-search">
            <img src={PeopleSearch} alt="Company Search" />
            <p>Localize acima a primeira empresa</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
