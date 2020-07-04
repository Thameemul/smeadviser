import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthService {
    userData: Observable<firebase.User | null>;

    constructor(private angularFireAuth: AngularFireAuth, private router: Router) {
        this.userData = angularFireAuth.authState;
    }

    /* Sign up */
    SignUp(email: string, password: string) {
        this.angularFireAuth
            .createUserWithEmailAndPassword(email, password)
            .then(res => {
                console.log('Successfully signed up!', res);
            })
            .catch(error => {
                console.log('Something is wrong while sign up:', error.message);
            });
    }

    /* Sign in */
    SignIn(email: string, password: string) {
        this.angularFireAuth
            .signInWithEmailAndPassword(email, password)
            .then(res => {
                console.log('Successfully signed in!');
                this.router.navigate(['dashboard']);
            })
            .catch(err => {
                console.log('Something is wrong while sign in:', err.message);
            });
    }

    /* Sign out */
    SignOut() {
        this.angularFireAuth.signOut();
        this.router.navigate(['auth/login']);
    }

    // // Send email verfificaiton when new user sign up
    // SendVerificationMail() {
    //     return this.angularFireAuth.
    //         .then(() => {
    //             this.router.navigate(['verify-email-address']);
    //         })
    // }

    // Reset Forggot password
    resetPassword(passwordResetEmail: string) {
        return this.angularFireAuth
            .sendPasswordResetEmail(passwordResetEmail)
            .then(() => {
                window.alert('Password reset email sent, check your inbox.');
            })
            .catch(error => {
                window.alert(error);
            });
    }

    // Returns true when user is looged in and email is verified
    // get isLoggedIn(): boolean {
    //     const user = JSON.parse(localStorage.getItem('user'));
    //     return user !== null && user.emailVerified !== false ? true : false;
    // }
}
