import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { Observable, of } from 'rxjs';

import { FAQ } from '../models/faq.model';

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
                .get()
                .then(querySnapshot => {
                    const faqs: FAQ[] = [];
                    querySnapshot.forEach(doc => {
                        // doc.data() is never undefined for query doc snapshots
                        faqs.push(doc.data());
                        console.log(doc.id, ' => ', doc.data());
                    });
                    observer.next(faqs);
                });
        });
        return o;
    }
}
