import React from 'react';
import SearchImage from './../../resources/imgs/search-image.png';

const HomeConsultaVazia = () => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <img
        style={{ width: '200px', marginLeft: 'auto', marginRight: 'auto' }}
        src={SearchImage}
        alt={'Busca vazia'}
      />
      <p style={{ fontSize: '20px', color: '#FFF' }}>
        Localize acima a primeira empresa
      </p>
    </div>
  );
};

export default HomeConsultaVazia;
