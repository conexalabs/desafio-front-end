/* eslint-disable @typescript-eslint/no-unused-vars */
/// <reference types="react-scripts" />

namespace Models {
  interface Empresa {
    cnpj: string;
    nome: string;
    logradouro: string;
    numero: string;
    bairro: string;
    municipio: string;
    location: Location;
  }

  interface Location {
    lat: number;
    lng: number
  }
}