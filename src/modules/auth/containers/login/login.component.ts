import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

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

    constructor(private authservice: AuthService, private router: Router) { }

    ngOnInit() {
        //  this.resetForm();
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
        this.authservice.SignIn(this.email, this.password);
        this.email = '';
        this.password = '';
    }
}
