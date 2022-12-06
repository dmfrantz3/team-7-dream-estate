import { Component, OnInit } from '@angular/core';
import { Application } from 'src/app/_models/application';
import { User } from 'src/app/_models/user';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-funding-application',
  templateUrl: './funding-application.component.html',
  styleUrls: ['./funding-application.component.css']
})
export class FundingApplicationComponent implements OnInit {
  $application?: Observable<Application> | undefined;
  $user?: Observable<User> | undefined;
  constructor(private authService: AuthService, private userService: UserService) { }

  ngOnInit(): void {
    this.$user = this.authService.$auth_user;
    this.$user.subscribe(user =>{
      this.$application = this.userService.getUserApplication(user);
    })
  }

}
