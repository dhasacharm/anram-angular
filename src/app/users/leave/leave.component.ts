import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LeaveService } from '../../services/leave.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {

  constructor(private router: Router,
    private leaveService: LeaveService) { }

  ngOnInit() {
  }
  handlesubmit(LeaveForm) {
    this.leaveService.leave(LeaveForm.value)
      .subscribe((data) => {
        console.log(data);
        swal({
          title: 'success',
          text: 'email send successfully',
          type: 'success',
          confirmButtonText: 'continue'
        });
      }, (error) => {
        console.log(error.message);
        swal({
          title: 'error!',
          text: 'email falid',
          type: 'error',
          confirmButtonText: 'checkit'
        });
      });
  }
}
