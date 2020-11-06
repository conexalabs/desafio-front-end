import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';

import './styles.scss';

interface IMapCardProps {
  nome: string;
  cnpj: string;
  logradouro: string;
  municipio: string;
}

const MapCard: React.FC<IMapCardProps> = ({
  nome,
  cnpj,
  logradouro,
  municipio,
}: IMapCardProps) => {
  return (
    <div className="map-card-main-content">
      <Link to="/">
        <FaArrowCircleLeft />
      </Link>

      <h3>{nome}</h3>
      <span>Razão social</span>

      <h3>{cnpj}</h3>
      <span>CNPJ</span>

      <h3>{`${logradouro} ${municipio}`}</h3>
      <span>Endereço</span>
    </div>
  );
};

export default MapCard;
