import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DialogboxComponent } from './dialog-box/dialog-box.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StockChartComponent } from './chart/chart.component';
import { MultiChartComponent } from './multi-chart/multi-chart.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { SerachAutoComponent } from './search-auto/search-auto.component';
import { FormComponent } from './form/form.component';
import { CheckboxComponent } from './checkbox-filter/checkbox.component';
import { StudentComponent } from './student-Data/student-Data.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path:'home',
        component: HomeComponent
      },
    ]
  },
  {
    path:'chart',
    component: StockChartComponent
  },
  {
    path:'multi-chart',
    component: MultiChartComponent
  },
  {
    path:'search-auto',
    component: SerachAutoComponent
  },
  {
    path:'checkbox',
    component: CheckboxComponent
  },
  {
    path: 'student-data',
    component: StudentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
