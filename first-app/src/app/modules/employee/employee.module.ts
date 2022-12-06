import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewEmployeeComponent } from './components/new-employee/new-employee.component';



@NgModule({
  declarations: [
    NewEmployeeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",                    // http://localhost:4200/employee
        component: NewEmployeeComponent
      }
    ])
  ]
})
export class EmployeeModule { }
