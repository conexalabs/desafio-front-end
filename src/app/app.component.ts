import { Component } from '@angular/core';
import { faBuilding, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';

import { ConfigService } from './config/config.service';
import { Empresa } from './model/empresa';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    cnpj: string = ""
    loading: boolean = false
    isEmpty: boolean = true
    faBuilding = faBuilding
    faChevronRigth = faChevronRight
    faChevronLeft = faChevronLeft
    mask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]
    ArrayEmpresas: Empresa[] = []

    constructor(private http: HttpClient, private _snackBar: MatSnackBar, public config: ConfigService, private router: Router) {
        if (localStorage.getItem("empresas") != null) {
            let array = JSON.parse(localStorage.getItem("empresas"))
            this.ArrayEmpresas = array
            this.isEmpty = false
        }
    }

    pesquisar() {
        let cnpj = this.cnpj.replace(/\D/g, '')
        if (this.ValidateCNPJ(cnpj)) {
            this.loading = true
            this.config.get(`cnpj/${cnpj}`).subscribe(
                (response: Empresa) => {
                    this.ArrayEmpresas.push(response)
                    localStorage.removeItem("empresas")
                    localStorage.setItem("empresas", JSON.stringify(this.ArrayEmpresas))
                    this.loading = false
                    this.isEmpty = false
                    this._snackBar.open('Empresa localizada com sucesso!', 'Fechar', {duration: 5000,});
                }, err => {
                    this.loading = false
                    this.isEmpty = false
                    this._snackBar.open('Erro inesperado. Por favor, tente novamente!', 'Fechar', {duration: 5000,});
                }
            )
        } else {
            this._snackBar.open('CNPJ inválido!!', 'Fechar', {duration: 5000,});
        }
    }

    abrirEmpresa(empresa: Empresa){
        window.location.href = `https://www.google.com/maps?f=l&q=${empresa.nome.replace(' ', '+')}&near`;
    }

    ValidateCNPJ(_cnpj) {
        let cnpj = _cnpj
        if (!cnpj || cnpj === '' || cnpj.length < 14) return false;
        if (cnpj === '00000000000000'
            || cnpj === '11111111111111'
            || cnpj === '22222222222222'
            || cnpj === '33333333333333'
            || cnpj === '44444444444444'
            || cnpj === '55555555555555'
            || cnpj === '66666666666666'
            || cnpj === '77777777777777'
            || cnpj === '88888888888888'
            || cnpj === '99999999999999') return false; 0

        const valida = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        let dig1 = 0;
        let dig2 = 0;

        const exp = /\.|-|\//g;
        cnpj = cnpj.toString().replace(exp, '');
        const digito = parseInt(cnpj.charAt(12) + cnpj.charAt(13), 10);

        for (let i = 0; i < valida.length; i += 1) {
            dig1 += (i > 0 ? (cnpj.charAt(i - 1) * valida[i]) : 0);
            dig2 += cnpj.charAt(i) * valida[i];
        }
        dig1 = (((dig1 % 11) < 2) ? 0 : (11 - (dig1 % 11)));
        dig2 = (((dig2 % 11) < 2) ? 0 : (11 - (dig2 % 11)));

        if (((dig1 * 10) + dig2) !== digito) return false;
        return true;
    }
}
