import {Component, OnInit} from '@angular/core';
import {MyServiceService} from "../my-service.service";

export const jsonResponse: { key: any } = { key: '' };

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {

  userInput: string = '';

  city: string = '';
  action: string = '';
  district: string = '';
  address: string = '';
  description: string = '';

  constructor(private apiService: MyServiceService) {
  }
  getApiResponse() {
    this.apiService.getApiResponse().subscribe((data) => {
      jsonResponse.key = data;
    });
  }

  ngOnInit(): void {
     this.getApiResponse();
    // this.findById();
    // this.addInfo();
    // this.deleteAll();
  }



  findById() {
    this.apiService.findById(this.userInput).subscribe((data) => {
      jsonResponse.key = data;
    });
  }

  // addInfo() {
  //   this.apiService.addInfo(this.city, this.action, this.district, this.address, this.description).subscribe((data) => {
  //     this.jsonResponse = data;
  //   });
  // }

  deleteAll() {
    this.apiService.deleteAll().subscribe((data) => {
      jsonResponse.key = data;
    });
  }

  protected readonly jsonResponse = jsonResponse;
}
