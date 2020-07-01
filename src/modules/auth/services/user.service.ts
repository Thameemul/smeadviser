import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, ReplaySubject } from 'rxjs';

import { User } from '../models';

const userSubject: ReplaySubject<User> = new ReplaySubject(1);

@Injectable()
export class UserService {
    // formData!: User;

    constructor(private firestore: AngularFirestore) {
        this.user = {
            id: '123',
            firstName: 'Code',
            lastName: 'Blitz',
            email: 'abc@lntinfotech.com',
            password: ' ',
            confirmPassword: ' ',
        };
    }

    set user(user: User) {
        userSubject.next(user);
    }

    get user$(): Observable<User> {
        return userSubject.asObservable();
    }

    // createUser(user: User) {
    //     return this.firestore.collection('user').add(user);
    // }
}
