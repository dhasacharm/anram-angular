import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { LeaveService } from '../../services/leave.service';


@Component({
  selector: 'app-employee-leave-list',
  templateUrl: './employee-leave-list.component.html',
  styleUrls: ['./employee-leave-list.component.css']
})
export class EmployeeLeaveListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = ['SNo', 'Name', 'from', 'to', 'actions'];

  users: any;


  tableData = new MatTableDataSource<any>(this.users);

  constructor(
    private leaveService: LeaveService
  ) {
    this.leaveService.getLeaves()
      .subscribe(
        result => {
          console.log(result);
          this.users = result;
          this.tableData = this.users;
        }
      );
  }

  ngOnInit() {
    this.tableData.paginator = this.paginator;
    this.tableData.sort = this.sort;
  }

}
