import { Component, OnInit, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @ViewChild('carousel') widgetsContent: ElementRef;

  @Input() companies: any[] = [];
  @Output() showMap = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  right(){
    this.widgetsContent.nativeElement.scrollLeft += 325;

  }

  left(){
    this.widgetsContent.nativeElement.scrollLeft -= 325;
  }
  
  onShowMap(company){
    this.showMap.emit(company);
  }

}
