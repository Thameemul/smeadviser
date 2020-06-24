import { TestBed } from '@angular/core/testing';

import { AddNewQueryGuard } from './addnewquery.guard';

describe('AddNewQuery Guards', () => {
    let addnewqueryGuard: AddNewQueryGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AddNewQueryGuard],
        });
        addnewqueryGuard = TestBed.inject(AddNewQueryGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            addnewqueryGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });
});
