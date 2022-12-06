import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginCard: any;
  constructor() { }

  ngOnInit(): void {
    this.loginCard = {
      title:"Welcome Back to DreamEstate!", 
      text:"Log into an existing account with your email/password.",
      loginForm: true
    }
  }

}
