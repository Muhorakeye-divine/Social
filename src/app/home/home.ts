import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone:true,
  imports: [RouterLink ,RouterLinkActive],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  


}
