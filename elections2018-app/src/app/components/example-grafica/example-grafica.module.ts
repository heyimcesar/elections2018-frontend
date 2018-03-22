import { ExampleGraficaComponent } from './example-grafica.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AMaterialModule } from '../../../shared-material/material.module';
import { dnutChart} from './dnutChart/dnutChart.component';
import { ChartsModule } from 'ng2-charts';
import { Routes } from '@angular/router/src/config';


const routes: Routes = [
	{ path: '', component: ExampleGraficaComponent }
];

@NgModule({
    declarations: [
        ExampleGraficaComponent,
        dnutChart,
        
     
    ],
    exports: [
        ExampleGraficaComponent,
        dnutChart,
        RouterModule
        
     
    ],
    imports: [
        CommonModule,
        AMaterialModule,
        ChartsModule,
        RouterModule.forChild(routes)        
    ],
    providers: [ 
    ]
})

export class ExampleGraficaModule { 

}