import React from 'react';
import SearchImage from './../../resources/imgs/search-image.png';

const HomeConsultaVazia = () => {
    return(
        <>
            <img style={{ width: '200px', marginLeft: 'auto', marginRight: 'auto' }} src={SearchImage} />
            <p style={{ fontSize: '20px', color: '#FFF' }}>Localize acima a primeira empresa</p>
        </>
    );
};

export default HomeConsultaVazia;