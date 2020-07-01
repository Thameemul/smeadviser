import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-newquery',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './newquery.component.html',
    styleUrls: ['newquery.component.scss'],
})
export class NewQueryComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
