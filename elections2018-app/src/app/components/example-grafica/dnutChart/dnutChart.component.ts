import { Component, EventEmitter } from '@angular/core';
 
@Component({
    selector: 'dnutChart',
    templateUrl: 'dnutChart.component.html'
   })
   //More examples in https://valor-software.com/ng2-charts/
   export class dnutChart {
    // Doughnut
  public doughnutChartLabels:string[] = ['PAN', 'PRI', 'MORENA'];
  public doughnutChartData:number[] = [33, 33, 33];
  public doughnutChartType:string = 'doughnut';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}