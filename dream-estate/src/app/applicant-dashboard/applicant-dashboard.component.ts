import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { Property } from '../_models/property';
import { PropertyService } from '../_services/property.service';
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
  type: string = "USER";

  constructor(private userService: UserService,private propertyService: PropertyService) { }

  ngOnInit(): void {
    //get user info for applicant demo
    this.$user = this.userService.getUser(this.username);
    this.$properties = this.propertyService.getPropertyList();
  }

}
