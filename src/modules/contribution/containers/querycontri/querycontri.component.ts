import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-querycontri',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './querycontri.component.html',
    styleUrls: ['querycontri.component.scss'],
})
export class QueryContriComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
