import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PunchingService {

  constructor(private http: HttpClient) { }

  start(data) {
    console.log(data);
    return this.http.post('http://localhost:2021/punch', data);
  }

  end(data) {
    const id = data._id;
    return this.http.put(`http://localhost:2021/punch/${id}`, data);
  }

}
