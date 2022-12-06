import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { Property } from '../_models/property';
import { AuthService } from '../_services/auth.service';
import { PropertyService } from '../_services/property.service';
import { Application } from '../_models/application';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-applicant-dashboard',
  templateUrl: './applicant-dashboard.component.html',
  styleUrls: ['./applicant-dashboard.component.css']
})
export class ApplicantDashboardComponent implements OnInit {
  $properties?: Observable<Property[]> | undefined;
  username: string = "sapplicant@dreamestate.money";
  $user?: Observable<User> | undefined;
  $application?: Observable<Application> | undefined;
  type: string = "USER";

  constructor(private userService: UserService,private propertyService: PropertyService, private authService: AuthService) { }

  ngOnInit(): void {
    //get user info for applicant demo
    //this.$user = this.userService.getUser(this.username);
    this.$user = this.authService.$auth_user;
    this.$user.subscribe(user =>{
      this.$application = this.userService.getUserApplication(user);
    })
    this.$properties = this.propertyService.getPropertyList();
  }

}
