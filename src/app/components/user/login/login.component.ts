import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserInterface } from 'src/app/models/user-interface';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
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
  public msgError = '';
  private ok: boolean = false;
  ngOnInit() { }

  onLogin(form: NgForm) {
    if ( !this.user.name || !this.user.password) {
      this.ok = true;
    } else {
      return this.authService
        .loginuser(this.user.name, this.user.password)
        .subscribe(
          data => {
            const token = data;
            this.authService.setToken(token);
            location.assign('/projects');
          },
          error => console.log(error)
        );
    }
  }
}
