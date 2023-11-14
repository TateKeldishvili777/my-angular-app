import {Component, OnInit} from '@angular/core';
import {MyServiceService} from "../my-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'add-home',
  templateUrl: './addHome.html',
  styleUrls: ['./addHome.css']
})
export class NewHomeComponents implements OnInit {
  constructor(private apiService: MyServiceService,private router: Router) {
  }

  jsonResponse: any;
  city: string = '';
  action: string = '';
  district: string = '';
  address: string = '';
  description: string = '';
  currency: string = '';
  price: string = '';
  title: string = '';


  ngOnInit(): void {

  }


  addInfo() {
    this.apiService.addInfo(this.city, this.action, this.district, this.address, this.description, this.price, this.currency, this.title).subscribe((data) => {
      this.jsonResponse = data;
    });
    this.router.navigate([this.router.url]); // Change '/' to the actual route of your homepage
  }
}
