import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AMaterialModule} from '../shared-material/material.module';
import {RoutesModule} from './components/routes.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { DataService } from './services/data.service';


@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    BrowserAnimationsModule,
    AMaterialModule,
    HttpClientModule,
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
