import { TestBed } from '@angular/core/testing';

import { ViewProfileService } from './view-profile.service';

describe('ViewProfileService', () => {
    let viewprofileService: ViewProfileService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ViewProfileService],
        });
        viewprofileService = TestBed.inject(ViewProfileService);
    });

    describe('getTables$', () => {
        it('should return Observable<Tables>', () => {
            viewprofileService.getTables$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
