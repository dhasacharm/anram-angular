import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-leavelist',
  templateUrl: './leavelist.component.html',
  styleUrls: ['./leavelist.component.css']
})
export class LeavelistComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = ['SNo', 'Name', 'from', 'to'];
  users: any[];

  tableData = new MatTableDataSource<any[]>(this.users);

  constructor() {

  }
  applyFilter(filterValue: string) {
    this.tableData.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit() {
    this.tableData.paginator = this.paginator;
    this.tableData.sort = this.sort;
  }
}
