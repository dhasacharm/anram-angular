import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../../node_modules/rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  userSubject = new BehaviorSubject(false);
  get isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
  private API_URL = 'http://localhost:2021/userinfo';


  constructor(private http: HttpClient) { }



  getprofile() {
    const url = this.API_URL;
    return this.http.get(url);
  }
}
