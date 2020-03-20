import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee-list/employee.service';

@Component({
  selector: 'app-tematic',
  templateUrl: 'tematic.component.html' ,
  styles: []
})
export class TematicComponent implements OnInit {

    columnDefs = [
      {
        headerName: 'код',
        field: 'code',
        sortable: true,
        resizable: true,
        filter: true,
        width: 50
       },
       {
        headerName: 'русский',
        field: 'name1',
        sortable: true,
        resizable: true,
        filter: true,
        width: 240
       },
       {
        headerName: 'узбек',
        field: 'name2',
        sortable: true,
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
        headerName: 'Доминант',
        field: 'dominant',
        sortable: true,
        resizable: true,
        filter: true,
        width: 50
       }
  ];

  rowData: any;
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

  public tematic = [];
  public headerName = "Справочник должностей ККБ";
  constructor(private _service :EmployeeService) { }

  ngOnInit() {
    this._service.getTematic()
      .subscribe(data => this.tematic = data);
  }


}
