import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';

import { DetailQuery } from '../models/detailquery.model';

@Injectable()
export class DetailQueryService {
    // formData!: DetailQuery;

    // queries: Observable<Query[]>;

    constructor(private fireStore: AngularFirestore) {}
    //    this.queries = this.fireStore.collection<Query>('query').valueChanges();

    // getQueries(): Observable<Query[]> {
    //     return this.queries;
    // }
    // createQuery(query: Query) {
    //     return this.fireStore.collection('query').add(query);
    // }

    // updateQuery(query: Query) {
    //     delete query.id;
    //     this.fireStore.doc('query/' + query.id).update(query);
    // }

    // deleteQuery(queryId: string) {
    //     this.fireStore.doc('query/' + queryId).delete();
    // }
}
