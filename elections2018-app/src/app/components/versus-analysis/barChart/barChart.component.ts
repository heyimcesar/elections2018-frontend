import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../../services/data.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'bar-chart-demo',
  templateUrl: './barChart.component.html'
})
export class BarChartDemoComponent implements OnInit, OnDestroy {
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = [ 'ANAYA', 'MEADE', 'AMLO', 'MARGARITA', 'JAIME (BRONCO)' ];
  public barChartType = 'bar';
  public barChartLegend = true;
  public dataLoaded: boolean;
	private data: any[ ];
	private tweetsListener: any;
	private interval: any;

  public barChartData: any[ ] = [
    {data: [65, 59, 80, 81, 56], label: 'Tuits Negativos'},
    {data: [28, 48, 40, 19, 86], label: 'Tuits Positivos'},
    {data: [28, 48, 40, 19, 86], label: 'Tuits Neutros'},

  ];

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
		const clone = this.barChartData;
		clone[0].data[0] = data.politicians[0].politician_nts ;
		clone[0].data[1] = data.politicians[1].politician_nts ;
		clone[0].data[2] = data.politicians[2].politician_nts ;
		clone[0].data[3] = data.politicians[3].politician_nts ;
		clone[0].data[4] = data.politicians[4].politician_nts ;

		clone[1].data[0] = data.politicians[0].politician_pts ;
		clone[1].data[1] = data.politicians[1].politician_pts ;
		clone[1].data[2] = data.politicians[2].politician_pts ;
		clone[1].data[3] = data.politicians[3].politician_pts ;
		clone[1].data[4] = data.politicians[4].politician_pts ;

		clone[2].data[0] = data.politicians[0].politician_na ;
		clone[2].data[1] = data.politicians[1].politician_na ;
		clone[2].data[2] = data.politicians[2].politician_na ;
		clone[2].data[3] = data.politicians[3].politician_na ;
		clone[2].data[4] = data.politicians[4].politician_na ;

		this.barChartData = clone;
		this.dataLoaded = true;
	}

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    const clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }
}
