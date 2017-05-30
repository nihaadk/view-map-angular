import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { MarkerListComponent } from './marker-list/marker-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    MarkerListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBbu_DyUeqggQ8dVrvtFslQ0h8mHUtviP4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
