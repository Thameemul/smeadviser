import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class ContributionService {
    constructor() {}

    getAuth$(): Observable<{}> {
        return of({});
    }
}
