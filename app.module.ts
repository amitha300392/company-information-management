import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { AuthService } from './services/auth.service';
import { CompanyService } from './services/company.service';
import { EmployeeService } from './services/employee.service';
import { AppRoutingModule } from './app-routing.module'; // Import the routing module

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CompanyInfoComponent,
    EmployeeListComponent,
    EmployeeFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule // Add routing module here
  ],
  providers: [
    AuthService,
    CompanyService,
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
