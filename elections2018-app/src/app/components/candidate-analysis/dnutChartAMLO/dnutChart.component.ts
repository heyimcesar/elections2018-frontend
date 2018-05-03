import { Component, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'dnutChartAMLO',
  templateUrl: 'dnutChart.component.html'
})
// More examples in https://valor-software.com/ng2-charts/
export class dnutChartAMLO implements OnInit, OnDestroy {
  // Doughnut
  public doughnutChartLabels = ['NEGATIVOS', 'POSITIVOS', 'NEUTROS'];
  public doughnutChartData = [0, 0, 0];
  public doughnutChartType = 'doughnut';
  public dataLoaded: boolean;
	private data: any[];
	private tweetsListener: any;
	private interval: any;

  constructor (private dataService: DataService) {
		this.dataLoaded = false;
		this.getData();
	}

	ngOnInit() {
		this.interval = setInterval(() => {
			this.getData();
		}, 60000);
	}

	ngOnDestroy() {
		clearInterval(this.interval);
		if (this.tweetsListener) {
			this.tweetsListener.unsubscribe();
		}
	}

	getData() {
		this.tweetsListener = this.dataService.getPolitcianTweets().subscribe(data => {
			this.tweetsListener.unsubscribe();
			this.data = data;
			this.fillData(data);
		});
	}

	fillData(data: any) {
		const clone = this.doughnutChartData;
		clone[0] = data.politicians[2].politician_nts ;
		clone[1] = data.politicians[2].politician_pts ;
		clone[2] = data.politicians[2].politician_na ;
		this.doughnutChartData = clone;
		this.dataLoaded = true;
	}

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
