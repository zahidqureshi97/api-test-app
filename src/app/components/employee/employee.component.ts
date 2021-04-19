import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../assets/Employee';
import { EmployeeService } from '../../services//employee-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  employees: Employee[];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((employees) => {
      this.employees = employees;
      console.log(this.employees);
    });
  }
}
