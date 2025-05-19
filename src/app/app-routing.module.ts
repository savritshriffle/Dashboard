import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StockChartComponent } from './highchart/chart/chart.component';
import { MultiChartComponent } from './highchart/multi-chart/multi-chart.component';
import { AutoCompleteComponent } from './material/auto-complete/auto-complete.component';
import { AutoSearchCompoent } from './material/auto-search/auto-search.component';
import { CheckboxComponent } from './material/checkbox-filter/checkbox.component';
import { RegistrationForm } from './material/registration-form/registration-form.component';
import { FormComponent } from './material/form/form.component';
import { authGuard } from './auth/auth.guard';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component: LoginComponent,
  },
  {
    path: 'user-registration',
    component: UserRegistrationComponent
  },
  {
    path:'home',
    component: HomeComponent,
    canActivate: [authGuard],
  },
  {
    path:'chart',
    component: StockChartComponent,
    canActivate: [authGuard],
  },
  {
    path:'multi-chart',
    component: MultiChartComponent,
    canActivate: [authGuard],
  },
  {
    path:'auto-search',
    component: AutoSearchCompoent,
    canActivate: [authGuard],
  },
  {
    path:'checkbox',
    component: CheckboxComponent,
    canActivate: [authGuard],
  },
  {
    path: 'registration-form',
    component: RegistrationForm,
    canActivate: [authGuard],
  },
  {
    path: "auto-complete",
    component: AutoCompleteComponent,
    canActivate: [authGuard],
  },
  {
    path: "form",
    component: FormComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
