import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  signup(data) {
    console.log('hii');
    return this.http.post('http://localhost:2021/users', data);
  }
}
