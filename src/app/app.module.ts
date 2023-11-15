import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ResponseComponent} from "./response/response.component";
import { MyServiceService } from './my-service.service';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HeaderComponents} from "./header/header";
import {FooterComponents} from "./footter/footer";
import {NewHomeComponents} from "./AddingPage/addHome";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  { path: 'newHome', component: NewHomeComponents },
];
@NgModule({
  declarations: [
    AppComponent,
    ResponseComponent,
    HeaderComponents,
    FooterComponents,
    NewHomeComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
