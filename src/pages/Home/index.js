import React, { useCallback, useState, useEffect } from "react";
import { uuid } from "uuidv4";
import { FaBuilding } from "react-icons/fa";
import { cnpj as validateCNPJ } from "cpf-cnpj-validator";
import axios from "axios";

import { useCompany } from "../../hooks/company";
import CarouselComponent from "../../components/Carousel";
import { createAddress } from "../../utils";
import PeopleSearch from "../../assets/people_search.svg";
import "./style.scss";

const Home = () => {
  const [cnpj, setCnpj] = useState("");
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
        console.log("Error");
        return;
      }

      const cnpjWithoutMask = cnpj.replace(/[^\d]+/g, "");

      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/http://www.receitaws.com.br/v1/cnpj/${cnpjWithoutMask}`
      );

      console.log(response.data);

      const { nome, cep } = response.data;

      const address = createAddress(response.data);

      const newCompany = {
        key: uuid(),
        companyName: nome,
        cnpj,
        address,
        cep,
      };

      addCompany(newCompany);
      setCards(getCompanies);
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

        <form className="input" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="CNPJ..."
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
          />
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
};

export default Home;
