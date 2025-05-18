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
import { authGuard } from './auth.module/auth.guard';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { NavbarComponent } from './navbar/navbar.component';



const routes: Routes = [
  {
    path: '',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'dashboard',
    component: NavbarComponent,
    canActivate: [authGuard],
    children: [
      {
        path:'home',
        component: HomeComponent,
        canActivateChild: [authGuard]
      },
      {
        path:'chart',
        component: StockChartComponent,
        canActivateChild: [authGuard]
      },
      {
        path:'multi-chart',
        component: MultiChartComponent,
        canActivateChild: [authGuard]
      },
      {
        path:'auto-search',
        component: AutoSearchCompoent,
        canActivateChild: [authGuard]
      },
      {
        path:'checkbox',
        component: CheckboxComponent,
        canActivateChild: [authGuard]
      },
      {
        path: 'registration-form',
        component: RegistrationForm,
        canActivateChild: [authGuard]
      },
      {
        path: "auto-complete",
        component: AutoCompleteComponent,
        canActivateChild: [authGuard]
      },
      {
        path: "form",
        component: FormComponent,
        canActivateChild: [authGuard]
      }  
    ]
  },

  {
    path:'login',
    component: LoginComponent,
  },
  {
    path: 'user-registration',
    component: UserRegistrationComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
