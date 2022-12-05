import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-owner-dashboard',
  templateUrl: './owner-dashboard.component.html',
  styleUrls: ['./owner-dashboard.component.css']
})
export class OwnerDashboardComponent implements OnInit {
  username: string = "dmfrantz3@gmail.com";
  $user?: Observable<User> | undefined;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.$user = this.userService.getUser(this.username);
  }

}
