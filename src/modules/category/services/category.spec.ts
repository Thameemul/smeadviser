import { TestBed } from '@angular/core/testing';

import { CategoryService } from './category.service';

describe('ContributionService', () => {
    let categoryService: CategoryService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CategoryService],
        });
        categoryService = TestBed.inject(CategoryService);
    });

    describe('getContribution$', () => {
        it('should return Observable<Auth>', () => {
            categoryService.getAuth$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
