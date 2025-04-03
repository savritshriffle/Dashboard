import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import  * as Highcharts  from 'highcharts'
@Component({
  selector: 'app-chart-api',
  templateUrl: './chart-api.component.html',
  styleUrls: ['./chart-api.component.css']
})
export class ChartApiComponent implements OnInit{
    apiData: any[] =[];
    public value: number[] =[];
    Highcharts : typeof Highcharts = Highcharts 
    constructor(private service: ServiceService) {}

    ngOnInit() {
      this.service.getChartApi().subscribe((data) =>{
          this.apiData = data
          // console.log(this.apiData)
          this.value = this.apiData.map((m) => m.price)
          console.log(this.value)
        })
        this.chartOptions.series = [
          {
            name : 'Chart 1',
            data : this.apiData.map(value => value.price),
            type : 'column'
          }
        ]
        Highcharts.charts[0]?.update(this.chartOptions)
        console.log(this.chartOptions.series)

    }

    chartOptions : Highcharts.Options = {
        title: {
          
          text: 'Chart Data From API'
        },
        xAxis: {
          title: {
            text: 'XAxis Data'
          }
        },
        yAxis: {
          title: {
            text: 'YAxis Data'
          }
        },
        series: []   
    }
}
