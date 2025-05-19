import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
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
    canActivate: [authGuard]
  },
  {
    path: 'material',
    loadChildren: () => import('./material/material.module').then(m =>  m.MaterialModule),
    canActivate: [authGuard]
  },
  {
    path: 'highchart',
    loadChildren: () => import('./highchart/highchart.module').then(m => m.HighchartModule),
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }