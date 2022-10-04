import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts'
import { ChartsComponent } from './charts/charts.component';



@NgModule({
  declarations: [
    ChartsComponent
  ],
  imports: [
    CommonModule,
    NgApexchartsModule
  ],
  exports: [
    ChartsComponent
  ]
})
export class ComponentsModule { }
