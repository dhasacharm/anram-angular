import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  constructor(private http: HttpClient) { }
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
