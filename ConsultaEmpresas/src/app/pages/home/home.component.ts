import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CnpjService } from 'src/app/services/cnpj.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  companies: any[] = [];
  formCnpj: FormGroup;
  hasError: boolean = false;

  constructor(private formBuilder: FormBuilder, private cnpjService: CnpjService) { }

  ngOnInit(): void {
    this.formCnpj = this.formBuilder.group({
      cnpj: ['', [Validators.required, ]]
    })
  }

  searchCompany(){
    this.cnpjService.getCnpj(this.formCnpj.get('cnpj').value).subscribe(res => {
      this.companies.push(res);
      console.log(this.companies);
    },
    (err)=>{
      this.hasError = true;
    },
    ()=>{})
  }

  showMap(company: any){
    
  }

}
