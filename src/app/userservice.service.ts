import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }
  signup(data) {
    return this.http.post('http://localhost:2021', data);
  }
  login(data) {
    return this.http.post('http://localhost:2021/get', data);
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
}
