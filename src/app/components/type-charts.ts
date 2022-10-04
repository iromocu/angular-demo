import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexChart,
    ApexXAxis,
    ApexTitleSubtitle,
    ApexStroke,
    ApexDataLabels,
    ApexTooltip,
    ApexYAxis,
  } from "ng-apexcharts";
  
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  stroke?: ApexStroke,
  dataLabels?: ApexDataLabels,
  tooltip?: ApexTooltip,
  labels?: string[],
  yaxis?: ApexYAxis | ApexYAxis[];
};