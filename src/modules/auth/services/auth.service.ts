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

    // getAuth$(): Observable<{}> {
    //     return of({});
    // }

    /* Sign up */
    SignUp(email: string, password: string) {
        this.angularFireAuth
            .createUserWithEmailAndPassword(email, password)
            .then(res => {
                console.log('Successfully signed up!', res);
                this.router.navigate(['dashboard']);
            })
            .catch(error => {
                console.log('Something is wrong:', error.message);
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
                console.log('Something is wrong:', err.message);
            });
    }

    /* Sign out */
    SignOut() {
        this.angularFireAuth.signOut();
    }
}
