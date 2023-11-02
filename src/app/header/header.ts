import {Component, OnInit} from '@angular/core';
import {MyServiceService} from "../my-service.service";

@Component({
  selector: 'header-area',
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponents implements OnInit {

  jsonResponse: any;

  city: string = '';
  action: string = '';
  name: string = '';

  constructor(private apiService: MyServiceService) {
  }

  ngOnInit(): void {
    this.findByFilter()
  }

  findByFilter() {
    this.apiService.findByFilter(this.city, this.action).subscribe((data) => {
      this.jsonResponse = data;
    });
  }

  findByName() {
    this.apiService.findByName(this.name).subscribe((data) => {
      this.jsonResponse = data;
    });
  }
}
