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

  findByFilter(city: string, action: string) {
    return this.http.get(this.apiUrl.concat("findByFilter/").concat(city).concat("/").concat(action))
  }
  findByAction(action: string) {
    return this.http.get(this.apiUrl.concat("findByAction/").concat(action))
  }
  findByName(name: string) {
    return this.http.get(this.apiUrl.concat("findByName/").concat(name))
  }

  addInfo(formValues:JSON) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });


     this.http.post(this.apiUrl.concat("add"), formValues, {headers}).subscribe();
  }

  logIn(username: string, password: string) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const data = {
      username: username,
      password: password,
    };

    return this.http.post(this.apiUrl.concat("add"), data, {headers});
  }
  deleteAll() {
    return this.http.delete(this.apiUrl.concat("deleteAll"))
  }
}
