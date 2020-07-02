// import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { UserService } from '@modules/auth/services';

// import { User } from '../../models/user.model';
// import { AuthService } from '../../services/auth.service';

// @Component({
//     selector: 'sb-register',
//     changeDetection: ChangeDetectionStrategy.OnPush,
//     templateUrl: './register.component.html',
//     styleUrls: ['register.component.scss'],
// })
// export class RegisterComponent implements OnInit {
//     email!: string;
//     password!: string;

//     user?: User;

//     constructor(private authservice: AuthService, private userservice: UserService) {}

//     ngOnInit() {
//     }

//     resetForm(form?: NgForm) {
//     }

//     signUp() {
//         this.authservice.SignUp(this.email, this.password);
//     }

// }
