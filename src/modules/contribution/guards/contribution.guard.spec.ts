import { TestBed } from '@angular/core/testing';

import { ContributionGuard } from './contribution.guard';

describe('Contribution Guards', () => {
    let contributionGuard: ContributionGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [ContributionGuard],
        });
        contributionGuard = TestBed.inject(ContributionGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            contributionGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });
});
