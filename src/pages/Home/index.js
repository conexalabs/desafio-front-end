import React from "react";
import { FaBuilding } from "react-icons/fa";

import Card from "../../components/Card";

import logoImg from "../../assets/find.png";

import "./style.scss";

function Home() {
  return (
    <div className="wrapper">
      <div className="container-localizator">
        <div className="header">
          <FaBuilding size={48} />
          <p>Localizador de Empresas</p>
        </div>

        <div className="input">
          <input type="text" placeholder="CNPJ..." />
          <button type="button">LOCALIZAR</button>
        </div>
      </div>
      <div className="container-cards">
        <Card
          social={"Laís e Olivia Comercio de Bebidas Ltda"}
          cnpj={"48.614.479/0001-82"}
          address={"Rua Nova York 822"}
        />
        <Card
          social={"Laís e Olivia Comercio de Bebidas Ltda"}
          cnpj={"48.614.479/0001-82"}
          address={"Rua Nova York 822"}
        />
        <Card
          social={"Laís e Olivia Comercio de Bebidas Ltda"}
          cnpj={"48.614.479/0001-82"}
          address={"Rua Nova York 822"}
        />
        <Card
          social={"Laís e Olivia Comercio de Bebidas Ltda"}
          cnpj={"48.614.479/0001-82"}
          address={"Rua Nova York 822"}
        />
        <Card
          social={"Laís e Olivia Comercio de Bebidas Ltda"}
          cnpj={"48.614.479/0001-82"}
          address={"Rua Nova York 822"}
        />

        {/* <img src={logoImg} alt={"xe"} />
        <p>Localize acima a primeira empresa</p> */}
      </div>
    </div>
  );
}

export default Home;
