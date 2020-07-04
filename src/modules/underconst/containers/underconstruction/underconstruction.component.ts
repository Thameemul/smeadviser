import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-underconstruction',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './underconstruction.component.html',
    styleUrls: ['underconstruction.component.scss'],
})
export class UnderConstructionComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
