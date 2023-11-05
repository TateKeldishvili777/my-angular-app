import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';

  addHomePage: boolean = false;
  homePage: boolean = true;

  showAddHomePage() {
    this.addHomePage = !this.addHomePage;
    this.homePage = !this.homePage;
  }
}
