import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../../node_modules/rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  userSubject = new BehaviorSubject(false);
  get isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  constructor() { }

}
