import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS,HttpClient } from '@angular/common/http';
import { App } from '../app';
import { intercepteurInterceptor } from '../interceptors/intercepteur-interceptor';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from '../app.routes';



bootstrapApplication(App).catch((err)=>console.error(err));



@NgModule({
  declarations: [],
  imports: [
    CommonModule, BrowserModule, RouterModule.forRoot(routes)
  ],
  providers:[
    {provide: HTTP_INTERCEPTORS, useValue:intercepteurInterceptor,multi:true}
  ],
})
export class ModuleModule { }
