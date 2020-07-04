import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '@testing/mocks';

@Component({
    selector: 'sb-forgot-password',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './forgot-password.component.html',
    styleUrls: ['forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
    user = {} as User;
    constructor(private authservice: AuthService) { }

    resetEmail!: string;
    ngOnInit() {}

    async resetPassword(user: User) {
        this.authservice.resetPassword(this.user.email);
    }
}
