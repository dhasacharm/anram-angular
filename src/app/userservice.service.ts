import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }

  createList(data) {
    return this.http.post('http://localhost:3000/signup', data);
  }
  logindata(data) {
    return this.http.post('http://localhost:3000/login', data);
  }
  reset(data) {
    return this.http.post('http://localhost:3000/reset', data);
  }
  otp(data) {
    return this.http.post('http://localhost:3000/login', data);
  }
}
