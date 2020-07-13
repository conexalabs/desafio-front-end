import axios from 'axios';

const urlBaseCnpj = 'https://www.receitaws.com.br/v1/cnpj/';
const apiKey = '';

export default {
    getCNPJ: (cnpj) => {
        const url = urlBaseCnpj + cnpj;
        axios.get(url).then((resposta) => {
            if (resposta) {
                callback(resposta);
            }
        })
    }
}