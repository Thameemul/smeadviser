import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';

import { Query } from '../models/query.model';

@Injectable()
export class QueryService {
    formData!: Query;

    constructor(private firestore: AngularFirestore) {}

    getQuery$() {
        return this.firestore.collection('query').snapshotChanges();
    }
    createQuery(query: Query) {
        return this.firestore.collection('query').add(query);
    }

    updateQuery(query: Query) {
        delete query.id;
        this.firestore.doc('query/' + query.id).update(query);
    }

    deleteQuery(queryId: string) {
        this.firestore.doc('query/' + queryId).delete();
    }
}
