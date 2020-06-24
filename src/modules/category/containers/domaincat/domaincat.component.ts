import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-domaincat',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './domaincat.component.html',
    styleUrls: ['domaincat.component.scss'],
})
export class DomainCatComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
