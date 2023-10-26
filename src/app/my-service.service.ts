import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  private apiUrl = 'http://localhost:8080/home/';

  constructor(private http: HttpClient) {
  }

  getApiResponse() {
    return this.http.get(this.apiUrl.concat("allHomes"));
  }

  findById(id: string) {
    return this.http.get(this.apiUrl.concat("findById/").concat(String(id)))
  }

  addInfo(city: string, district: string, address: string, description: string) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const data = {
      city: city,
      district: district,
      address: address,
      description: description
    };

    return this.http.post(this.apiUrl.concat("add"), data, {headers});
  }

  deleteAll() {
    return this.http.delete(this.apiUrl.concat("deleteAll"))
  }
}
