import React, { useState, useEffect } from "react";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { titleCase } from "../../utils";
import MapComponent from "../../components/Map";
import { Link, useLocation } from "react-router-dom";
import "./style.scss";

function Localization() {
  const [company, setCompany] = useState({});
  const data = useLocation();

  useEffect(() => {
    setCompany(data.state);
  }, [setCompany, data]);

  if (!company) return;

  return (
    <div>
      <div className="card-map">
        <Link
          to={{
            pathname: "/",
          }}
        >
          <FaRegArrowAltCircleLeft size={32} />
        </Link>
        <div>
          <p>{titleCase(company.companyName)}</p>
          <span>Razão social</span>
        </div>

        <div>
          <p>{company.cnpj}</p>
          <span>CNPJ</span>
        </div>

        <div>
          <p>{titleCase(company.address)}</p>
          <span>Endereço</span>
        </div>
      </div>
      <MapComponent
        address={company.address}
        nameCompany={company.companyName}
      />
    </div>
  );
};

export default Localization;
