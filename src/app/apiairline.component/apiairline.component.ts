import { Component ,inject,OnInit} from '@angular/core';
import { Airline } from '../models/airline';
import { Serviceapi } from '../services/serviceapi';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-apiairline',
  standalone:true,
  imports: [CommonModule,RouterLinkActive,RouterLink],
  templateUrl: './apiairline.component.html',
  styleUrl: './apiairline.component.css'
})
export class Apiairline implements OnInit {
  airlines:Airline[]=[];
  error: string | null = null;
  loading:boolean=false;
  
private airservice = inject (Serviceapi);
  
  
  ngOnInit(): void {
    this. getAirlines();
  }
  getAirlines():void{
    this.airservice. getAirlines('Singapore Airlines').subscribe({
      next:(data)=>{
        this.airlines=data;
        this.loading =false;
      },
      error: (err) =>{
        this.error=err.message;
        this.loading=false;
        this.airlines=[];
      }
    });

    
  }

}
