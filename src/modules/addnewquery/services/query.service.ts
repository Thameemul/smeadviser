import { Injectable } from '@angular/core';
import {
    AngularFirestore,
    AngularFirestoreCollection,
    AngularFirestoreCollectionGroup,
} from '@angular/fire/firestore';
import { AuthService } from '@modules/auth/services';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

import { Query } from '../models/Query.model';

@Injectable()
export class QueryService {
    constructor(private fireStore: AngularFirestore, private authService: AuthService) {}

    getQueries(): Observable<Query[]> {
        const t: AngularFirestoreCollection = this.fireStore.collection<Query>('query');
        return t.valueChanges();
    }

    createQuery(query: Query) {
        const date = new Date();
        const id =
            date.getFullYear() +
            '_' +
            +date.getMonth() +
            '_' +
            +date.getDate() +
            '_' +
            +date.getTime();
        query.id = id;
        return this.fireStore.collection('query').doc(id).set(query);
    }

    updateQuery(query: Query) {
        this.fireStore.doc('query/' + query.id).update(query);
    }

    setFAQstatus(query: Query) {
        this.fireStore.doc('query/' + query.id).update({ isFAQ: 1 });
    }
    deleteQuery(queryId: string) {
        this.fireStore.doc('query/' + queryId).delete();
    }
}