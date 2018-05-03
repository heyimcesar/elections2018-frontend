import { Component, EventEmitter } from '@angular/core';
import { DataService } from '../../../services/data.service';
import {Observable} from 'rxjs/Rx';

 
@Component({
    selector: 'dnutChartMeade',
    templateUrl: 'dnutChart.component.html'
   })
   //More examples in https://valor-software.com/ng2-charts/
   export class dnutChartMeade {
    // Doughnut
  public doughnutChartLabels:string[] = ['NEGATIVOS','POSITIVOS', 'NEUTROS'];
  public doughnutChartData:number[] = [0, 0, 0];
  public doughnutChartType:string = 'doughnut';
  private dataLoaded :boolean;
  private data: any[];
 
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
  this.doughnutChartData[0] = data.politicians[1].politician_nts ;
  this.doughnutChartData[1] = data.politicians[1].politician_pts ;
  this.doughnutChartData[2] = data.politicians[1].politician_na ;
  this.dataLoaded = true;
  Observable.interval(15000).subscribe(x => {
    let clone = JSON.parse(JSON.stringify(this.doughnutChartData));
    this.dataService.getPolitcianTweets().subscribe(data => {
      this.data = data;
       clone[0] = data.politicians[1].politician_nts ;
       clone[1] = data.politicians[1].politician_nts ;
       clone[2] = data.politicians[1].politician_nts ;
       this.doughnutChartData = clone;
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
}