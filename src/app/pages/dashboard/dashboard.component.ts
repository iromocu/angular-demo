import { Component, OnInit, ViewChild } from '@angular/core';
import { RandomService } from 'src/app/services/random.service';
import { ChartOptions } from '../../components/type-charts';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  barGraph!: ChartOptions;
  lineGraph!: ChartOptions;
  constructor(private randomService: RandomService) { 
    this.getDataBar()
    this.getDataLine()
  }

  getDataBar(){
    this.barGraph = {
      series: [
        {
          name: "My-series",
          data:  this.randomService.getRandomData(9)
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      title: {
        text: "Ejemplo de una gráfica de barras"
      },
      xaxis: {
        categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"],
      }
    };
  }

  getDataLine(){
    this.lineGraph= {
      series: [
        {
          name: "My-series",
          data:  this.randomService.getRandomData(9)
        }
      ],
      chart: {
        height: 350,
        type: "line"
      },
      title: {
        text: "Ejemplo de una gráfica de lineas"
      },
      xaxis: {
        categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
      },
      stroke: {
        curve:'smooth'
      }
    };
  }
}
