import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserInterface } from 'src/app/models/user-interface';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { isError } from 'util';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router, private location: Location) { }
  private user: UserInterface = {
    name: '',
    password: ''
  };
  public isError = false;

  ngOnInit() { }
  
  onLogin(form: NgForm) {
    return this.authService
        .loginuser(this.user.name, this.user.password)
        .subscribe(
        data => {
          const token = data;
          this.authService.setToken(token);
          this.router.navigate(['/projects']);
        },
        error => console.log(error)
        );
  }
}
