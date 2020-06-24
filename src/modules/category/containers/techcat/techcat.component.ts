import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-techcat',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './techcat.component.html',
    styleUrls: ['techcat.component.scss'],
})
export class TechCatComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
