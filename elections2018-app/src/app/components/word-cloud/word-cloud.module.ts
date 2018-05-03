import { AMaterialModule } from './../../../shared-material/material.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordCloudComponent } from './word-cloud.component';
import { Routes } from '@angular/router/src/config';

const routes: Routes = [
	{ path: '', component: WordCloudComponent }
];

@NgModule({
	imports: [
		CommonModule,
		AMaterialModule,
		RouterModule.forChild(routes),
	],
	declarations: [
		WordCloudComponent,
	],
	exports: [
		RouterModule,
		AMaterialModule,
		]
})
export class WordCloudModule { }
