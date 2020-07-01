import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-query',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './query.component.html',
    styleUrls: ['query.component.scss'],
})
export class QueryComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
