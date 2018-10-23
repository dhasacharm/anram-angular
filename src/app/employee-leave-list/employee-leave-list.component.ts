import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-employee-leave-list',
  templateUrl: './employee-leave-list.component.html',
  styleUrls: ['./employee-leave-list.component.css']
})
export class EmployeeLeaveListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = ['SNo', 'Name', 'from', 'to'];

  users: any[];

  tableData = new MatTableDataSource<any[]>(this.users);

  constructor() { }

  ngOnInit() {
    this.tableData.paginator = this.paginator;
    this.tableData.sort = this.sort;
  }

}
