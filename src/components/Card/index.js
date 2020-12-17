import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

function Card({ social, cnpj, address }) {
  return (
    <Link to="/localization" style={{ textDecoration: "none" }}>
      <div class="card">
        <div>
          <p>{social}</p>
          <span>Razão social</span>
        </div>

        <div>
          <p>{cnpj}</p>
          <span>CNPJ</span>
        </div>

        <div>
          <p>{address}</p>
          <span>Endereço</span>
        </div>
      </div>
    </Link>
  );
}

export default Card;
