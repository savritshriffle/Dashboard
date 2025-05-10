import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StockChartComponent } from './chart/chart.component';
import { NavPageComponent } from './nav-page/nav-page.component';
import { MultiChartComponent } from './multi-chart/multi-chart.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { SerachAutoComponent } from './serach-auto/serach-auto.component';
import { FormComponent } from './form/form.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTestComponent } from './new-test/new-test.component';


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
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'navpage',
        component: NavPageComponent
      }
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
    path:'auto-complete',
    component: AutoCompleteComponent
  },
  {
    path:'search-auto',
    component: SerachAutoComponent
  },
  {
    path:'form',
    component: FormComponent
  },
  {
    path:'complete',
    component: NewTaskComponent
  },
  {
    path: 'new-Test',
    component: NewTestComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'

  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
