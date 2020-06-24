import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutContributionComponent } from './layout-contribution.component';

@Component({
    template: `
        <sbpro-layout-contribution
            [someInput]="someInput"
            (someFunction)="someFunction($event)"
        ></sbpro-layout-contribution>
    `,
})
class TestHostComponent {
    // someInput = 1;
    // someFunction(event: Event) {}
}
