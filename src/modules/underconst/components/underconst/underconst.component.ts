import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
@Component({
    selector: 'sb-underconst',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './underconst.component.html',
    styleUrls: ['underconst.component.scss'],
})
export class UnderConstComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
