import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  employee: any = {};
  isEditing = false;
  employeeId: number;

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.employeeId = +params['id'];
        this.isEditing = true;
        this.loadEmployee();
      }
    });
  }

  loadEmployee() {
    this.employeeService.getEmployee(this.employeeId).subscribe(data => {
      this.employee = data;
    });
  }

  onSubmit() {
    if (this.isEditing) {
      this.employeeService.updateEmployee(this.employeeId, this.employee).subscribe(() => {
        this.router.navigate(['/employee-list']);
      });
    } else {
      this.employeeService.addEmployee(this.employee).subscribe(() => {
        this.router.navigate(['/employee-list']);
      });
    }
  }
}
