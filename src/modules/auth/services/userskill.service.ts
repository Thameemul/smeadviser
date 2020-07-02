import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { Observable, of } from 'rxjs';

import { UserSkill } from '../models/userskill.model';

@Injectable()
export class UserSkillService {
    constructor(private firestore: AngularFirestore, private router: Router) {}

    getUserSkill$() {
        return this.firestore.collection('userskill').snapshotChanges();
    }
    createUserSkill(userskill: UserSkill) {
        return this.firestore.collection('userskill').add(userskill);
    }

    updateUserSkill(userskill: UserSkill) {
        delete userskill.id;
        this.firestore.doc('userskill/' + userskill.id).update(userskill);
    }

    deleteUserSkill(userskillId: string) {
        this.firestore.doc('userskill/' + userskillId).delete();
    }
}
