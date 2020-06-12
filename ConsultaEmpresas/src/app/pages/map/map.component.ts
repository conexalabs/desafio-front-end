import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  company: any;
  marker: any = {};
  center: any;

  constructor(
    private mapService: MapService,
    private dataService: DataService, 
    private router: Router) {

    if(this.dataService.getClickedCompany()){
      this.company = this.dataService.getClickedCompany();
    }
    else{
      if(localStorage.getItem('lastClickedCompany')){
        this.company = JSON.parse(localStorage.getItem('lastClickedCompany'));
      }
      else{
        this.router.navigate(['']);
      }
    }
   }

  ngOnInit(): void {

   this.getCoordinates();
    
  }

  getCoordinates(){
    const address = (this.company.logradouro + " " + this.company.bairro).split(' ').join('+');

    this.mapService.getLatLngCoordinates(address).subscribe((res : any) => {
      this.company.coordinates = res.results[0].geometry.location;

      this.center = {
        lat: this.company.coordinates.lat,
        lng: this.company.coordinates.lng
      }
      
    },
    (err) => {},
    () => {this.addMarker()})

  }

  addMarker() {
    this.marker = {
      position: {
        lat: this.center.lat,
        lng: this.center.lng
      },
      label: {
        color: 'red',
        text: 'Marker label'
      },
      title: 'Marker title', 
      options: { animation: google.maps.Animation.BOUNCE },
    }
  }


}



