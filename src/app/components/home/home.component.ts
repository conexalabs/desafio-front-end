import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  CNPJ: string = '';
  companies: Array<Object> = [];
  sizeCompanies = '';

  configSlider: object = {
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    speed: 400,
    autoplay: true,
    accessibility: false,
    responsive: [
      {
      breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.companies = this.getStorage();
  }

  validateCNPJ() {
    const cnpj = this.CNPJ.replace(/[^\d]+/g,'');
 
    if(cnpj == '') return false;
     
    if (cnpj.length != 14)
        return false;
 
    if (cnpj == "00000000000000" || 
        cnpj == "11111111111111" || 
        cnpj == "22222222222222" || 
        cnpj == "33333333333333" || 
        cnpj == "44444444444444" || 
        cnpj == "55555555555555" || 
        cnpj == "66666666666666" || 
        cnpj == "77777777777777" || 
        cnpj == "88888888888888" || 
        cnpj == "99999999999999")
        return false;
         
    let tamanho = cnpj.length - 2
    let numeros: any = cnpj.substring(0,tamanho);
    const digitos: any = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2){
        pos = 9;
      }
    }
    let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0)){
      return false;
    }

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2){
        pos = 9;
      }
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1)) {
      return false;
    }
    return true;
  }


  // Validate CNPJ and submit
  public triggerSubmit() {
    if (!this.validateCNPJ()) {
      Swal.fire('Atenção', 'Informe um CNPJ válido!', 'warning');
    } else {
      this.searchService.searchCompany(this.CNPJ.replace(/[^\d]+/g,''))
      .subscribe((res) => {
        this.saveOnStorage(res)
        this.companies.unshift(res);
        Swal.fire(':)', 'Busca realizada com sucesso!', 'success');
      },
      err => {
        Swal.fire('Oooops!', err.message, 'error');
      });
    }
    this.CNPJ = '';
  }


  // Save companie on localstorage
  private saveOnStorage(company) {
    let storage: any = this.getStorage();
    if (storage == null) {
      storage = [];
      storage.push(company);
    } else {
      storage.unshift(company)
    }
    localStorage.setItem('companies', JSON.stringify(storage));
  }

  // Rescue array of companies
  private getStorage() {
    const store = JSON.parse(localStorage.getItem('companies'));
    if (store == null) {
      return [];
    } else {
      return store;
    }
  }
}
