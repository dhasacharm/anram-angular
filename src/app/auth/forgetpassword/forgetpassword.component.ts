import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserserviceService } from '../../userservice.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  constructor(private router: Router,
    private login: UserserviceService) { }

  ngOnInit() {
  }
  handlesubmit(ForgetForm) {
    console.log(ForgetForm.value);
    this.login.forget(ForgetForm.value)
      .subscribe((data) => {
        console.log(data);
      }, (error) => {
        console.log(error.message);
      });
  }
}
