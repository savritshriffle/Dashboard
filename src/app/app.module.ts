import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DialogboxComponent } from './material/dialog-box/dialog-box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatCommonModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { LoginComponent } from './login/login.component';
import { MatInputModule } from '@angular/material/input'
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { MatButtonModule } from '@angular/material/button';
import { StockChartComponent } from './highchart/chart/chart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { MultiChartComponent } from './highchart/multi-chart/multi-chart.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule} from '@angular/material/chips';
import { AutoCompleteComponent } from './material/auto-complete/auto-complete.component';
import { AutoSearchCompoent } from './material/auto-search/auto-search.component';
import { FormComponent } from './material/form/form.component';
import { CheckboxComponent } from './material/checkbox-filter/checkbox.component';
import { MatRadioModule } from '@angular/material/radio';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrationForm } from './material/registration-form/registration-form.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    StockChartComponent,
    MultiChartComponent,
    AutoCompleteComponent,
    AutoSearchCompoent,
    FormComponent,
    CheckboxComponent,
    DialogboxComponent,
    RegistrationForm,
    UserRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    MatTableModule,
    MatCommonModule,
    HttpClientModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSortModule,
    MatInputModule,
    ReactiveFormsModule,
    HighchartsChartModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule,
    MatRadioModule,
    MatButtonModule,
  ],
  providers: [ 
    provideAnimations(), 
    provideToastr()],
  bootstrap: [AppComponent]
})
export class AppModule { }
