import {Routes} from "@angular/router";
import {NewHomeComponents} from "./AddingPage/addHome";
import {HomePage} from "./HomePage/homePage";
import {AuthorizationPage} from "./authorizationPage/AuthorizationPage";

const routeConfig: Routes = [
  {
    path: '',
    component: HomePage,
    title: 'Home page'
  },
  {
    path: 'new-home',
    component: NewHomeComponents,
    title: 'New Home'
  },
  {
    path: 'logIn',
    component: AuthorizationPage,
    title: 'Log in'
  }
];

export default routeConfig;
