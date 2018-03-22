import { ServicesModule } from './services/services.module';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AMaterialModule} from '../shared-material/material.module';
import {RoutesModule} from './components/routes.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    BrowserAnimationsModule,
    AMaterialModule,
    HttpModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
