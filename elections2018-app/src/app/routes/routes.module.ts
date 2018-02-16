import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';

import { routes } from "./routes";

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forRoot(routes),
		SharedModule
	],
	declarations: [ ],
	exports: [
		RouterModule
	]
})
export class RoutesModule { }
