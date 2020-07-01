import { TestBed } from '@angular/core/testing';
import { CategoryGuard } from './category.guard';




describe('Contribution Guards', () => {
    let categoryGuard: CategoryGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [categoryGuard],
        });
        categoryGuard = TestBed.inject(CategoryGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            categoryGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });
});
