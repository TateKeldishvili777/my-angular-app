import {Component, OnInit} from '@angular/core';
import {MyServiceService} from "../my-service.service";

@Component({
  selector: 'footer-area',
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class FooterComponents implements OnInit {
  constructor(private apiService: MyServiceService) {
  }

  ngOnInit(): void {
  }
}
