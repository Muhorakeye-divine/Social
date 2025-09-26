import { Routes } from '@angular/router';
import { Apiairline } from './apiairline/apiairline';
import { Home } from './home/home';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home},
  { path: 'api', component: Apiairline },
 

     
];
