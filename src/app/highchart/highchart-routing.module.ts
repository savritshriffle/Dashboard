import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockChartComponent } from './chart/chart.component';
import { MultiChartComponent } from './multi-chart/multi-chart.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'chart',
    pathMatch:'full'
  },
  {
    path: 'chart',
    component: StockChartComponent
  },
  {
    path: 'multi-chart',
    component: MultiChartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HighchartRoutingModule { }