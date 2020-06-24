import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class ViewProfileService {
    constructor() {}

    getTables$(): Observable<{}> {
        return of({});
    }
}
