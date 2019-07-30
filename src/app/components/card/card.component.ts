import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() company: any;

  public details = '';
  
  ngOnInit() {
    this.details = JSON.stringify(this.company);
  }

  public gotoDetails(company: string) {
    this.router.navigate(['/detalhes', {obj: company}]);
  } 
}
