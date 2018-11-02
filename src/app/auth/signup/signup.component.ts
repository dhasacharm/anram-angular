import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SignupService } from '../../services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router,
    private signupService: SignupService) { }

  ngOnInit() {
  }
  handlesubmit(NewEmployee) {
    this.signupService.signup(NewEmployee.value)
      .subscribe((data) => {
        console.log('hii');
        this.router.navigate(['/login']);
      }, (error) => {
        console.log(error.message);
      });
  }
}
