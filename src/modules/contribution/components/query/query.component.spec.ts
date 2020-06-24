import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { QueryComponent } from './query.component';

@Component({
    template: ` <sb-query></sb-query> `,
})
class TestHostComponent {
    // someInput = 1;
    // someFunction(event: Event) {}
}
