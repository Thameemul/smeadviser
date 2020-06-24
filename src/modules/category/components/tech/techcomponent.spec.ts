import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { TechComponent } from './tech.component';

@Component({
    template: ` <sb-tech></sb-tech> `,
})
class TestHostComponent {
    // someInput = 1;
    // someFunction(event: Event) {}
}
