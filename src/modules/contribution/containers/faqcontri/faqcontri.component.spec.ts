import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { FAQContriComponent } from './faqcontri.component';

@Component({
    template: ` <sb-faqcontri></sb-faqcontri> `,
})
class TestHostComponent {
    // someInput = 1;
    // someFunction(event: Event) {}
}
