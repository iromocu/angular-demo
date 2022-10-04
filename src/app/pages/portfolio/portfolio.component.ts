import { Component, OnInit } from '@angular/core';
import { ChartOptions } from 'src/app/components/type-charts';
import { RandomService } from 'src/app/services/random.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {


  lineGraph!: ChartOptions;
  lineGraph2!: ChartOptions;
  lineGraph3!: ChartOptions;
  constructor(private randomService: RandomService) { 
    this.getInfo()
  }

  ngOnInit(): void {
  }
  getInfo(){
    this.lineGraph= {
      series: [
        {
          name: "My-series",
          data:  this.randomService.getRandomData(8)
        }
      ],
      chart: {
        height: 350,
        type: "line"
      },
      title: {
        text: "Ejemplo de pestaña por año"
      },
      xaxis: {
        categories: ["2015", "2016", "2017", "2018", "2019", "2020","2021","2022"]
      },
      stroke: {
        curve:'smooth'
      }
    };
    this.lineGraph2= {
      series: [
        {
          name: "My-series",
          data:  this.randomService.getRandomData(12)
        }
      ],
      chart: {
        height: 350,
        type: "line"
      },
      title: {
        text: "Ejemplo de pestaña por mes"
      },
      xaxis: {
        categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep", "Oct", "Nov", "Dec"]
      },
      stroke: {
        curve:'smooth'
      }
    };
    this.lineGraph3= {
      series: [
        {
          name: "My-series",
          data:  this.randomService.getRandomData(7)
        }
      ],
      chart: {
        height: 350,
        type: "line"
      },
      title: {
        text: "Ejemplo de pestaña por semana"
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"]
      },
      stroke: {
        curve:'smooth'
      }
    };
  }

}
