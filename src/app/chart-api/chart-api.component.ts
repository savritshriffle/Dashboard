import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ServiceService } from '../service.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart-api',
  templateUrl: './chart-api.component.html',
  styleUrls: ['./chart-api.component.css']
})
export class ChartApiComponent implements OnInit {
  apiData: any[] = [];
  public value: any[] = [];
  Highcharts: typeof Highcharts = Highcharts; 
  chart!: Highcharts.Chart; 

  constructor(private service: ServiceService) {}
  chartOptions: Highcharts.Options ={}
  ngOnInit(): void {
    this.service.getChartApi().subscribe((data) => {
      this.apiData = data;
      this.value = [this.apiData.map((m) => m.price)] 
      
    });
    console.log(this.value); 
    
}
this. chartOptions = {
  title: {
    text: 'Chart Data From API',
  },
  xAxis: {
    title: {
      text: 'XAxis Data',
    },
  },
  yAxis: {
    title: {
      text: 'YAxis Data',
    },
  },
  series: [
    {
      name: 'Chart 1',
      data: [], // Initially empty, will be updated dynamically
      type: 'column', // Setting chart type as 'column'
    }
  ],
};
}