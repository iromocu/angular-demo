import { Component, OnInit } from '@angular/core';
import { ChartOptions } from 'src/app/components/type-charts';
import { RandomService } from 'src/app/services/random.service';

@Component({
  selector: 'app-balances',
  templateUrl: './balances.component.html',
  styleUrls: ['./balances.component.css']
})
export class BalancesComponent implements OnInit {

  barGraph!: ChartOptions;
  lineGraph!: ChartOptions;
  constructor(private randomService: RandomService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.lineGraph = {
      series: [
        {
          name: "series1",
          data:  this.randomService.getRandomData(7)
        },
        {
          name: "series2",
          data: this.randomService.getRandomData(7)
        }
      ],
      chart: {
        height: 350,
        type: "line"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z"
        ]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      },
      title: {
        text: 'Ejemplo por linea'
      }
    };
    this.barGraph = {
      series: [
        {
          name: "series1",
          data:  this.randomService.getRandomData(7)
        },
        {
          name: "series2",
          data: this.randomService.getRandomData(7)
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z"
        ]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      },
      title: {
        text: 'Ejemplo por barra'
      }
    };
  }

}


