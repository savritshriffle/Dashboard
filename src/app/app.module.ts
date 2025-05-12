import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatCommonModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './login/login.component';
import { MatInputModule } from '@angular/material/input'
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { StockChartComponent } from './chart/chart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { MultiChartComponent } from './multi-chart/multi-chart.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatChipsModule} from '@angular/material/chips';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { SerachAutoComponent } from './search-auto/search-auto.component';
import { FormComponent } from './form/form.component';
import { CheckboxComponent } from './checkbox-filter/checkbox.component';
import { MatRadioModule } from '@angular/material/radio';
import { StudentComponent } from './student-Data/student-Data.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    StockChartComponent,
    MultiChartComponent,
    AutoCompleteComponent,
    SerachAutoComponent,
    FormComponent,
    CheckboxComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatCommonModule,
    HttpClientModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSortModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    HighchartsChartModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule,
    MatRadioModule,
  ],
  providers: [ 
    provideAnimations(), 
    provideToastr()],
  bootstrap: [AppComponent]
})
export class AppModule { }
