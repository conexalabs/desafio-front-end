import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private url = 'https://www.receitaws.com.br/v1/cnpj/';

  constructor(private http: HttpClient) { }

  public searchCompany(cnpj: String) {
    return this.http.jsonp(this.url + cnpj, 'callback');
  }
}
