// Estilos globais

import { createGlobalStyle } from 'styled-components';

import colors from './colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: linear-gradient(135deg, ${colors.gradientPrimary} 0%, ${colors.gradientSecondary} 100%);

    @media (max-width: 767px) {
    background:  ${colors.gradientPrimary};
  
  }
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
  }

  #root {
    margin: 0 auto;
  }

  button {
    cursor: pointer;
  }
`;
