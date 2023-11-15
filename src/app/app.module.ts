import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {MyServiceService} from './my-service.service';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthorizationPage} from "./authorizationPage/AuthorizationPage";

@NgModule({
  declarations: [

  ],
  imports: [
    AuthorizationPage,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
