import { PartiesModule } from './parties/parties.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PartyModule } from './party/party.module';
import { CandidateModule } from './candidate/candidate.module';
import { CandidatesModule } from './candidates/candidates.module';

@NgModule({
	imports: [
		CandidateModule,
		CandidatesModule,
		CommonModule,
		PartiesModule,
		PartyModule
	],
	declarations: [ ],
	exports: [
		CandidateModule,
		CandidatesModule,
		PartiesModule,
		PartyModule,
		RouterModule
	]
})

export class SharedModule { }
