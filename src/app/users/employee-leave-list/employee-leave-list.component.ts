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

  users = [{
    name: 'medical',
    employeeId: '1234',
    from: '2018-10-21T18:30:00.000Z',
    isApproved: 'pending',
    to: '2018-10-14T18:30:00.000Z',
    updatedAt: '2018-10-21T12:07:45.688Z'
  }];


  tableData = new MatTableDataSource<any>(this.users);

  constructor(
    private leaveService: LeaveService
  ) {
    // this.leaveService.getLeaves()
    //   .subscribe(
    //     result => {
    //       console.log(result);
    //       this.users = result;
    //       console.log(this.users);
    //       console.log(this.tableData);
    //     }
    //   );
  }

  ngOnInit() {
    this.tableData.paginator = this.paginator;
    this.tableData.sort = this.sort;
  }

}
