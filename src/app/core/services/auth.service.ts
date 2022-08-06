import {Injectable} from '@angular/core';
import {User} from "../models/User.model";
import {CookieService} from "./cookie.service";
import {HttpService} from "@cc/services/request.service";
import {HttpClient} from "@angular/common/http";
import {BaseService} from "@cc/services/base.service";
import {DataService} from "@cc/services/data.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  private user: User | null;

  constructor(private cookieService: CookieService, http: HttpService, data: DataService) {
    super(http, data);
    this.user = null;
  }

  public currentUser(): User | null {
    if (!this.user) {
      this.user = JSON.parse(<string>this.cookieService.getCookie('tm-user'));
    }
    return this.user;
  }

  login({username = '', password = '', rememberMe = false}, done: (response: {error: boolean, msg: string}) => any) {
    this.http.post(`/auth/login`, {username, password}).subscribe((res) => {
      const token = 'test';
      this.getUserByToken(token).subscribe(res => {
        let storeTime = 1;
        if (!rememberMe) {
          storeTime = 1 / 24;
        }
        this.cookieService.setCookie('tm-user', JSON.stringify(new User(res)), storeTime);
        done({
          error: false,
          msg: ''
        });
      }, error => {
        done({
          error: true,
          msg: error
        });
        console.log(error);
      });
    }, error => {
      done({
        error: true,
        msg: error
      });
    });
  }

  getUserByToken(token: string) {
    const options = {
      headers: {
        'Authorization': `key ${token}`
      },
    }
    return this.http.get('/users/info', options);
  }

  override getOne() {

  }

  logout() {
    this.cookieService.deleteCookie('currentUser');
    this.user = new User({});
  }
}
