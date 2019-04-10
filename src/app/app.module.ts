import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { Page404Component } from './components/page404/page404.component';
import { MyProjectsComponent } from './components/my-projects/my-projects.component';

import { HttpClientModule } from '@angular/common/http/';
import { FormsModule } from '@angular/forms';
 
// services
import { DataApiService } from './services/data-api.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProjectsComponent,
    LoginComponent,
    RegisterComponent,
    Page404Component,
    MyProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
