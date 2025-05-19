import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { AutoSearchCompoent } from './auto-search/auto-search.component';
import { CheckboxComponent } from './checkbox-filter/checkbox.component';
import { FormComponent } from './form/form.component';
import { RegistrationForm } from './registration-form/registration-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'auto-complete',
    pathMatch:'full'
  },
  {
    path: 'auto-complete',
    component: AutoCompleteComponent
  },
  {
    path: 'auto-search',
    component: AutoSearchCompoent
  },
  {
    path: 'checkbox',
    component: CheckboxComponent
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'registration-form',
    component: RegistrationForm
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialRoutingModule { }
