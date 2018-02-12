import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndividualAnalysisComponent } from './individual-analysis/individual-analysis.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
	{ path: '', component: IndividualAnalysisComponent }
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		SharedModule
	],
	declarations: [IndividualAnalysisComponent],
	exports: [
		RouterModule
	]
})

export class IndividualAnalysisModule { }
