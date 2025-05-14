import { Component } from '@angular/core';
import { MatOptionSelectionChange } from '@angular/material/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class StockChartComponent {
  private data: number[] = [1, 2, 4, 7, 9, 4, 5,  1, 4, 5, 6, 2, 7, 8, 2, 1, 3, 7, 6, 2];
  private day: string[] = ['Mon 27-03-2025', 'Tue 27-03-2025','Wed 27-03-2025','Thu 27-03-2025', 'Fri 27-03-2025', 'Sat 27-03-2025', 'Sun 27-03-2025',
    'Mon 27-03-2025', 'Tue 27-03-2025','Wed 27-03-2025','Thu 27-03-2025', 'Fri 27-03-2025', 'Sat 27-03-2025', 'Sun 27-03-2025',
    'Mon 27-03-2025', 'Tue 27-03-2025','Wed 27-03-2025','Thu 27-03-2025', 'Fri 27-03-2025', 'Sat 27-03-2025', 'Sun 27-03-2025'
  ];
  public chartType: string = 'column';
  public searchData: string = '';
  public chartFilter: string = 'ascending';
  public filterData = this.data;
  public dataOrder = [
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
      name: 'column',
      value: 'column'
    },
    {
      name: 'line',
      value: 'line'
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
  public Highcharts: typeof Highcharts = Highcharts;
  public chartOptions: Highcharts.Options = {  
    title: {
      text: 'my Chart'
    },
    xAxis: {
      categories: this.day,
      title: {
        text: 'Chart data'
      } 
    },
    yAxis: {
      title: {
        text: 'Chart Values'
      }
    },
    tooltip: {
      style: {
        fontSize: 16,
      }
    },
    series: [
      {
        name: 'First Demo',
        data: this.filterData,
        type: 'column',
        visible: true
      },
      {
        name: 'Sec Demo',
        data: this.filterData,
        type: 'line',
        visible: false
      },
      {
        name: 'Third Demo',
        data: this.filterData,
        type: 'spline',
        visible: false
      },
      {
        name: 'Four Demo',
        data: this.filterData,
        type: 'area',
        visible: false
      },
      {
        name: 'Five Demo',
        data: this.filterData,
        type: 'scatter',
        visible: false
      },
    ] 
  };

  public search() {
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
 
  public changeChartType(event: MatOptionSelectionChange) {
    if(event.isUserInput) {
      this.chartType = event.source.value;
      if (this.chartOptions.series) {
        this.chartOptions.series?.forEach((data, i) => {
          if (data.type == this.chartType) {
            data.type = this.chartType; 
            data.visible = true;
          }
          else{
            data.visible = false;
          }
        })
      }
    }
    Highcharts.charts[0]?.update(this.chartOptions);
  }
    
  public filterChart(event: MatOptionSelectionChange) {
    if(event.isUserInput) {
      this.chartFilter = event.source.value;
      if(this.chartFilter === 'ascending') {
        this.filterData = this.data.sort((a, b) => a - b);
      }
      else{
        this.filterData = this.data.sort((a, b) => b - a);
      }
      this.chartOptions.series?.forEach((data, i) => {
        (this.chartOptions.series as any)[i].data = [...this.filterData];
        Highcharts.charts[0]?.update(this.chartOptions);
      })
    }
  }
}