import { Component, OnInit } from '@angular/core';
import { ChartOptions } from 'src/app/components/type-charts';
import { RandomService } from '../../services/random.service';

@Component({
  selector: 'app-shares',
  templateUrl: './shares.component.html',
  styleUrls: ['./shares.component.css']
})
export class SharesComponent implements OnInit {

  mixedGraph!: ChartOptions
  constructor(private randomService: RandomService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
   this.mixedGraph = {
      series: [
        {
          name: "Website Blog",
          type: "column",
          data:  this.randomService.getRandomData(15)
        },
        {
          name: "Social Media",
          type: "line",
          data:  this.randomService.getRandomData(15)
        }
      ],
      chart: {
        height: 350,
        type: "line"
      },
      stroke: {
        width: [0, 4]
      },
      title: {
        text: "Traffic Sources"
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1]
      },
      labels: [
        "01 Jan 2001",
        "02 Jan 2001",
        "03 Jan 2001",
        "04 Jan 2001",
        "05 Jan 2001",
        "06 Jan 2001",
        "07 Jan 2001",
        "08 Jan 2001",
        "09 Jan 2001",
        "10 Jan 2001",
        "11 Jan 2001",
        "12 Jan 2001",
        "13 Jan 2001",
        "14 Jan 2001",
        "15 Jan 2001",
      ],
      xaxis: {
        type: "datetime"
      },
      yaxis: [
        {
          title: {
            text: "Website Blog"
          }
        },
        {
          opposite: true,
          title: {
            text: "Social Media"
          }
        }
      ]
    };

  }

}
