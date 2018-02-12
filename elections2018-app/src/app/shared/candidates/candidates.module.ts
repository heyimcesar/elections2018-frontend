import { CandidateModule } from './../candidate/candidate.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatesComponent } from './candidates/candidates.component';

@NgModule({
	imports: [
		CommonModule,
		CandidateModule
	],
	declarations: [CandidatesComponent],
	exports: [
		CandidatesComponent
	]
})

export class CandidatesModule { }
