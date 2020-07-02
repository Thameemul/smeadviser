import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { Observable, of } from 'rxjs';

import { UserSkill } from '../models/userskill.model';

@Injectable()
export class UserSkillService {
    userSkills!: Observable<UserSkill[]>;

    constructor(private fireStore: AngularFirestore, private router: Router) {
        this.userSkills = this.fireStore.collection<UserSkill>('userskill').valueChanges();
    }

    getUserSkills(): Observable<UserSkill[]> {
        return this.userSkills;
    }

    createUserSkill(userskill: UserSkill) {
        return this.fireStore.collection('userskill').add(userskill);
    }

    updateUserSkill(userskill: UserSkill) {
        delete userskill.id;
        this.fireStore.doc('userskill/' + userskill.id).update(userskill);
    }

    deleteUserSkill(userskillId: string) {
        this.fireStore.doc('userskill/' + userskillId).delete();
    }
}
