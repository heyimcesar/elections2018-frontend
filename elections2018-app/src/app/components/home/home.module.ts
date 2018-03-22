import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AMaterialModule } from '../../../shared-material/material.module';
import { Routes } from '@angular/router/src/config';


const routes: Routes = [
	{ path: '', component: HomeComponent }
];

@NgModule({
    declarations: [
        HomeComponent,
        
     
    ],
    exports: [
        HomeComponent,
        RouterModule,
        AMaterialModule
        
     
    ],
    imports: [
        CommonModule,
        AMaterialModule,
        RouterModule.forChild(routes)        
    ],
    providers: [ 
    ]
})

export class HomeModule { 

}