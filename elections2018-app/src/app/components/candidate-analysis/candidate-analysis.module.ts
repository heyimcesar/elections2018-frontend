import { CandidateAnalysisComponent } from './candidate-analysis.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AMaterialModule } from '../../../shared-material/material.module';
import { dnutChartAnaya} from './dnutChartAnaya/dnutChartAnaya.component';
import { dnutChartMeade} from './dnutChartMeade/dnutChart.component';
import { dnutChartAMLO} from './dnutChartAMLO/dnutChart.component';
import { dnutChartZavala} from './dnutChartZavala/dnutChart.component';
import { dnutChartBronco} from './dnutChartBronco/dnutChart.component';

import { ChartsModule } from 'ng2-charts';
import { Routes } from '@angular/router/src/config';


const routes: Routes = [
	{ path: '', component: CandidateAnalysisComponent }
];

@NgModule({
    declarations: [
        CandidateAnalysisComponent,
        dnutChartAnaya,
        dnutChartMeade,
        dnutChartAMLO,
        dnutChartZavala,
        dnutChartBronco
    ],
    exports: [
        CandidateAnalysisComponent,
        dnutChartAnaya,
        dnutChartMeade,
        dnutChartAMLO,
        dnutChartZavala,
        dnutChartBronco,
        RouterModule
    ],
    imports: [
        CommonModule,
        AMaterialModule,
        ChartsModule,
        RouterModule.forChild(routes)        
    ],
    providers: [ 
    ]
})

export class CandidateAnalysisModule { 

}