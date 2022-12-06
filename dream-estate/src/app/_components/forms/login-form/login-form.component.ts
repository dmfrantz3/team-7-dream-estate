import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';
import { AuthService } from 'src/app/_services/auth.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  user: User = {};
  constructor(private cookieService: CookieService, private authService: AuthService, private userService: UserService, private router: Router,) { }

  ngOnInit(): void {
  }
  submitForm(){

    this.userService.tryLogin(this.user).subscribe(data =>{
        this.user = data;
        if (this.user.errorMessage){
          //error logging in user 
        }
        else{
          this.authService.user = this.user;
          if (this.user.access_token)
            this.cookieService.set('dream-estate-token', this.user.access_token);
          if (this.user.roles)
          {
            if (this.user.roles[0].roleid == 1)
              this.router.navigate(['/applicant-dashboard']);
            else if (this.user.roles[0].roleid == 2)
              this.router.navigate(['lender-dashboard']);
          }
        }
      });
  }
}
