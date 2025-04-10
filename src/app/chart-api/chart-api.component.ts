import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ServiceService } from '../service.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart-api',
  templateUrl: './chart-api.component.html',
  styleUrls: ['./chart-api.component.css']
})
export class ChartApiComponent implements OnInit {
  public apiData: any[] = [];
  public value: any[] = [];
  public Highcharts: typeof Highcharts = Highcharts; 
  // chart!: Highcharts.Chart; 

  constructor(private service: ServiceService) {}
  ngOnInit(): void {
    this.service.getChartApi().subscribe((data) => {
      this.apiData = data.products
      console.log(this.apiData)
     this.value = this.apiData.map((value) => value.price)
    //  console.log(this.value);

     
    });
     this.getData()

    //  console.log(this.value);
    // (this.chartOptions.series as any)[0].data = [1,2,3];
  
    
  }


  getData(){
     this.service.getChartApi().subscribe((data) =>{
     this.apiData = data.products
     this.value = [this.apiData.map((value) => value.price)]
     console.log(this.value);

     
    });
    (this.chartOptions.series as any)[0].data = this.value[0];
  }

chartOptions: Highcharts.Options ={
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
      data: [],
      type: 'column'
    }
  ]
};

}