import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CnpjService } from 'src/app/services/cnpj.service';
import { StateService } from 'src/app/services/state.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { DragScrollComponent } from 'ngx-drag-scroll';
import Utils from 'src/app/utils/cnpjValidator';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  companies: any[] = [];
  formCnpj: FormGroup;
  hasError: boolean = false;
  errorMessage: string;
  isMobile: boolean;
  @ViewChild('nav', {read: DragScrollComponent}) ds: DragScrollComponent;


  constructor(
    private router: Router,
    private formBuilder: FormBuilder, 
    private cnpjService: CnpjService,
    private stateService: StateService,
    private dataService: DataService,
    private _snackBar: MatSnackBar) {

      if(localStorage.getItem('cachedCompanies')){
        this.companies = JSON.parse(localStorage.getItem('cachedCompanies'));
      }
     
  }

  ngOnInit(): void {
    this.formCnpj = this.formBuilder.group({
      cnpj: ['', [Validators.required, Validators.pattern("^[0-9]{14}$")]]
    })

    this.stateService.isMobile.subscribe(res => {
      this.isMobile = res;
    })

  }

  searchCompany(){

    const value = this.formCnpj.get('cnpj').value;

    if(!Utils.cnpjIsValid(value)){
      this.openSnackBar('CNPJ inválido.', 'Fechar', 'error-snackbar')
      return;
    }

    if(this.companies.find(x => x.cnpj.replace(/[^\d]+/g,'') ===  this.formCnpj.get('cnpj').value)){
      this.openSnackBar('Esta empresa já foi adicionada!', 'Fechar', 'warn-snackbar')
      return;
    }

    this.cnpjService.getCnpj(this.formCnpj.get('cnpj').value).subscribe(res => {
      this.companies.push(res);
    },
    (err)=>{
      console.log(err);
    },
    ()=>{
      this.openSnackBar('Empresa adicionada!', 'Fechar', 'success-snackbar')
      localStorage.setItem('cachedCompanies', JSON.stringify(this.companies));

    })
  }

  showArrows(){
    if(this.isMobile && this.companies.length > 1){
      return true;
    }
    if(!this.isMobile && this.companies.length > 3){
      return true;
    }
    return false;
  }

  showMap(company: any){
    const _cnpj = company.cnpj.replace(/[^\d]+/g,'');
    this.dataService.setClickedCompany(company);
    this.router.navigate([`map/${_cnpj}`]);
  }

  deleteCompany(company){
    this.companies.forEach((element, index) => {
      if(element.cnpj == company.cnpj){
        this.companies.splice(index , 1);
        localStorage.setItem('cachedCompanies', JSON.stringify(this.companies));
        this.openSnackBar('Empresa removida.', 'Fechar', 'delete-snackbar')
      }
    });
  }

  openSnackBar(message: string, action: string, snackBarClass: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
      panelClass: [snackBarClass]
    });
  }


  

}
