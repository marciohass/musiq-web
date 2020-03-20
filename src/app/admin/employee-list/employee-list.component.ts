import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { error } from 'util';

@Component({
  selector: 'app-employee-list',
  templateUrl: 'employee-list.component.html',
  styles: []
})
export class EmployeeListComponent implements OnInit {

  public errorMsg;
  public employees = [];
  constructor(private _employeeService: EmployeeService) {

  }


  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe(data => this.employees = data,
                  error => this.errorMsg = error);
  }

}
