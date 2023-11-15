import {Routes} from "@angular/router";
import {NewHomeComponents} from "./AddingPage/addHome";
import {HomePage} from "./HomePage/homePage";

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
  }
];

export default routeConfig;
