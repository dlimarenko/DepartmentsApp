import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepartmentComponent } from './department/department.component';
import { EmployeesComponent } from './employees/employees.component';

const routes: Routes = [
  { path: '', component: DepartmentComponent },
  { path: 'departments/:departmentId/employees', component: EmployeesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
