import { Component, Input, OnInit } from '@angular/core';
import { Role } from 'src/app/_models/role';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { ApplicationService } from 'src/app/_services/application.service';
import { Application } from 'src/app/_models/application';

@Component({
  selector: 'app-create-account-form',
  templateUrl: './create-account-form.component.html',
  styleUrls: ['./create-account-form.component.css']
})
export class CreateAccountFormComponent implements OnInit {
  @Input() roleid: any;
  role: Role = {};
  user: User = {};
  roles: Role[] = [];
  application: Application = {};
  constructor(private applicationService: ApplicationService, private userService: UserService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  submitForm(){
    if (this.roleid){
      /* assign default roles */
      this.role.roleid = this.roleid;
      this.roles.push(this.role);
      this.user.roles = this.roles;
      console.log(JSON.stringify(this.user));
      this.userService.postUser(this.user).subscribe(data =>{
        this.user = data;
        if (this.user.errorMessage){
          //error creating user
        }
        else{
          this.authService.user = this.user;
          if (this.role.roleid == 1)
          {
            //create a blank application
            this.application.userid = this.user.userid;
            this.application.appstatusid=1;
            this.applicationService.postApplication(this.application).subscribe(x=>{
              this.router.navigate(['/funding-application']);
            });
          }
          else if (this.role.roleid == 2)
            this.router.navigate(['lender-dashboard']);
        }
      });
    }
  }
}
