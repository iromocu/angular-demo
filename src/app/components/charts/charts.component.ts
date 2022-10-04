import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {ChartComponent, ChartType } from 'ng-apexcharts'
import { ChartOptions } from 'src/app/components/type-charts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  @Input() chartConf!: ChartOptions;

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;
  
  constructor() { 
    
  }

  ngOnInit(): void {
    this.chartOptions = this.chartConf
  }

}
