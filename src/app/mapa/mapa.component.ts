import { Component, OnInit } from '@angular/core';
import tt from '@tomtom-international/web-sdk-maps';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const map = tt.map({
      key: 'avOTmbXhNNcVCeMumXmaKYt2I5mLlVK1',
      container: 'map',
      style: 'tomtom://vector/1/basic-main'
    });

    map.addControl(new tt.NavigationControl());

  }

}
