import { query } from '@angular/animations';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { Observable, of } from 'rxjs';

import { FAQ } from '../models/faq.model';
import { userquery } from '../models/query.model';
import { reply } from '../models/reply.model';

@Injectable()
export class ContributionService {
    constructor() {}

    getReplies(docId: string): Observable<reply[]> {
        const o = new Observable<reply[]>(observer => {
            const t = firebase
                .firestore()
                .collection('userquery')
                .doc('uwDdLfOH3OTW4GcwTGYX')
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
                .get()
                .then(querySnapshot => {
                    const faqs: FAQ[] = [];
                    querySnapshot.forEach(doc => {
                        // doc.data() is never undefined for query doc snapshots
                        faqs.push(doc.data());
                        // console.log(doc.id, ' => ', doc.data());
                    });
                    observer.next(faqs);
                });
        });
        return o;
    }
    getQueries(): Observable<userquery[]> {
        const o = new Observable<userquery[]>(observer => {
            const t = firebase
                .firestore()
                .collection('userquery')
                // .where('isFAQ', '==', 1)
                .get()
                .then(querySnapshot => {
                    const queries: userquery[] = [];
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
    getQuery(id: string): Observable<userquery> {
        const o = new Observable<userquery>(observer => {
            const t = firebase
                .firestore()
                .collection('userquery')
                .doc('uwDdLfOH3OTW4GcwTGYX')
                .get({ source: 'server' })
                .then(querySnapshot => {
                    const _query: userquery = { ...querySnapshot.data() };
                    observer.next(_query);
                });
        });
        return o;
    }
}
