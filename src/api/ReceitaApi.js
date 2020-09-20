import axios from 'axios-jsonp-pro';

export const ConsultaCNPJ = ({ cnpj }) => {
    return axios.jsonp(`https://www.receitaws.com.br/v1/cnpj/${cnpj}`)
};