import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { FAQComponent } from './faq.component';

@Component({
    template: ` <sb-faq></sb-faq> `,
})
class TestHostComponent {
    // someInput = 1;
    // someFunction(event: Event) {}
}
