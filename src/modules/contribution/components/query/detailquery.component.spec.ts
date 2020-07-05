import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailqueryComponent } from './detailquery.component';

describe('DetailqueryComponent', () => {
  let component: DetailqueryComponent;
  let fixture: ComponentFixture<DetailqueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailqueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
