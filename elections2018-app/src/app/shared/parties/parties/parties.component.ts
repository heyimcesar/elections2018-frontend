import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-parties',
	templateUrl: './parties.component.html',
	styleUrls: ['./parties.component.css']
})
export class PartiesComponent implements OnInit {
	@Input("parties") parties: number;

	constructor() { }

	ngOnInit() { }
}
