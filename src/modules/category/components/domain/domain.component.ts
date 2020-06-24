import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-domain',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './domain.component.html',
    styleUrls: ['domain.component.scss'],
})
export class DomainComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
