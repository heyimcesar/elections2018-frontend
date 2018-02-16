import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-individual-analysis',
	templateUrl: './individual-analysis.component.html',
	styleUrls: ['./individual-analysis.component.css']
})

export class IndividualAnalysisComponent implements OnInit {
	private candidates: Array<any>;
	private candidatesView: boolean;
	private parties: Array<any>;

	constructor() {
		this.candidates = [ ];
		this.parties = [ ];
		this.candidatesView = true;

		for (let i = 0; i < 5; i++) {
			this.candidates.push(i);
		}

		for (let i = 0; i < 3; i++) {
			this.parties.push(i);
		}
	}

	ngOnInit() { }

	changeView() {
		this.candidatesView = !this.candidatesView;
	}
}
