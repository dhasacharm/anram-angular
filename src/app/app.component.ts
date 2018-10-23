import { Component } from '@angular/core';
import { Router, ActivationEnd } from '../../node_modules/@angular/router';
import { UserserviceService } from './userservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simple-admin';

  constructor(
    private router: Router,
    private userServ: UserserviceService
  ) {
    this.router.events.subscribe(
      (event) => {
        if (event instanceof ActivationEnd) {
          const isLoggedIn = this.userServ.isLoggedIn;
          if (isLoggedIn && event.snapshot.routeConfig.path === 'login') {
            this.router.navigate(['/']);
          }
          this.userServ.userSubject.next(isLoggedIn);
        }
      }
    );
  }
}
