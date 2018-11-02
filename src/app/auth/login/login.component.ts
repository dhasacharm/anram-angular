import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LoginService } from '../../services/login.service';
import swal from 'sweetalert2';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }
  userLogin(loginForm) {
    console.log(loginForm.value);
    this.loginService.login(loginForm.value)
      .subscribe((data: any) => {
        localStorage.setItem('token', data);
        this.router.navigate(['/home']);
        console.log(data);
      }, (error) => {
        console.log(error.message);
        swal({
          title: 'error!',
          text: 'password is incorrect',
          type: 'error',
          confirmButtonText: 'checkit'
        });
      });
  }

}
