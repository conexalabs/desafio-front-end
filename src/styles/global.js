import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  /* @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap'); */
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, border-style, #root {
    height: 100%; 
    width: 100%; 
    margin: 0;
  }

  body {
    font: 14px 'Roboto', sans-serif;
    font-weight: regular;
    background-color: '#3a8970';
  }
`;