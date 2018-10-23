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
  changepass = false;
  ngOnInit() {
  }
  userLogin(loginForm) {
    console.log(loginForm.value);
    this.login.login(loginForm.value)
      .subscribe((data: any) => {
        localStorage.setItem('token', data.token);
        this.router.navigate(['/home']);
        console.log(data);
      }, (error) => {
        console.log(error.message);
      });
  }
  forget() {
    this.router.navigate(['/forget']);
  }
  change() {
    this.changepass = true;
  }
}
