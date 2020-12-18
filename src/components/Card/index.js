import React from "react";
import { Link } from "react-router-dom";
import { titleCase } from "../../utils";
import "./style.scss";

function Card({ companyName, cnpj, address }, props) {
  return (
    <Link
      to={{
        pathname: "/localization",
        state: { companyName, cnpj, address },
      }}
      style={{ textDecoration: "none" }}
    >
      <div className="card">
        <div>
          <p>{titleCase(companyName)}</p>
          <span>Razão social</span>
        </div>

        <div>
          <p>{cnpj}</p>
          <span>CNPJ</span>
        </div>

        <div>
          <p>{titleCase(address)}</p>
          <span>Endereço</span>
        </div>
      </div>
    </Link>
  );
}

export default Card;
