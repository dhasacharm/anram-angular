import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserserviceService } from '../../userservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
    private login: UserserviceService
  ) { }

  ngOnInit() {
  }
  handlesubmit(loginForm) {
    this.login.logindata(loginForm.value)
      .subscribe((data) => {
        this.router.navigate(['/forget']);
      }, (error) => {
        console.log(error.message);
        alert('invalid users');
      });

  }
  forget() {
    this.router.navigate(['/forget']);
  }
  reset() {
    this.router.navigate(['/reset']);
  }
}
