import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class StockChartComponent {
  data: number[] = [1, 2, 4, 7, 9, 4, 5,  1, 4, 5, 6, 2, 7, 8, 2, 1, 3, 7, 6, 2];
  day: string[] = ['Mon 27-03-2025', 'Tue 27-03-2025','Wed 27-03-2025','Thu 27-03-2025', 'Fri 27-03-2025', 'Sat 27-03-2025', 'Sun 27-03-2025',
    'Mon 27-03-2025', 'Tue 27-03-2025','Wed 27-03-2025','Thu 27-03-2025', 'Fri 27-03-2025', 'Sat 27-03-2025', 'Sun 27-03-2025',
    'Mon 27-03-2025', 'Tue 27-03-2025','Wed 27-03-2025','Thu 27-03-2025', 'Fri 27-03-2025', 'Sat 27-03-2025', 'Sun 27-03-2025'
  ];
  chartType: string = 'column';
  searchData: string = '';
  chartFilter: string = 'ascending';
  filterData = this.data;
  dataOrder = [
    {
      name: 'ascending',
      value: 'ascending',
    },
    {
      name: 'descending',
      value: 'descending',
    }
  ]
  typeChart = [
    {
      name: 'line',
      value: 'line'
    },
    {
      name: 'column',
      value: 'column'
    },
    {
      name: 'spline',
      value: 'spline'
    },
    {
      name: 'area',
      value: 'area'
    },
    {
      name: 'scatter',
      value: 'scatter'
    },
    
  ]
  Highcharts: typeof Highcharts = Highcharts;
  
  chartOptions: Highcharts.Options = {  
    title : {
      text : 'my Chart'
    },
    xAxis : {
      categories: this.day,
      title :{
        text : 'Chart data'
      } 
    },
    yAxis :{
      title : {
        text :'Chart Values'
      }
    },
    tooltip:{
      style : {
        fontSize:16,
      }
    },
    series: [
      {
        name: 'First Demo',
        data:  this.filterData ,
        type: 'column',
        visible:true
      },
      {
        name: 'Sec Demo',
        data:  this.filterData ,
        type: 'line',
        visible:false
      },
      {
        name: 'Third Demo',
        data:  this.filterData ,
        type: 'spline',
        visible:false
      },
      {
        name: 'Four Demo',
        data:  this.filterData ,
        type: 'area',
        visible:false
      },
      {
        name: 'Five Demo',
        data:  this.filterData ,
        type: 'scatter',
        visible:false
      },
    ] 
  };

  constructor() {}

  search() {
    if (!this.searchData) {
      this.filterData = this.data;
    } 
    else {
      this.filterData = this.data.filter((value) =>
        value.toString().includes(this.searchData));   
    }
    this.chartOptions.series?.forEach((data, i ) => {
      (this.chartOptions.series as any)[i].data = this.filterData;
      Highcharts.charts[0]?.update(this.chartOptions);
    })
  }

    
  changeChartType() {
    if (this.chartOptions.series) {
      for (let i = 0; i < this.chartOptions.series.length; i++) {
        if (this.chartOptions.series[i].type == this.chartType) {
          this.chartOptions.series[i].type = this.chartType; 
          this.chartOptions.series[i].visible = true;
        }
        else{
          this.chartOptions.series[i].visible = false;
        }
      }
    }
      Highcharts.charts[0]?.update(this.chartOptions);
  }
    
  filterChart() {
    if(this.chartFilter === 'ascending') {
      this.filterData = this.data.sort((a , b) => a - b);
    }
    else{
        this.filterData = this.data.sort((a , b) => b - a);
    }
    this.chartOptions.series?.forEach((data, i ) => {
      (this.chartOptions.series as any)[i].data = this.filterData;
      Highcharts.charts[0]?.update(this.chartOptions);
    })
  }
}