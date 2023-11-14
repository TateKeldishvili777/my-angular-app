import {Router} from '@angular/router';
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

  constructor(private apiService: MyServiceService, private router: Router) {
  }

  ngOnInit(): void {
  }

  navigateToMainPage() {
    this.router.navigateByUrl('/');
  }

  findByFilter() {
    this.apiService.findByFilter(this.city, this.action).subscribe((data) => {
      this.jsonResponse = data;
    });
  }

  findByAction(action: string) {
    this.apiService.findByAction(action).subscribe((data) => {
      this.jsonResponse = data;
    });
  }

  findByName() {
    this.apiService.findByName(this.name).subscribe((data) => {
      this.jsonResponse = data;
    });
  }
}
