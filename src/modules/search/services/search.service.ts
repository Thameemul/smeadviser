import { Injectable } from '@angular/core';
import { ActivatedRoute, ChildActivationEnd, Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Query } from '../../addnewquery/models/query.model';

@Injectable()
export class SearchService {
    getSearchResults(): Observable<Query[]> {
        const o = new Observable<Query[]>(observer => {
            const t = firebase
                .firestore()
                .collection('query')
                .where('category', '<=', 'cal')
                .get()
                .then(querySnapshot => {
                    const queries: Query[] = [];
                    querySnapshot.forEach(doc => {
                        // doc.data() is never undefined for query doc snapshots
                        queries.push(doc.data());
                        console.log(doc.id, ' => ', doc.data());
                    });
                    observer.next(queries);
                });
        });
        return o;
    }
}
