import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  private apiUrl = 'http://localhost:8080/home/AllHomes'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getApiResponse() {
    return this.http.get(this.apiUrl);
  }

  deleteApiResponse(){
    return null;
  }
}
