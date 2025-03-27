import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class StockChartComponent implements OnInit {
  data: number[] = [1, 2, 4, 7, 9, 4, 5, 3, 1, 4, 5, 6, 2, 7, 8, 2, 1, 3, 7, 6, 2];
  day: string[] = ['Mon 27-03-2025', 'Tue 27-03-2025','Wed 27-03-2025','Thu 27-03-2025', 'Fri 27-03-2025', 'Sat 27-03-2025', 'Sun 27-03-2025',
    'Mon 27-03-2025', 'Tue 27-03-2025','Wed 27-03-2025','Thu 27-03-2025', 'Fri 27-03-2025', 'Sat 27-03-2025', 'Sun 27-03-2025',
    'Mon 27-03-2025', 'Tue 27-03-2025','Wed 27-03-2025','Thu 27-03-2025', 'Fri 27-03-2025', 'Sat 27-03-2025', 'Sun 27-03-2025'
  ];
  // searchData!: string;
  Highcharts: typeof Highcharts = Highcharts;
  
  
  chartOptions: Highcharts.Options = {
    title : {
      text : 'my Chart'
    },
    xAxis : {
      categories: this.dayArray(),
      title :{
        text : 'Chart data'
      } 
    },
    // yAxis :{
    //   title : {
    //     text :'Chart Values'
    //   }
    // },

    plotOptions: {
      series: {
          pointStart: '2020-01-01',
          pointInterval: 36e5, 
          relativeXValue: true,
          showCheckbox: true,
          // stacking: 'overlap',
          // step:'right',
          // dataSorting: undefined,
          // shadow: true,
          // stickyTracking: false,
          
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
      data: this.data ,
      // showInLegend: true,
      // showInNavigator: true,
  
      type: 'column'
      },
      // {
      //   name: 'Sec Demo',
      //   data: this.data ,
      //   type: 'column'
      // },
  ] 
  };

constructor() {}
ngOnInit(): void {}

search(searchData: number[]){
  // debugger
  const data =this.chartOptions.series?.filter((value )=> value)
  
  const index: any =this.data.find((value) => value.toString().includes(String(searchData)))
  if(index === searchData) {
    this.data = [...searchData]
  }
  this.data = [...this.data]
  console.log(index)
  console.log(searchData)
  // console.log(this.chartOptions.series)
  // console.log(data)
}
 

dataArray() {
  return this.data.map(m => m);
}
dayArray() {
  return this.day.map(m => m)
}
}