import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
    private loginService: LoginService
  ) { }
  changepass = false;
  ngOnInit() {
  }
  userLogin(loginForm) {
    console.log(loginForm.value);
    this.loginService.login(loginForm.value)
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
