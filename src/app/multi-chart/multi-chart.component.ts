import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-multi-chart',
  templateUrl: './multi-chart.component.html',
  styleUrls: ['./multi-chart.component.css']
})
export class MultiChartComponent {
  data: number[] = [1, 2, 4, 7, 9, 4, 5,  1, 4, 5, 6, 2, 7, 8, 2, 1, 3, 7, 6, 2];
  filterData:any  = [...this.data];
  searchData: string = '';
  chartFilter: string = '';
  Highcharts = Highcharts;  
  chartOptions: any[] = []; 
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

  search() {
    if (!this.searchData) {
      this.filterData = [...this.data];
    } 
    else {
      this.filterData = this.data.filter((value) =>
        value.toLocaleString().toString().includes(this.searchData)
      );
    }
    for (let i = 0; i < this.chartOptions.length; i++) {
      this.chartOptions[i].series[0].data = [...this.filterData];
      Highcharts.charts[i]?.update(this.chartOptions[i]);
     }
   }

   filter() {
    if(this.chartFilter === 'ascending') {
      this.filterData = [...this.data].sort((a, b) => a- b)
      for(let i=0; i< this.chartOptions.length; i++){
        this.chartOptions[i].series[0].data = [...this.filterData];
        Highcharts.charts[i]?.update(this.chartOptions[i])
      }
    }
    else if(this.chartFilter === 'descending'){
      this.filterData = [...this.data].sort((a, b) => b - a)
      for(let i=0; i< this.chartOptions.length; i++){
      this.chartOptions[i].series[0].data = [...this.filterData];
      Highcharts.charts[i]?.update(this.chartOptions[i]);

      }
    }
  }
}

