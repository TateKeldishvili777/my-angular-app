import {Component} from '@angular/core';
import {NgIf} from "@angular/common";
import {HeaderComponents} from "../header/header";
import {FooterComponents} from "../footter/footer";
import {RouterModule} from "@angular/router";
import {ResponseComponent} from "../response/response.component";


@Component({
  selector: 'home-page',
  standalone: true,
  templateUrl: './homePage.html',
  imports: [
    HeaderComponents,
    RouterModule,
    FooterComponents,
    NgIf,
    ResponseComponent
  ],
  styleUrls: ['./homePage.css']
})
export class HomePage {

}
