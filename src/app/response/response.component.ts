import {Component, OnInit} from '@angular/core';
import {MyServiceService} from "../my-service.service";

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {
  jsonResponse: any;

  constructor(private apiService: MyServiceService) {}

  ngOnInit(): void {
    this.getApiResponse();
    this.deleteApiResponse();
  }

  getApiResponse() {
    this.apiService.getApiResponse().subscribe((data) => {
      this.jsonResponse = data;
    });
  }

  deleteApiResponse() {
    this.apiService.getApiResponse().subscribe((data) => {
      this.jsonResponse = null;
    });
  }
}
