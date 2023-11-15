import {Component, OnInit} from '@angular/core';
import {MyServiceService} from "../my-service.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'add-home',
  templateUrl: './addHome.html',
  styleUrls: ['./addHome.css']
})
export class NewHomeComponents implements OnInit {
  addingForm: FormGroup;
  disabled: "on" | "of" = "of";

  constructor(private apiService: MyServiceService, private fb: FormBuilder) {
    this.addingForm = this.fb.group({
      title: ['', Validators.required],
      city: ['', Validators.required],
      price: [null, Validators.required],
      currency: ['', Validators.required],
      action: ['', Validators.required],
      district: ['', Validators.required],
      address: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  // jsonResponse: any;
  // city: string = '';
  // action: string = '';
  // district: string = '';
  // address: string = '';
  // description: string = '';
  // currency: string = '';
  // price: string = '';
  // title: string = '';
  // isFormValid: string | boolean = true;

  ngOnInit(): void {

  }


  addInfo() {
    if (this.addingForm.valid) {
      // Retrieve values from the form
      const formValues = this.addingForm.value;
      console.log(formValues as JSON)
      this.apiService.addInfo(formValues);
    } else {
      this.disabled = "on";
    }
  }
}
