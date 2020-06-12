import { Component, OnInit, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @ViewChild('carousel') widgetsContent: ElementRef;

  @Input() companies: any[] = [];
  @Output() showMap = new EventEmitter;
  @Output() deleteCompany = new EventEmitter;

  isMobile: boolean;
  resolutionWidth: number;

  slideConfig = {
    "slidesToShow": this.manageSlidesToShow(), 
    "slidesToScroll": 1,
    "arrows": true,
    "infinite": false,
  };

  constructor(private stateService: StateService) { 
    this.stateService.isMobile.subscribe(res => {
      this.isMobile = res;
    })

      this.stateService.screenWidth.subscribe(res =>{
        this.resolutionWidth = res;
      })

  }

  ngOnInit(): void {}

  manageSlidesToShow(){

    if(window.innerWidth <= 768){
      return 1;
    }

    if(window.innerWidth < 1441){
      return 2;
    }

    if(window.innerWidth > 1921){
      return 4
    }


    return 3;

  }
  
  slickInit(e) {
    console.log('slick initialized');
  }
  
  breakpoint(e) {
    console.log('breakpoint');
  }
  
  afterChange(e) {
    console.log('afterChange');
  }
  
  beforeChange(e) {
    console.log('beforeChange');
  }
  
  onShowMap(value){
    this.showMap.emit(value);
  }
  onDeleteCompany(value){
    this.deleteCompany.emit(value);
  }

}
