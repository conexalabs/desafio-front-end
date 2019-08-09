import React from 'react';
import Loader from 'react-loader-spinner';

import { Container } from './styles';
import { green } from '../../contants/color';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Spinner = () => (
  <Container>
    <Loader
      type="Puff"
      color={green}
      height="100"
      width="100"
    />
  </Container>
);

export default Spinner;
