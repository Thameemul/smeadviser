import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserService } from '@modules/auth/services';

import { AuthService } from '../../../auth/services/auth.service';

@Component({
    selector: 'sb-top-nav-user',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './top-nav-user.component.html',
    styleUrls: ['top-nav-user.component.scss'],
})
export class TopNavUserComponent implements OnInit {
    constructor(public userService: UserService, private authService: AuthService) {}
    ngOnInit() {}

    SignOut() {
        this.authService.SignOut();
    }
}
