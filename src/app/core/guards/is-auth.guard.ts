import {Injectable} from '@angular/core';
import {CanLoad, Route, Router, UrlSegment} from '@angular/router';

import {AuthService} from '@cc/services/auth.service';

@Injectable({providedIn: 'root'})
export class IsAuthGuard implements CanLoad {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }

  canLoad(route: Route, segment: UrlSegment[]): boolean {
    const currentUser = this.authService.currentUser();
    console.log(currentUser);
    if (currentUser) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
