import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { StockChartComponent } from './chart/chart.component';
import { MultiChartComponent } from './multi-chart/multi-chart.component';
import { MatOptionModule } from '@angular/material/core';
import { HighchartRoutingModule } from './highchart-routing.module';

@NgModule({
  declarations: [
    StockChartComponent,
    MultiChartComponent
  ],
  imports: [
    CommonModule,
    HighchartsChartModule,
    HighchartRoutingModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatOptionModule,
    MatOptionModule
  ]
})
export class HighchartModule { }
