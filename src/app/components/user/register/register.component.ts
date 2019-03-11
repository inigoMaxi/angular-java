import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private location: Location) { }
  private user: {
    name: '',
    email: '',
    password: ''
  };
  public isError = false;
  public msgError = '';

  ngOnInit() {
  }

  onRegister(): void {
    this.authService.registerUser(this.user.name, this.user.email, this.user.password)
    .subscribe(user => {
      console.log(user);
    })
  }
}