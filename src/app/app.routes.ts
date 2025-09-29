import { Routes } from '@angular/router';
import { Apiairline } from './apiairline.component/apiairline.component';
import { Home } from './home.component/home.component';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home},
  { path: 'api', component: Apiairline },
 

     
];
