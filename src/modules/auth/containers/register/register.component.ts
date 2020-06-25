import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../../contribution/services/user.service';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'sb-register',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './register.component.html',
    styleUrls: ['register.component.scss'],
})
export class RegisterComponent implements OnInit {
    email!: string;
    password!: string;

    constructor(private authservice: AuthService) {}

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

    signUp() {
        this.authservice.SignUp(this.email, this.password);
        this.email = '';
        this.password = '';
    }
}
