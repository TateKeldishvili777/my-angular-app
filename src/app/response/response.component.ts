import {Component, OnInit} from '@angular/core';
import {MyServiceService} from "../my-service.service";

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {
  jsonResponse: any;

  userInput: string = '';

  city: string = '';
  district: string = '';
  address: string = '';
  description: string = '';

  constructor(private apiService: MyServiceService) {
  }

  ngOnInit(): void {
    this.getApiResponse();
    this.findById();
    this.addInfo();
    this.deleteAll();
  }

  getApiResponse() {
    this.apiService.getApiResponse().subscribe((data) => {
      this.jsonResponse = data;
    });
  }

  findById() {
    this.apiService.findById(this.userInput).subscribe((data) => {
      this.jsonResponse = data;
    });
  }

  addInfo() {
    this.apiService.addInfo(this.city, this.district, this.address, this.description).subscribe((data) => {
      this.jsonResponse = data;
    });
  }

  deleteAll() {
    this.apiService.deleteAll().subscribe((data) => {
      this.jsonResponse = data;
    });
  }
}
