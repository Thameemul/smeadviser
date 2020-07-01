import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class CategoryService {
    constructor() {}

    getAuth$(): Observable<{}> {
        return of({});
    }
}
