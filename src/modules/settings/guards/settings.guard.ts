import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { AuthService } from '../../auth/services/auth.service';

@Injectable()
export class SettingsGuard implements CanActivate {
    constructor(private authService: AuthService, public router: Router) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        if (this.authService.isLoggedIn !== true) {
            this.router.navigate(['auth/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
        return true;
    }
}