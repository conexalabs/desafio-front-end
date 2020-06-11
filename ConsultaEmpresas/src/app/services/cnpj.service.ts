import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CnpjService {


  constructor(private http: HttpClient) { }

  getCnpj(cnpj: string){
    const baseUrl = 'https://www.receitaws.com.br/v1/cnpj';
    return this.http.jsonp(`${baseUrl}/${cnpj}`, 'callback');
  }
}
