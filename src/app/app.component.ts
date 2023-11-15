import {Component} from '@angular/core';
import {MyServiceService} from "./my-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';

  addHomePage: boolean = false;
  homePage: boolean = true;

  constructor(private apiService: MyServiceService, private router: Router) {
  }

  showAddHomePage() {
    this.addHomePage = !this.addHomePage;
    this.homePage = !this.homePage;
    this.router.navigate(['/newHome']);
  }
  backToMainPage() {
    this.addHomePage = !this.addHomePage;
    this.homePage = !this.homePage;
    this.router.navigate(['/']);
  }
}
