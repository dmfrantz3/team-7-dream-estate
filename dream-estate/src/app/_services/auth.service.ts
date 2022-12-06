import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import { UserService } from './user.service';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User = (null as unknown as User);
  $auth_user:Observable<User> = this.checkToken();
  constructor(private userService: UserService, private cookieService: CookieService){}

  public isLoggedIn(): Boolean{
    if (this.cookieService.check('dream-estate-token'))
      return true;
    else
      return false;
  }
  public checkToken(): Observable<User>{
      let user: User = {access_token: this.cookieService.get('dream-estate-token')};
      return this.userService.validateToken(user);
  }
  public logOut(user:User): any{
    this.userService.logout(user);
    this.cookieService.delete('dream-estate-token');
  }
}


