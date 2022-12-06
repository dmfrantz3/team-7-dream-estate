import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { Application } from '../_models/application';
import { ApplicationService } from '../_services/application.service';
import { AuthService } from '../_services/auth.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-lender-dashboard',
  templateUrl: './lender-dashboard.component.html',
  styleUrls: ['./lender-dashboard.component.css']
})
export class LenderDashboardComponent implements OnInit {
  username: string = "sinvestor1@dreamestate.money";
  authenticated_user: User | undefined;
  $user?: Observable<User> | undefined;
  $applications?: Observable<Application[]> | undefined;
  data:any;

  constructor(private userService: UserService, private applicationService: ApplicationService, private authService: AuthService) { }

  ngOnInit(): void {
    /*if (!this.authService.user){
      this.authService.checkToken().subscribe(data =>{
        this.authService.user = data;
      });
    } */
    this.$user = this.authService.$auth_user;
    /*this.$user = this.userService.getUser(this.username); */
    this.$applications = this.applicationService.getNeedFunding();
    this.data = {title: "Available Offerings", 
    text: "View and lend to applicants vetted by our team of professionals on factors such as rental payment history, rental payment duration, income, job history, credit score, and other obligations."};
  }

}
