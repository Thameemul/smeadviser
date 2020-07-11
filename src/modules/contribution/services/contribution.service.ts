import { Injectable } from '@angular/core';
import { Query } from '@modules/addnewquery/models';
import * as firebase from 'firebase/app';
import { Observable, of } from 'rxjs';

import { FAQ } from '../models/faq.model';
import { reply } from '../models/reply.model';

@Injectable()
export class ContributionService {
    constructor() {}

    getAuth$(): Observable<{}> {
        return of({});
    }
    getFAQs(): Observable<FAQ[]> {
        // const t: AngularFirestoreCollection = this.firestore.collection<Post>('post');
        // return t.valueChanges();
        const o = new Observable<FAQ[]>(observer => {
            const t = firebase
                .firestore()
                .collection('post')
                .where('isFAQ', '==', 1)
                // .orderBy('createDate', 'desc')
                .get()
                .then(querySnapshot => {
                    const faqs: FAQ[] = [];
                    querySnapshot.forEach(doc => {
                        // doc.data() is never undefined for query doc snapshots
                        faqs.push(doc.data());
                        //console.log(doc.id, ' => ', doc.data());
                    });
                    observer.next(faqs);
                });
        });
        return o;
    }
    getReplies(docId: string): Observable<reply[]> {
        const o = new Observable<reply[]>(observer => {
            const t = firebase
                .firestore()
                .collection('query')
                .doc(docId)
                .collection('replies')
                // .where('isFAQ', '==', 1)
                .get()
                .then(querySnapshot => {
                    const replies: reply[] = [];
                    querySnapshot.forEach(doc => {
                        // doc.data() is never undefined for query doc snapshots
                        console.log(doc.id, ' => ', doc.data());
                        replies.push(doc.data());
                    });
                    observer.next(replies);
                });
        });
        return o;
    }
    getQueries(): Observable<Query[]> {
        const o = new Observable<Query[]>(observer => {
            const t = firebase
                .firestore()
                .collection('query')
                // .where('isFAQ', '==', 1)
                .get()
                .then(querySnapshot => {
                    const queries: Query[] = [];
                    querySnapshot.forEach(doc => {
                        // doc.data() is never undefined for query doc snapshots
                        queries.push({ id: doc.id, ...doc.data() });
                        // console.log(doc.id, ' => ', doc.data());
                    });
                    observer.next(queries);
                });
        });
        return o;
    }
    getQuery(id: string): Observable<Query> {
        const o = new Observable<Query>(observer => {
            const t = firebase
                .firestore()
                .collection('query')
                .doc(id)
                .get({ source: 'server' })
                .then(querySnapshot => {
                    const _query: Query = { ...querySnapshot.data() };
                    console.log(_query);
                    observer.next(_query);
                });
        });
        return o;
    }
}
