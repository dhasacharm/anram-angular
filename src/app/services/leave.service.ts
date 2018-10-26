import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  private API_URL = 'http://localhost:2021/leave';

  constructor(
    private http: HttpClient
  ) { }

  getLeaves() {
    const url = this.API_URL;
    return this.http.get(url);
  }

  getLeaveById(id) {
    const url = `${this.API_URL}/${id}`;
    return this.http.get(url);
  }
  leave(data) {
    return this.http.post('http://localhost:2021/leave', data);
  }

}
