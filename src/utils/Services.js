import XHR from '@/utils/Default';

class Services {
	getByCNPJ(cnpj){
		return XHR.get({ url: `/v1/cnpj/${cnpj}` })
	}
}

export default new Services();

/*
@getByCNPJ - Object Sample
{
	"data_situacao": "07/11/2018",
	"motivo_situacao": "EXTINCAO P/ ENC LIQ VOLUNTARIA",
	"nome": "JOSE FRANCISCO DE SOUSA 01584295597",
	"telefone": "(89) 9445-2002",
	"email": "contabilidadeoeiras@hotmail.com",
	"situacao": "BAIXADA",
	"porte": "MICRO EMPRESA",
	"abertura": "13/02/2014",
	"natureza_juridica": "213-5 - Empresário (Individual)",
	"fantasia": "LUH MODA INTIMA",
	"cnpj": "19.718.229/0001-94",
	"ultima_atualizacao": "2019-09-29T05:45:27.838Z",
	"status": "OK",
	"tipo": "MATRIZ",
	"logradouro": "",
	"numero": "",
	"complemento": "",
	"cep": "",
	"bairro": "",
	"municipio": "",
	"uf": "",
	"efr": "",
	"situacao_especial": "",
	"data_situacao_especial": "",
	"atividade_principal": [{
			"code": "00.00-0-00",
			"text": "********"
	}],
	"atividades_secundarias": [{
			"code": "00.00-0-00",
			"text": "Não informada"
	}],
	"capital_social": "0.00",
	"qsa": [],
	"extra": {},
	"billing": {
			"free": true,
			"database": true
	}
	},
"31.560.200/0001-22": {
	"atividade_principal": [{
			"text": "Edição de cadastros, listas e outros produtos gráficos",
			"code": "58.19-1-00"
	}],
	"data_situacao": "20/09/2018",
	"tipo": "MATRIZ",
	"nome": "RAYSA COSTA QUEIROZ 05482532429",
	"telefone": "(81) 3466-9912",
	"email": "raysacqueiroz@gmail.com",
	"situacao": "ATIVA",
	"bairro": "BOA VIAGEM",
	"logradouro": "AVENIDA FERNANDO SIMOES BARBOSA",
	"numero": "374",
	"cep": "51.020-390",
	"municipio": "RECIFE",
	"fantasia": "RAYSA QUEIROZ",
	"porte": "MICRO EMPRESA",
	"abertura": "20/09/2018",
	"natureza_juridica": "213-5 - Empresário (Individual)",
	"uf": "PE",
	"cnpj": "31.560.200/0001-22",
	"ultima_atualizacao": "2019-08-07T23:59:59.000Z",
	"status": "OK",
	"complemento": "",
	"efr": "",
	"motivo_situacao": "",
	"situacao_especial": "",
	"data_situacao_especial": "",
	"atividades_secundarias": [{
			"code": "00.00-0-00",
			"text": "Não informada"
	}],
	"capital_social": "1000.00",
	"qsa": [],
	"extra": {},
	"billing": {
			"free": true,
			"database": true
	}
}

*/