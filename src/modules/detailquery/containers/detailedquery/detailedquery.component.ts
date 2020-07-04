import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-detailedquery',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './detailedquery.component.html',
    styleUrls: ['detailedquery.component.scss'],
})
export class DetailedQueryComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
