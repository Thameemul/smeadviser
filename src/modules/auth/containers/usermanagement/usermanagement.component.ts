import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '@modules/auth/services';

import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'sb-usermanagement',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './usermanagement.component.html',
    styleUrls: ['usermanagement.component.scss'],
})
export class UserManagementComponent implements OnInit {
    password = '';
    confirmPassword = '';
    code!: string;
    passwordNotMatched = true;

    constructor(
        private authservice: AuthService,
        private userservice: UserService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.code = this.route.snapshot.queryParams.oobCode;
    }

    handleResetPassword() {
        if (this.password !== this.confirmPassword) {
            this.passwordNotMatched = false;
            return;
        }
        this.authservice
            .ChangePassword(this.code, this.password)
            .then(() => {
                this.router.navigateByUrl('auth/login');
            })
            .catch(err => {
                alert(err);
            });
    }
}
