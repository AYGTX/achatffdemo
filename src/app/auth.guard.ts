import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

type CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>;

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    if (this.authService.isAuthenticated()) {
      //todo : task 1 block logged in user from accessing the login page

      return true;
    } else {
      console.log('test2')
      // Redirect to the login page or any other page
      //todo : task 2 block guest users from accessing anything other than the login page
      return this.router.createUrlTree(['/login']);
    }
  };

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.authGuard(next, state);
  }
}
