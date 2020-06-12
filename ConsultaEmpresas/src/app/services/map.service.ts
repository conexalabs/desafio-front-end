import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) { }

  getLatLngCoordinates(address: string){
    return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBn4OMQCCVidBKzDt5IB4PHGoJ8mVfNIt8`);
  }

}
