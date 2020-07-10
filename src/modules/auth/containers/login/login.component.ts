import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'sb-login',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
    email!: string;
    password!: string;
    isChecked = false;
    returnUrl!: string;
    constructor(
        private authservice: AuthService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        //  this.resetForm();
        this.returnUrl = this.route.snapshot.queryParams.returnUrl || 'dashboard';
    }

    resetForm(form?: NgForm) {
        // if (form != null) {
        //     form.reset();
        // }
        // this.authservice.userData = {
        //     id: '',
        //     firstName: '',
        //     lastName: '',
        //     email: '',
        //     password: '',
        //     confirmPassword: '',
        // };
    }

    SignIn() {
        this.authservice
            .SignIn(this.email, this.password)
            .then(res => {
                this.router.navigateByUrl(this.returnUrl);
            })
            .catch(err => {
                alert(err.message);
            });
        this.email = '';
        this.password = '';
    }
}
