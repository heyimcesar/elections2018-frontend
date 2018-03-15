import { PartyModule } from './../party/party.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartiesComponent } from './parties/parties.component';

@NgModule({
  imports: [
		CommonModule,
		PartyModule
  ],
	declarations: [PartiesComponent],
	exports: [
		PartiesComponent
	]
})
export class PartiesModule { }
