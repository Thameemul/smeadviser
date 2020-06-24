import { TestBed } from '@angular/core/testing';

import { ViewProfileGuard } from './view-profile.guard';

describe('Tables Guards', () => {
    let tablesGuard: ViewProfileGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [ViewProfileGuard],
        });
        tablesGuard = TestBed.inject(ViewProfileGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            tablesGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });
});
