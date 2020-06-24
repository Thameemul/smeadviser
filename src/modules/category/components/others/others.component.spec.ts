import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { OthersComponent } from './others.component';

@Component({
    template: ` <sb-others></sb-others> `,
})
class TestHostComponent {
    // someInput = 1;
    // someFunction(event: Event) {}
}
