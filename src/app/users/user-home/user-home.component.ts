import { Component, OnInit } from '@angular/core';
import { PunchingService } from '../../services/punching.service';
import { toBase64String } from '@angular/compiler/src/output/source_map';



@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  constructor(private punchingService: PunchingService) { }

  ngOnInit() {
  }
  parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }
  starttime() {
    const a = this.parseJwt(localStorage.getItem('token'));
    console.log(a.iat);
    this.punchingService.start(a)
      .subscribe((data: any) => {
        console.log(data);
      });
  }
  endtime() {
    const a = this.parseJwt(localStorage.getItem('token'));
    console.log(a.id);
    this.punchingService.end(a.id)
      .subscribe((data: any) => {
        console.log(data);
      });

  }

}
