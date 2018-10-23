import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserserviceService } from '../userservice.service';
@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {

  constructor(private router: Router,
    private leave: UserserviceService) { }

  ngOnInit() {
  }
  handlesubmit(LeaveForm) {
    console.log(LeaveForm.value);
    this.leave.leave(LeaveForm.value)
      .subscribe((data) => {
        console.log('hiii', data);
      }, (error) => {
        console.log(error.message);
      });
  }
}
