import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialRoutingModule } from './material-routing.module';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { AutoSearchCompoent } from './auto-search/auto-search.component';
import { CheckboxComponent } from './checkbox-filter/checkbox.component';
import { DialogboxComponent } from './dialog-box/dialog-box.component';
import { FormComponent } from './form/form.component';
import { RegistrationForm } from './registration-form/registration-form.component';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [
    AutoCompleteComponent,
    AutoSearchCompoent,
    CheckboxComponent,
    DialogboxComponent,
    FormComponent,
    RegistrationForm
   ],
  imports: [
    CommonModule,
    MaterialRoutingModule,
    MatChipsModule,
    MatIconModule,
    FormsModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatInputModule,
    MatOptionModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatRadioModule
  ]
})
export class MaterialModule { }