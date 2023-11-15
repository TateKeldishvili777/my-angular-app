import {Component, OnInit} from '@angular/core';
import {MyServiceService} from "../my-service.service";


@Component({
  selector: 'add-home',
  templateUrl: './addHome.html',
  styleUrls: ['./addHome.css']
})
export class NewHomeComponents implements OnInit {
  constructor(private apiService: MyServiceService) {
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
  isFormValid: boolean = true;

  ngOnInit(): void {

  }


  addInfo() {
    this.apiService.addInfo(this.city, this.action, this.district, this.address, this.description, this.price, this.currency, this.title).subscribe((data) => {
      this.jsonResponse = data;
    });
    this.validateForm()
    if (this.isFormValid) {
      // Submit the form
      console.log('Form is valid. Submitting...');
    } else {
      console.log('Form is invalid. Please fill in all parameters.');
    }
  }
  validateForm() {
    // Perform validation logic
    this.isFormValid =
      !!this.title &&
      !!this.city &&
      this.price !== null &&
      !!this.currency &&
      !!this.action &&
      !!this.district &&
      !!this.address &&
      !!this.description;
  }
}
