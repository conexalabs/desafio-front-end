import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.scss']
})
export class DetailsCardComponent implements OnInit {

  public details: any = '';
  private geocoder: any;
  private google: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        if (JSON.parse(params.get('obj'))) {
          this.details = JSON.parse(params.get('obj'));
          if (!this.details) {
            this.kickUser();
          } else {
            const geocoder = new this.google.maps.Geocoder();
            geocoder.geocode({ 'address': this.details.logradouro }, function (results, status) {

              // Infelizmente esgotei a cota de uso diario do mapas, nao avancando nessa parte
              if (status) {
                console.log(results);
              } else {
                alert('Geocode was not successful for the following reason: ' + status);
              }
            });
          }
        } else {
          this.kickUser();
        }
      }
    );
  }

  public backToRoot() {
    this.router.navigate(['/']);
  }

  private kickUser() {
    Swal.fire('Ooops!', 'Algo deu errado tente novamente!', 'warning');
    this.router.navigate(['/']);
  }
}
