import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ConfigService {
    
    private readonly wsURL = 'https://cors-anywhere.herokuapp.com/https://receitaws.com.br/v1';
    private readonly wsDefaultToken: string = 'm3u-t0k3n-d3f4ult'
    
    constructor(private http: HttpClient) { }
    
    public get<T>(endpoint: string, token?: string, params?: any): Observable<T> {
        const tkn: string = token ? token : this.wsDefaultToken
        return this.http.get<T>(
            `${this.wsURL}/${endpoint}`,
            {
                headers: new HttpHeaders()
                    .set('Content-Type', 'application/json')
                    .set('Authorization', tkn)
                    .set('Access-Control-Allow-Origin', '*')
                    .set('Access-Control-Allow-Headers', '*'),
                params: params
            }
        )
    }
}