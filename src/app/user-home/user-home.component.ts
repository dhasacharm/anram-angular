import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { toBase64String } from '@angular/compiler/src/output/source_map';



@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  constructor(private service: UserserviceService) { }

  ngOnInit() {
  }
  starttime(event) {
    console.log(localStorage.getItem('token'));
    const a = this.parseJwt(localStorage.getItem('token'));
    console.log(a.id);
    this.service.time(a.id)
      .subscribe((data: any) => {
        console.log(data);
      });
  }
  endtime() {
    console.log(localStorage.getItem('token'));
    const a = this.parseJwt(localStorage.getItem('token'));
    console.log(a.id);
    this.service.endtime(a.id)
      .subscribe((data: any) => {
        console.log(data);
      });

  }
  parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }
}
