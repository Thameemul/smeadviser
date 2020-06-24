import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-otherscat',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './otherscat.component.html',
    styleUrls: ['otherscat.component.scss'],
})
export class OthersCatComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
