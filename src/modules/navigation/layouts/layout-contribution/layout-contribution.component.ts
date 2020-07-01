import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-layout-contribution',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './layout-contribution.component.html',
    styleUrls: ['layout-contribution.component.scss'],
})
export class LayoutContributionComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
