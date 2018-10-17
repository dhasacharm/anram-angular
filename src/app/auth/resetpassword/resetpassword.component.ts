import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../../userservice.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  otp = false;
  hide = true;
  constructor(private router: Router,
    private reset: UserserviceService) { }

  ngOnInit() {
  }
  handlesubmit(ResetForm) {
    this.otp = true;
    this.hide = false;
    this.reset.change(ResetForm.value)
      .subscribe((data) => {
        console.log(data);
      }, (error) => {
        console.log(error.message);
      });
  }
  submit(setForm) {
    console.log(setForm.value);
    this.reset.change(setForm.value)
      .subscribe((data) => {
        console.log(data);
      }, (error) => {
        console.log(error.message);
      });
  }
}
