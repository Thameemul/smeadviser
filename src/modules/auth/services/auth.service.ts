import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
    AngularFirestore,
    AngularFirestoreDocument,
    validateEventsArray,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthService {
    user: any;
    userData: Observable<firebase.User | null>;

    constructor(
        private angularFireAuth: AngularFireAuth,
        private router: Router,
        private afs: AngularFirestore
    ) {
        this.userData = angularFireAuth.authState;
        console.log('angularFireAuth.authState', angularFireAuth.authState);
        this.userData.subscribe(user => {
            if (user) {
                this.user = user;
                // localStorage.setItem('user', JSON.stringify(this.user));
                // JSON.parse(localStorage.getItem('user') as string);
            } else {
                // localStorage.setItem('user', null);
                // JSON.parse(localStorage.getItem('user') as string);
            }
        });
    }

    ChangePassword(code: string, password: string): Promise<void> {
        return this.angularFireAuth.confirmPasswordReset(code, password);
    }

    /* Sign up */
    SignUp(email: string, password: string): Promise<string> {
        return new Promise((resolve, reject) => {
            this.angularFireAuth
                .createUserWithEmailAndPassword(email, password)
                .then(res => {
                    console.log('Successfully signed up!', res);
                    this.user = res.user;
                    // this.SetUserData(this.user);
                    resolve(res.user?.uid);
                    //
                })
                .catch(error => {
                    console.log('Something is wrong:', error.message);
                    reject(error.message);
                });
        });
    }

    /* Sign in */
    SignIn(email: string, password: string): Observable<boolean> {
        return new Observable<boolean>(subscriber => {
            this.angularFireAuth
                .signInWithEmailAndPassword(email, password)
                .then(res => {
                    this.user = res.user;
                    if (this.user != null) {
                        localStorage.setItem('user', JSON.stringify(this.user));
                        console.log(localStorage.getItem('user') as string);
                    }
                    subscriber.next(true);
                    console.log('Successfully signed in!');
                })
                .catch(err => {
                    subscriber.error(err);
                });
        });
    }

    /* Sign out */
    SignOut() {
        this.angularFireAuth.signOut().then(() => {
            localStorage.removeItem('user');
            this.router.navigate(['auth/login']);
        });
    }

    SetUserData(user: firebase.User) {
        const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
        return userRef.set(
            {
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL,
                emailVerified: user.emailVerified,
            },
            {
                merge: true,
            }
        );
    }
    // Returns true when user is looged in and email is verified
    get isLoggedIn(): boolean {
        const user = JSON.parse(localStorage.getItem('user') as string);
        return user !== null && user.isAnonymous === false ? true : false;
    }
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

    sendUserVerifyEmail(email: string): Promise<void> {
        return this.angularFireAuth.sendPasswordResetEmail(email);
    }
}
