import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LeaveService } from '../../services/leave.service';
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
      }, (error) => {
        console.log(error.message);
      });
  }
}
