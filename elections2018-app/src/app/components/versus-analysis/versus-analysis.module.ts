import { AMaterialModule } from './../../../shared-material/material.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VersusAnalysisComponent } from './versus-analysis/versus-analysis.component';
import { Routes } from '@angular/router/src/config';
import {BarChartDemoComponent} from "./barChart/barChart.component";
import { ChartsModule } from 'ng2-charts';

const routes: Routes = [
	{ path: '', component: VersusAnalysisComponent }
];

@NgModule({
	imports: [
		CommonModule,
		AMaterialModule,
		ChartsModule,
	RouterModule.forChild(routes)
	],
	declarations: [
		VersusAnalysisComponent,
		BarChartDemoComponent
	],
	exports: [
		BarChartDemoComponent,
		RouterModule,
		AMaterialModule
	]
})
export class VersusAnalysisModule { }
