import {Component, OnInit} from '@angular/core';
import {MyServiceService} from "../my-service.service";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";


@Component({
  selector: 'add-home',
  standalone: true,
  templateUrl: './addHome.html',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    NgIf
  ],
  styleUrls: ['./addHome.css']
})
export class NewHomeComponents implements OnInit {
  addingForm: FormGroup;
  disabled: "on" | "of" = "of";

  constructor(private apiService: MyServiceService, private fb: FormBuilder, private router: Router) {
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
      // this.router.navigateByUrl('/').then(r => true)
    } else {
      this.disabled = "on";
    }
  }
}
