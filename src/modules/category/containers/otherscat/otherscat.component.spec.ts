import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { OthersCatComponent } from './otherscat.component';

@Component({
    template: ` <sb-otherscat></sb-otherscat> `,
})
class TestHostComponent {
    // someInput = 1;
    // someFunction(event: Event) {}
}
