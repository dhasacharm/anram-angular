import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { LeaveService } from '../services/leave.service';


@Component({
  selector: 'app-leavelist',
  templateUrl: './leavelist.component.html',
  styleUrls: ['./leavelist.component.css']
})
export class LeavelistComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = ['SNo', 'Name', 'from', 'to', 'actions'];
  users: any[];

  tableData = new MatTableDataSource<any[]>(this.users);

  constructor(private leaveService: LeaveService) {

  }
  // showuser() {
  //   this.leaveService.userleavelist()
  //     .subscribe((data) => {
  //       console.log(data);
  //     });
  // }
  applyFilter(filterValue: string) {
    this.tableData.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit() {
    this.tableData.paginator = this.paginator;
    this.tableData.sort = this.sort;
  }
}
