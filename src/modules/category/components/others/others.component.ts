import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-others',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './others.component.html',
    styleUrls: ['others.component.scss'],
})
export class OthersComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
