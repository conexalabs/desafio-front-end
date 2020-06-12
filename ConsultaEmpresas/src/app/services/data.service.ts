import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private clickedCompany: any;
  
  constructor() { }

  setClickedCompany(company){
    this.clickedCompany = company;
    localStorage.setItem('lastClickedCompany', JSON.stringify(company));
  }

  getClickedCompany(){
    return this.clickedCompany;
  }




}
