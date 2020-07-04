import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '@modules/auth/services';

import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'sb-usermanagement',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './usermanagement.component.html',
    styleUrls: ['usermanagement.component.scss'],
})
export class UserManagementComponent implements OnInit {
    user!: User;

    constructor(private authservice: AuthService, private userservice: UserService) {}

    ngOnInit() {}

    // async handleResetPassword(user: User) {
    //     this.authservice.handleResetPassword(this.user.password, this.user.confirmPassword);
    // }
}
