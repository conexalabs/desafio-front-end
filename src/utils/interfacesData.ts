export interface ICoordinates {
  lat: number;
  lng: number;
}

export interface ICompanyObject {
  cnpj: string;
  nome: string;
  cep: string;
  bairro: string;
  logradouro: string;
  municipio: string;
  numero: string;
  uf: string;
  coordinates: ICoordinates;
}
