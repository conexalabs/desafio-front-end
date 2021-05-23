import axios from "axios";

export const apiCnpj = axios.create({
  baseURL:
    "https://cors-anywhere.herokuapp.com/https://www.receitaws.com.br/v1/cnpj",
});
