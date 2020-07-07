import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '@modules/auth/services';
import { Observable, of } from 'rxjs';

@Injectable()
export class ContributionGuard implements CanActivate {
    constructor(private authService: AuthService, public router: Router) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        if (this.authService.isLoggedIn !== true) {
            this.router.navigate(['auth/login']);
        }
        return true;
    }
}
// import { Injectable } from '@angular/core';
// import { CanActivate } from '@angular/router';
// import { Observable, of } from 'rxjs';

// @Injectable()
// export class ContributionGuard implements CanActivate {
//     canActivate(): Observable<boolean> {
//         return of(true);
//     }
// }
