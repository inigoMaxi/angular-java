import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserInterface } from 'src/app/models/user-interface';
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
  private user: UserInterface = {
    name: '',
    password: ''
  };
  public isError = false;
  public msgError = '';
  private ok: boolean = false;
  ngOnInit() {
  }

  onRegister(): void {
    if (!this.user.name || !this.user.password) {
      this.ok = true;
    } else {
      this.authService.registerUser(this.user.name, this.user.password)
        .subscribe(user => {
          this.router.navigate(["/user/login"]);
        })
    }
  }
}
