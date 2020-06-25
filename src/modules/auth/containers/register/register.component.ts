import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'sb-register',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './register.component.html',
    styleUrls: ['register.component.scss'],
})
export class RegisterComponent implements OnInit {
    constructor(
        private userservice: UserService,
        private firestore: AngularFirestore,
        private router: Router
    ) {}

    ngOnInit() {
   //     this.resetForm();
    }

    // resetForm(form?: NgForm) {
    //     if (form != null) {
    //         form.reset();
    //     }

    //     this.userservice.formData = {
    //         id: '',
    //         firstName: '',
    //         lastName: '',
    //         email: '',
    //         password: '',
    //         confirmPassword: '',
    //     };
    // }

    // onSubmit(form: NgForm) {
    //     let data = form.value;
    //     this.firestore.collection('user').add(data);
    //     this.resetForm(form);
    //     alert('Registration Form Submitted successfully');
    //     //this.router.navigate('/dashboard');
    // }

    // create(user: User) {
    //     this.userservice.createUser(user);
    // }

    // update(user: User) {
    //     this.userservice.updateUser(user);
    // }

    // delete(id: string) {
    //     this.userservice.deleteUser(id);
    // }
}
