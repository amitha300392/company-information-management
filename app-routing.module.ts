import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'company-info', component: CompanyInfoComponent },
  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'employee-form/:id', component: EmployeeFormComponent },
  { path: 'employee-form', component: EmployeeFormComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
