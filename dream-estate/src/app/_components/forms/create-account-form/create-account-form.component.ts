import { Component, Input, OnInit } from '@angular/core';
import { Role } from 'src/app/_models/role';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';
import { Router } from '@angular/router';

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
  constructor(private userService: UserService, private router: Router) { }

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
        this.router.navigate(['/funding-application']);
      });
    }
  }
}
