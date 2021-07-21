import axios from 'axios';

// API de Geolocalização do Google

const localizationApi = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/geocode/',
});

export default localizationApi;
