import { Component, OnInit } from '@angular/core';
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
  chartType: string = '';
  searchData: string = '';
  chartFilter: string = '';
  filterData:any  = [...this.data];
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

  //   plotOptions: {
  //     series: {
  //         // pointStart: '2020-01-01',
  //         // pointInterval: 36e5, 
  //         relativeXValue: true,
  //         showCheckbox: true,
  //         stacking: 'overlap',
  //         step:'right',
  //         dataSorting: undefined,
  //         shadow: true,
  //         stickyTracking: false,
          
  //     }
  // },
  // accessibility: {
  //   enabled: false
  // },
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
      this.filterData = [...this.data];
    } 
    else {
      this.filterData = this.data.filter((value) =>
        value.toLocaleString().toString().includes(this.searchData));   
    }
    for (let i = 0; i < (this.chartOptions.series as any).length; i++) {
    (this.chartOptions.series as any)[i].data = [...this.filterData];
    Highcharts.charts[0]?.update(this.chartOptions);
    }
  }

    
  typeChart() {
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
    
  filter() {
    if(this.chartFilter === 'ascending') {
      this.filterData = [...this.data].sort((a , b) => a - b);
      for (let i = 0; i < (this.chartOptions.series as any).length; i++) {
        (this.chartOptions.series as any)[i].data = [...this.filterData];
        Highcharts.charts[0]?.update(this.chartOptions);
      }
    }
    else if(this.chartFilter === 'descending'){
      this.filterData = [...this.data].sort((a , b) => b - a);
      for (let i = 0; i < (this.chartOptions.series as any).length; i++) {
        (this.chartOptions.series as any)[i].data = [...this.filterData];
        Highcharts.charts[0]?.update(this.chartOptions);
      }    
    }
  }
  
   
  
}