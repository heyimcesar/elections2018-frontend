import { Component } from '@angular/core';
import { DataService } from '../../../services/data.service';
import {Observable} from 'rxjs/Rx';
 
@Component({
  selector: 'bar-chart-demo',
  templateUrl: './barChart.component.html'
})
export class BarChartDemoComponent {
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = [ 'ANAYA', 'MEADE', 'AMLO', 'MARGARITA','JAIME (BRONCO)'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  private dataLoaded :boolean;
  private data: any[];
 
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56], label: 'Tuits Negativos'},
    {data: [28, 48, 40, 19, 86], label: 'Tuits Positivos'},
    {data: [28, 48, 40, 19, 86], label: 'Tuits Neutros'},

  ];
 
  constructor (private dataService: DataService) {
    this.dataLoaded = false;
    this.dataService.getPolitcianTweets().subscribe(data => {
            this.data = data;
            console.log(this.data);
            this.fillData(this.data);
            
    })
}
ngOnInit(){

}

fillData(data : any){
  this.barChartData[0].data[0] = data.politicians[0].politician_nts ;
  this.barChartData[0].data[1] = data.politicians[1].politician_nts ;
  this.barChartData[0].data[2] = data.politicians[2].politician_nts ;
  this.barChartData[0].data[3] = data.politicians[3].politician_nts ;
  this.barChartData[0].data[4] = data.politicians[4].politician_nts ;

  this.barChartData[1].data[0] = data.politicians[0].politician_pts ;
  this.barChartData[1].data[1] = data.politicians[1].politician_pts ;
  this.barChartData[1].data[2] = data.politicians[2].politician_pts ;
  this.barChartData[1].data[3] = data.politicians[3].politician_pts ;
  this.barChartData[1].data[4] = data.politicians[4].politician_pts ;

  this.barChartData[2].data[0] = data.politicians[0].politician_na ;
  this.barChartData[2].data[1] = data.politicians[1].politician_na ;
  this.barChartData[2].data[2] = data.politicians[2].politician_na ;
  this.barChartData[2].data[3] = data.politicians[3].politician_na ;
  this.barChartData[2].data[4] = data.politicians[4].politician_na ;

  this.dataLoaded = true;

  Observable.interval(15000).subscribe(x => {
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    this.dataService.getPolitcianTweets().subscribe(data => {
      this.data = data;
      let clone = JSON.parse(JSON.stringify(this.barChartData));
       clone[0].data[0] = data.politicians[0].politician_nts ;
       clone[0].data[1] = data.politicians[1].politician_nts ;
       clone[0].data[2] = data.politicians[2].politician_nts ;
       clone[0].data[3] = data.politicians[3].politician_nts ;
       clone[0].data[4] = data.politicians[4].politician_nts ;

       console.log(clone[0].data[3]);
       clone[1].data[0] = data.politicians[0].politician_pts ;
       clone[1].data[1] = data.politicians[1].politician_pts ;
       clone[1].data[2] = data.politicians[2].politician_pts ;
       clone[1].data[3] = data.politicians[3].politician_pts ;
       clone[1].data[4] = data.politicians[4].politician_pts ;

       console.log(clone[1].data[3]);
       clone[2].data[0] = data.politicians[0].politician_na ;
       clone[2].data[1] = data.politicians[1].politician_na ;
       clone[2].data[2] = data.politicians[2].politician_na ;
       clone[2].data[3] = data.politicians[3].politician_na ;
       clone[2].data[4] = data.politicians[4].politician_na ;

       console.log(clone[2].data[3]);
       this.barChartData = clone;
})
  
  });
}



  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
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