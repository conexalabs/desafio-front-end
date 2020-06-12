import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragScrollModule } from 'ngx-drag-scroll';
import { NguCarouselModule } from '@ngu/carousel';


import { NgxMaskModule, IConfig } from 'ngx-mask';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapComponent } from './pages/map/map.component';
import { CarouselComponent } from './components/carousel/carousel.component'
import {MatSnackBarModule} from '@angular/material/snack-bar';


export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    HttpClientJsonpModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    MatCardModule,
    ScrollingModule,
    DragScrollModule,
    NguCarouselModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
