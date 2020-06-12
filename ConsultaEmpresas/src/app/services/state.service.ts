import { Injectable, HostListener } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { fromEvent, Observable, Subscription } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StateService {

  isMobile = new BehaviorSubject(window.innerWidth <= 768 ? true : false);
  screenWidth = new BehaviorSubject(window.innerWidth);

  resizeObservable$: Observable<Event> = fromEvent(window, 'resize');
  resizeSubscription$: Subscription

  constructor(){
    this.resizeObservable$.subscribe(res=>{
      this.onResize();
    })
  }

  onResize() {
    if(window.innerWidth <= 768){
      this.isMobile.next(true);
    }
    else{
      this.isMobile.next(false);
    }

    window.location.reload();

  }


}
