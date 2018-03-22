import { Component, EventEmitter } from '@angular/core';
 
@Component({
    selector: 'dnutChart',
    templateUrl: 'dnutChart.component.html'
   })
   //More examples in https://valor-software.com/ng2-charts/
   export class dnutChart {
    // Doughnut
  public doughnutChartLabels:string[] = ['NEGATIVOS','POSITIVOS', 'NEUTROS'];
  public doughnutChartData:number[] = [Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)];
  public doughnutChartType:string = 'doughnut';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}