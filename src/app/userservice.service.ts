import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from '../../node_modules/rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  userSubject = new BehaviorSubject(false);
  get isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  constructor(private http: HttpClient) { }
  signup(data) {
    return this.http.post('http://localhost:2021', data);
  }

  login(data) {
    return this.http.post('http://localhost:2021/getin', data);
  }
  forget(data) {
    return this.http.post('http://localhost:2021/forgot', data);
  }
  change(data) {
    return this.http.post('http://localhost:2021/update', data);
  }
  reset(data) {
    return this.http.post('http://localhost:2021/reset', data);
  }
  leave(data) {
    return this.http.post('http://localhost:2021/mail', data);
  }
  starttime(data) {
    return this.http.post('http://localhost:2021/punch', data);
  }
}
