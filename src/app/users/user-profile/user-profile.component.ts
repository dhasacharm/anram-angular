import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { UserserviceService } from '../../services/userservice.service';



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  users: any;

  displayedColumns = [
    'Email',
    'FatherName', 'Address',
    'PermananentAddress', 'AdhaarNo', 'PancardNo', 'EmployeeContactNo', 'EmergencyContactNo'
  ];


  tableData = new MatTableDataSource<any>(this.users);

  constructor(private userservice: UserserviceService) {
    this.userservice.getprofile()
      .subscribe(
        result => {
          console.log(result);
          this.users = result;
          this.tableData = this.users;
        }
      );
  }



  ngOnInit() {
  }

}
