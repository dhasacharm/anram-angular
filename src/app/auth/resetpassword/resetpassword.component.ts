import { Component, OnInit } from '@angular/core';
import { HelpersService } from '../../services/helpers.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  // otp = false;
  // hide = true;
  constructor(private router: Router,
    private resetService: HelpersService) { }

  ngOnInit() {
  }
  // handlesubmit(ResetForm) {
  //   this.otp = true;
  //   this.hide = false;
  //   this.resetService.change(ResetForm.value)
  //     .subscribe((data) => {
  //       console.log(data);
  //     }, (error) => {
  //       console.log(error.message);
  //     });
  // }
  submit(setForm) {
    console.log(setForm.value);
    this.resetService.change(setForm.value)
      .subscribe((data) => {
        console.log(data);
      }, (error) => {
        console.log(error.message);
      });
  }
}
