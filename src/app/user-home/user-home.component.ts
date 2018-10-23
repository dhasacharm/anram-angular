import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';



@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  constructor(private service: UserserviceService) { }

  ngOnInit() {
  }
  starttime(id) {
    console.log(id);
    this.service.time(id)
      .subscribe((data: any) => {
        console.log(data);
      });
  }
  endtime() {

  }
}
