import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Help } from '../models/help.model';

@Injectable()
export class HelpService {
    helps: Observable<Help[]>;

    constructor(private firestore: AngularFirestore) {
        this.helps = this.firestore.collection<Help>('help').valueChanges();
    }

    getHelps(): Observable<Help[]> {
        return this.helps;
    }
}
