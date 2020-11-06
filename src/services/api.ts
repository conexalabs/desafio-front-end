import axios from 'axios';

export const receitaWsApi = axios.create({
  baseURL:
    'https://cors-anywhere.herokuapp.com/https://www.receitaws.com.br/v1/',
});

export const googleGeocodeApi = axios.create({
  baseURL:
    'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBD8seg0kqV2xcg-GfTobUr0i-v-kgA5Qc',
});
