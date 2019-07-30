import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxMaskModule } from 'ngx-mask';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsCardComponent } from './components/details-card/details-card.component'

import { environment } from 'src/environments/environment.prod';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomeComponent,
    DetailsCardComponent
  ],
  imports: [
    BrowserModule,
    NgxMaskModule.forRoot(),
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    SlickCarouselModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: environment.apiMaps
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
