import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { QueryContriComponent } from './querycontri.component';

@Component({
    template: ` <sb-querycontri></sb-querycontri> `,
})
class TestHostComponent {
    // someInput = 1;
    // someFunction(event: Event) {}
}
