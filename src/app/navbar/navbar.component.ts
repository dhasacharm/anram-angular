import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isLoggedIn = false;

  constructor(private router: Router,
    private userServ: UserserviceService) {
      this.userServ.userSubject.subscribe(
        event => {
          this.isLoggedIn = event;
        }
      );
     }

  ngOnInit() {
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
