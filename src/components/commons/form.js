import styled from 'styled-components';
import { Button, darken, TextField } from '@material-ui/core';

export const TextInput = styled(TextField)`
  && {
    width: 360px;
    height: 60px;

    .MuiOutlinedInput-root {
      height: 100%;
    }

    .MuiOutlinedInput-notchedOutline {
      border: 2px solid #3a8970;
      border-radius: 5px;
    }

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const SearchBtn = styled(Button)`
  && {
    width: 150px;
    /* height: 50px; */

    padding: 20px;
    border-radius: 50px;

    background-color: #3a8970;
    color: #fff;

    margin-left: 25px;

    font-size: 20px;
    font-weight: bold;
    text-align: center;

    &:hover {
      background-color: ${darken('#3a8970', 0.2)};
    }

    @media screen and (max-width: 768px) {
      width: 100%;
      margin-top: 20px;
      margin-left: 0;
    }
  }
`;
