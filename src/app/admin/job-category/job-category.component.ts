import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee-list/employee.service';

@Component({
  selector: 'app-job-category',
  templateUrl: './job-category.component.html'
})
export class JobCategoryComponent implements OnInit {

  public jobCategoryList = [];
  constructor(private _jobService: EmployeeService) { }

  columnDefs = [

    {
      headerName: 'русский',
      field: 'name1',
      sortable: true,
      filter: true,
      resizable: true,
      width: 240
    },
    {
      headerName: 'узбек',
      field: 'name2',
      sortable: true,
      resizable: true,
      filter: true,
      width: 240
    },
    {
      headerName: 'каракалпак',
      field: 'name3',
      sortable: true,
      resizable: true,
      filter: true,
      width: 240
    },
    {
      headerName: 'uzbek',
      field: 'name4',
      sortable: true,
      resizable: true,
      filter: true,
      width: 240
    },
    {
      headerName: 'Наимование должности по классификатору',
      field: 'nameCLP',
      sortable: true,
      resizable: true,
      filter: true,
      width: 340
    },
    {
      headerName: 'Разряд',
      field: 'nameJC',
      sortable: true,
      resizable: true,
      filter: true,
      width: 180
    }
  ];
  private gridApi;
  private gridColumnApi;

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.api.sizeColumnsToFit();

    params.api.sizeColumnsToFit();
    window.addEventListener("resize", function () {
      setTimeout(function () {
        params.api.sizeColumnsToFit();
      });
    });
  }
  rowData: any;

  ngOnInit() {
    this._jobService.getJobCategory()
      .subscribe(data => this.jobCategoryList = data);
  }

}
