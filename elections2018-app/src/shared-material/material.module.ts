import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
    imports: [
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatGridListModule
    ],
    exports: [
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatGridListModule
    ]
})
export class AMaterialModule { }