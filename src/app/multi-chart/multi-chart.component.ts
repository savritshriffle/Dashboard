import { Component } from '@angular/core';
import { MatOptionSelectionChange } from '@angular/material/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-multi-chart',
  templateUrl: './multi-chart.component.html',
  styleUrls: ['./multi-chart.component.css']
})
export class MultiChartComponent {
  private data: number[] = [1, 2, 4, 7, 9, 4, 5,  1, 4, 5, 6, 2, 7, 8, 2, 1, 3, 7, 6, 2];
  private filterData = this.data;
  public searchData: string = '';
  public chartFilter: string = 'ascending';
  public Highcharts = Highcharts;  
  public chartOptions: any; 
  public dataOrder = [
    {
      name: 'ascending',
      value: 'ascending'
    },
    {
      name: 'descending',
      value: 'descending'
    }
  ]

  constructor() {  
    this.chartOptions = [
      {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Chart 1'
        },
        series: [{
          name: 'Data1',
          data: this.filterData
        }]
      },
      {
        chart: {
          type: 'line'
        },
        title: {
          text: 'Chart 2'
        },
        series: [{
          name: 'Data2',
          data: this.filterData
        }]
      },
      {
        chart: {
          type: 'pie'
        },
        title: {
          text: 'Chart 3'
        },
        series: [{
          name: 'Data3',
          data: this.filterData
        }]
      },
      {
        chart: {
          type: 'scatter'
        },
        title: {
          text: 'Chart 4'
        },
        series: [{
          name: 'Data4',
          data: this.filterData
        }]
      }
    ];
  }

  public search() {
    this.filterData = this.data.filter((value)=>value.toString().includes(this.searchData));
    for (let i = 0; i < this.chartOptions.length; i++) {
      this.chartOptions[i].series[0].data = this.filterData;
      Highcharts.charts[i]?.update(this.chartOptions[i]);
    }
  }

  public filter(event: MatOptionSelectionChange) {
    if(event.isUserInput) {
      this.chartFilter = event.source.value;
      if(this.chartFilter === 'ascending') {
        this.filterData = this.data.sort((a, b) => a - b);
      }
      else {
        this.filterData = this.data.sort((a, b) => b - a);
      }
      for(let i=0; i< this.chartOptions.length; i++){
        this.chartOptions[i].series[0].data = [...this.filterData];
        Highcharts.charts[i]?.update(this.chartOptions[i]);
      }
    }
  }
};