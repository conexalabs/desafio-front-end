// Componente de carregamento enquanto é feita a renderização do Mapa

import React from 'react';
import { Loading, TextLoading, LoadingIcon } from './styles';

const Spinner: React.FC = () => {
  return (
    <Loading>
      <LoadingIcon hidden={false} />
      <TextLoading>Buscando Endereço</TextLoading>
    </Loading>
  );
};

export default Spinner;
