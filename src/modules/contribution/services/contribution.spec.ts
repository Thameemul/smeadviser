import { TestBed } from '@angular/core/testing';

import { ContributionService } from './contribution.service';

describe('ContributionService', () => {
    let contributionService: ContributionService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ContributionService],
        });
        contributionService = TestBed.inject(ContributionService);
    });

    describe('getContribution$', () => {
        it('should return Observable<Auth>', () => {
            contributionService.getAuth$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
