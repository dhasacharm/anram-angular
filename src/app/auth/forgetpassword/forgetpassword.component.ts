import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HelpersService } from '../../services/helpers.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  constructor(private router: Router,
    private ForgetService: HelpersService) { }

  ngOnInit() {
  }
  handlesubmit(ForgetForm) {
    console.log(ForgetForm.value);
    this.ForgetService.forget(ForgetForm.value)
      .subscribe((data) => {
        console.log(data);
      }, (error) => {
        console.log(error.message);
      });
  }
}
