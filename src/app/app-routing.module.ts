import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StockChartComponent } from './chart/chart.component';
import { MultiChartComponent } from './multi-chart/multi-chart.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { AutoSearchCompoent } from './auto-search/auto-search.component';
import { CheckboxComponent } from './checkbox-filter/checkbox.component';
import { StudentComponent } from './student-data/student-data.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path: '',redirectTo:'login',pathMatch:'full'
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'home',
    component: HomeComponent
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
    path:'auto-search',
    component: AutoSearchCompoent
  },
  {
    path:'checkbox',
    component: CheckboxComponent
  },
  {
    path: 'student-data',
    component: StudentComponent
  },
  {
    path: "auto-complete",
    component: AutoCompleteComponent
  },
  {
    path: "form",
    component: FormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
