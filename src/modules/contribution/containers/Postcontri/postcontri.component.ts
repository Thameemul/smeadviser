import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
@Component({
    selector: 'sb-postcontri',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './postcontri.component.html',
    styleUrls: ['postcontri.component.scss'],
})
export class PostContriComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
