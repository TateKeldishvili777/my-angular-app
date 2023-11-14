import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {MyServiceService} from "../my-service.service";
import {jsonResponse} from "../response/response.component";


@Component({
  selector: 'header-area',
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponents implements OnInit {

  city: string = '';
  action: string = '';
  name: string = '';

  constructor(private apiService: MyServiceService, private router: Router) {
  }

  ngOnInit(): void {
  }

  navigateToMainPage() {
    this.router.navigateByUrl('/');
    this.apiService.getApiResponse().subscribe((data) => {
      jsonResponse.key = data;
    });
  }

  findByFilter() {
    this.apiService.findByFilter(this.city, this.action).subscribe((data) => {
      jsonResponse.key = data;
    });
  }

  findByAction(action: string) {
    this.apiService.findByAction(action).subscribe((data) => {
      jsonResponse.key = data;
    });
  }

  findByName() {
    this.apiService.findByName(this.name).subscribe((data) => {
      jsonResponse.key = data;
    });
  }
}
