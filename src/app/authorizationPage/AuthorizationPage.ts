import {Component, OnInit} from '@angular/core';
import {MyServiceService} from "../my-service.service";


@Component({
  selector: 'authorization',
  templateUrl: './AuthorizationPage.html',
  styleUrls: ['./AuthorizationPage.css'],
  standalone: true,
})
export class AuthorizationPage implements OnInit {
  constructor(private apiService: MyServiceService ) {
  }

  jsonResponse: any;
  username: string = '';
  password : string = '';



  ngOnInit(): void {

  }

  logIn() {
    this.apiService.logIn(this.username, this.password ).subscribe((data) => {
      this.jsonResponse = data;
    });
  }
}

