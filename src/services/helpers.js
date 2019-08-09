import { STORAGE_NAME, GOOGLE_API_KEY } from "../contants/config";
import swal from 'sweetalert';
const axios = require('axios');

export const cnpjMask = value => {
  return value
    .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
    .replace(/^(\d{2})(\d)/,"$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")
    .replace(/\.(\d{3})(\d)/,".$1/$2")
    .replace(/(\d{4})(\d)/,"$1-$2")
}

export const unformatMask = value => {
  return value.replace(/\D/g, "");
}

export const saveStorage = companies => {
  let companiesString = JSON.stringify(companies);
  localStorage.setItem(STORAGE_NAME, companiesString);
}

export const getStorage = () => {
  let companies = localStorage.getItem(STORAGE_NAME) || '[]';
  companies = JSON.parse(companies);
  return companies;
}

export const getLatLng = (company) => {
  return axios({
    method: 'get',
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${company.address}&key=${GOOGLE_API_KEY}`,
  }).then(function (response) {
    if (response.data.results[0]) {
      return response.data.results[0].geometry.location;
    }
    return { error: false };
  }).catch(error => {
    return { error: false };
  });
}

export const validaCnpj = cnpj => {
  cnpj = cnpj.replace(/[^\d]+/g,'');
 
  if(cnpj === '') return false;
   
  if (cnpj.length != 14)
      return false;

  if (cnpj === "00000000000000" || 
      cnpj === "11111111111111" || 
      cnpj === "22222222222222" || 
      cnpj === "33333333333333" || 
      cnpj === "44444444444444" || 
      cnpj === "55555555555555" || 
      cnpj === "66666666666666" || 
      cnpj === "77777777777777" || 
      cnpj === "88888888888888" || 
      cnpj === "99999999999999")
      return false;
       
  let tamanho = cnpj.length - 2
  let numeros = cnpj.substring(0,tamanho);
  let digitos = cnpj.substring(tamanho);
  let soma = 0;
  let pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2)
      pos = 9;
  }
  let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado != digitos.charAt(0)) {
    return false;

  }
       
  tamanho = tamanho + 1;
  numeros = cnpj.substring(0,tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2)
          pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado != digitos.charAt(1))
        return false;
         
  return true;
}

export const showAlert = (title, description, type) => {
  return swal(title, description, type);
}

export const isMobile = (width, height) => {
  return width < 800 || height < 700;
}